import User from "../models/UserModel.js";

export const protect = async (req, res, next) => {
  const { userId } = req.auth;
  console.log("Error in middleware");
  
  if (!userId) {
    return res.json({
      success: false,
      message: "not Authenticated",
    });
  } else {
    const user = User.findById(userId);
    req.user = user;
    next();
  }
};
