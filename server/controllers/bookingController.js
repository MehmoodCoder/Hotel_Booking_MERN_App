import Booking from "../models/bookingModel.js";
import Room from "../models/roomModel.js";
import Hotel from "../models/hotelModel.js";

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
    const userId = req.auth.userId || req.user._id;

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

    const RoomData = await Room.findById(room).populate("hotel");
    if (!RoomData) {
      return res.json({ success: false, msg: "Room not found" });
    }

    const CheckIn = new Date(checkInDate);
    const CheckOut = new Date(checkOutDate);
    const timeDif = CheckOut.getTime() - CheckIn.getTime();
    const nights = Math.max(1, Math.ceil(timeDif / (1000 * 3600 * 24)));

    const totalPrice = RoomData.pricePerNight * nights;

    const booking = await Booking.create({
      user: userId,
      room,
      hotel: RoomData.hotel._id,
      guests: String(guest),
      checkInDate: CheckIn,
      checkOutDate: CheckOut,
      price: totalPrice,
      status: "pending",
      isPaid: false,
    });

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
    const userId = req.auth.userId || req.user._id;
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
    const hotel = await Hotel.findOne({ owner: req.auth._id });
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
