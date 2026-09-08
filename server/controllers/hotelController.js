import Hotel from "../models/hotelModel.js";
import User from "../models/UserModel.js";

export const RegisterHotel = async (req, res) => {
  try {
    const { name, address, contact, city } = req.body;
    const owner = req.auth?.userId || req.user?._id;

    const existingHotel = await Hotel.findOne({ owner });

    if (existingHotel) {
      return res.json({
        success: false,
        message: "Hotel already registered for this account",
      });
    }

    await Hotel.create({ name, address, contact, city, owner });

    if (req.user?._id) {
      await User.findByIdAndUpdate(req.user._id, { role: "hotelOwner" });
    } else {
      await User.findOneAndUpdate({ _id: owner }, { role: "hotelOwner" });
    }

    res.json({
      success: true,
      message: "Hotel registered successfully",
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
};