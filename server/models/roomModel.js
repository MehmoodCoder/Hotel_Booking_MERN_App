import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    hotel: { type: String, required: true, ref: "Hotel" },
    roomType: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    aminities: { type: Array, required: true },
    images: [{ type: String }],
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const Room = mongoose.model("Room", roomSchema);

export default Room;
