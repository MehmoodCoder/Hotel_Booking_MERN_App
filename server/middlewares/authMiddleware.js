import User from "../models/UserModel.js";

export const protect = async (req, res, next) => {
  const { userId } = req.auth;
  if (!userId) {
    return res.json({
      success: false,
      message: "Not Authenticated",
    });
  } else {
    const user = User.findById(userId);
    req.user = user;
    next();
  }
};
