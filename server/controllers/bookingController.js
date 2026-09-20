import Booking from "../models/bookingModel.js";
import Room from "../models/roomModel.js";
import Hotel from "../models/hotelModel.js";
import transpoter from "../configs/nodemailer.js";
import stripe from "stripe";

const checkAvailability = async ({ checkInDate, checkOutDate, room }) => {
  try {
    const bookings = await Booking.find({
      room,
      $or: [
        {
          checkInDate: { $lt: new Date(checkOutDate) },
          checkOutDate: { $gt: new Date(checkInDate) },
        },
      ],
    });
    return bookings.length === 0;
  } catch (e) {
    console.error(e.message);
    return false;
  }
};

export const checkAvailabilityAPI = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate } = req.body;
    const isAvailable = await checkAvailability({
      checkInDate,
      checkOutDate,
      room,
    });
    res.json({
      success: true,
      isAvailable,
    });
  } catch (e) {
    res.json({
      success: false,
      msg: e.message,
    });
  }
};

export const CreateBooking = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate, guest } = req.body;
    const userId = req.auth?.userId || req.user?._id;

    const isAvailable = await checkAvailability({
      checkInDate,
      checkOutDate,
      room,
    });

    if (!isAvailable) {
      return res.json({
        success: false,
        msg: "Room is not available for selected dates",
      });
    }

    const RoomData = await Room.findById(room);
    if (!RoomData) {
      return res.json({ success: false, msg: "Room not found" });
    }

    const CheckIn = new Date(checkInDate);
    const CheckOut = new Date(checkOutDate);
    const timeDif = CheckOut.getTime() - CheckIn.getTime();
    const nights = Math.max(1, Math.ceil(timeDif / (1000 * 3600 * 24)));

    const totalPrice = RoomData.pricePerNight * nights;

    const hotelId = RoomData.hotel?._id || RoomData.hotel;

    const hotelData = await Hotel.findById(hotelId);

    const booking = await Booking.create({
      user: userId,
      room,
      hotel: hotelId,
      guests: String(guest),
      checkInDate: CheckIn,
      checkOutDate: CheckOut,
      price: totalPrice,
      status: "pending",
      isPaid: false,
    });

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: req.user?.email,
      subject: "HotelHub Booking Confirmation",
      html: `
    <h2>Your Booking Details</h2>
    <p>Dear ${req.user?.username || "Guest"},</p>
    <p>Thank you for your booking! Here are your reservation details:</p>
    <ul>
      <li><strong>Booking ID:</strong> ${booking._id}</li>
      <li><strong>Hotel:</strong> ${hotelData?.name || "N/A"}</li>
      <li><strong>Room Type:</strong> ${RoomData.roomType}</li>
      <li><strong>Check-In Date:</strong> ${new Date(booking.checkInDate).toDateString()}</li>
      <li><strong>Check-Out Date:</strong> ${new Date(booking.checkOutDate).toDateString()}</li>
      <li><strong>Guests:</strong> ${booking.guests}</li>
      <li><strong>Total Price:</strong> $${booking.price}</li>
      <li><strong>Payment Status:</strong> ${booking.isPaid ? "Paid" : "Pay at Hotel"}</li>
    </ul>
    <p>We look forward to hosting you!</p>
    <p>Best regards,</p>
    <p>The HotelHub Team</p>
    <p>Contact us: <a href="mailto:${process.env.SENDER_EMAIL}">${process.env.SENDER_EMAIL}</a></p>
  `,
    };

    await transpoter.sendMail(mailOptions);

    res.json({
      success: true,
      msg: "Booking created successfully",
      booking,
    });
  } catch (e) {
    res.json({
      success: false,
      msg: e.message,
    });
  }
};

export const getUserBookings = async (req, res) => {
  try {
    const userId = req.auth?.userId || req.user?._id;
    const bookings = await Booking.find({ user: userId })
      .populate("room hotel")
      .sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    res.json({ success: false, message: "Failed to fetch bookings" });
  }
};

export const getHotelBookings = async (req, res) => {
  try {
    const userId = req.auth?.userId || req.user?._id;
    const hotel = await Hotel.findOne({ owner: userId });
    if (!hotel) {
      return res.json({ success: false, message: "No Hotel found" });
    }

    const bookings = await Booking.find({ hotel: hotel._id })
      .populate("room hotel user")
      .sort({ createdAt: -1 });

    const totalBookings = bookings.length;
    const totalRevenue = bookings.reduce(
      (acc, booking) => acc + (booking.price || 0),
      0,
    );

    res.json({
      success: true,
      dashboardData: { totalBookings, totalRevenue, bookings },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const stripePayment = async (req, res) => {
  try {
    const { bookingId } = req.body; 
    const booking = await Booking.findById(bookingId)
    const roomData = await Room.findById(booking.room).populate("hotel");
    const totalPrice = booking.price;
    const {origin} = req.headers;

    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);

    const lineItems = [
      {
        price_data: {
          currency: "usd",
          unit_amount: Math.round(totalPrice * 100),
          product_data: {
            name: roomData.name,
            description: roomData.description,
          },
        },
        quantity: 1,
      },
    ];
    
    const session = await stripeInstance.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${origin}/success`,
      cancel_url: `${origin}/my-bookings`,
      metadata: {
        bookingId,
      },
    });

    res.json({ success: true, url: session.url }); 

    // later and CRUD on add room

  }
  catch (error) {
    res.json({ success: false, message: error.message });
  }
}
