import Booking from "../models/bookingModel";
import Room from "../models/roomModel";

const checkAvailability = async ({ checkInDate, checkOutDate, room }) => {
  try {
    const bookings = await Booking.find({
      room,
      checkInDate: { $lte: checkInDate },
      checkOutDate: { $gte: checkOutDate },
    });
    const isAvailable = bookings.length === 0;
    return isAvailable;
  } catch (e) {
    console.error(e.message);
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
      msg: e.msg,
    });
  }
};

export const CreateBooking = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate, guest } = req.body;
    const user = req.body._id;
    const isAvailable = await checkAvailability({
      checkInDate,
      checkOutDate,
      room,
    });

    if (!isAvailable) {
      res.json({
        success: false,
        msg: "room is not Available",
      });
      const RoomData = await Room.findById(room).populate("hotel");
      let price = RoomData.pricePerNight;

      const CheckIn = new Date(checkInDate);
      const CheckOut = new Date(checkOutDate);
      const timeDif = CheckOut.getTime() - checkInDate.getTime();
      const nights = Math.ceil(timeDif / (1000 * 3600 * 24));

      totalPrice *= nights;

      const booking = await Booking.create({
        user,
        room,
        hotel: RoomData.hotel._id,
        guests: +guest,
        checkInDate,
        checkOutDate,
        totalPrice,
      });
    }
    res.json({
      success: true,
      msg: "Booking create successfully",
    });
  } catch (e) {
    res.json({
      success: false,
      msg: e.msg,
    });
  }
};
