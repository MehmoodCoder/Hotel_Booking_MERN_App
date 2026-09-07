import { getAuth } from "@clerk/express";
import User from "../models/UserModel.js";

export const protect = async (req, res, next) => {
  try {
    const { userId } = getAuth(req);  

    if (!userId) {
      return res.json({
        success: false,
        message: "Not Authenticated",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.json({
        success: false,
        message: "User not found in database",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};