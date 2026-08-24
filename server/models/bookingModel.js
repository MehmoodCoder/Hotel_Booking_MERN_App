import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    user: { type: String, required: true, ref: "User" },
    room: { type: String, required: true, ref: "Room" },
    hotel: { type: Number, required: true, ref: "Hotel" },
    checkInDate: { type: Date, required: true, ref: "User" },
    checkOutDate: { type: Date, required: true, ref: "User" },
    price: { type: Number, required: true },
    guests: { type: String, required: true},
    status: { type: String, required: true, enum: ['pending', 'confirmed', 'cancelled'] },
    paymentMethod: {type: String, default: "Pay at Hotel" , required: true},
    isPaid: {type: Boolean, default: false}
  },
  { timestamps: true },
);

const Booking = mongoose.model("Booking", BookingSchema);

export default Booking;
