import Hotel from "../models/hotelModel.js";
import { v2 as cloudinary } from "cloudinary";
import Room from "../models/roomModel.js";

export const createRoom = async (req, res) => {
  try {
    const { roomType, pricePerNight, aminities } = req.body;

    console.log("Clerk User ID (req.auth.userId):", req.auth?.userId);
    console.log("Type of req.auth.userId:", typeof req.auth?.userId);

    const hotel = await Hotel.findOne({ owner: req.auth.userId });
    console.log("Found Hotel in DB:", hotel);

    if (!hotel) {
      console.log("No Hotel found for the given owner ID", req.auth.userId);
      return res.json({
        success: false,
        message: "No Hotel found",
      });
    }

    if (!req.files || req.files.length === 0) {
      return res.json({
        success: false,
        message: "Please upload at least one image",
      });
    }

    const uploadImages = req.files.map(async (file) => {
      const response = await cloudinary.uploader.upload(file.path);
      return response.secure_url;
    });

    const images = await Promise.all(uploadImages);

    await Room.create({
      hotel: hotel._id,
      roomType,
      pricePerNight: Number(pricePerNight),
      aminities: JSON.parse(aminities),
      images,
    });

    res.json({
      success: true,
      message: "Room Created Successfully",
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
};

export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ isAvailable: true })
      .populate({
        path: "hotel",
        populate: {
          path: "owner",
          select: "image",
        },
      })
      .sort({ createdAt: -1 });

    res.json({ success: true, rooms });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getOwnerRooms = async (req, res) => {
  try {
    const hotelData = await Hotel.findOne({ owner: req.auth.userId });

    if (!hotelData) {
      return res.json({ success: false, message: "No Hotel found", rooms: [] });
    }

    const rooms = await Room.find({ hotel: hotelData._id }).populate("hotel");

    res.json({ success: true, rooms });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const toggleRoomAvailability = async (req, res) => {
  try {
    const { roomId } = req.body;
    const roomData = await Room.findById(roomId);

    if (!roomData) {
      return res.json({ success: false, message: "Room not found" });
    }

    roomData.isAvailable = !roomData.isAvailable;
    await roomData.save();

    res.json({ success: true, message: "Room availability Updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
