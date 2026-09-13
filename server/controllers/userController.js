import User from "../models/UserModel.js";

export const getUserData = async (req, res) => {
  try {
    const userId = req.user?._id || req.auth?.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      user,
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
};

export const storeRecentSearchCities = async (req, res) => {
  try {
    const recentSearchCity = req.body.recentSearchCity || req.body.recentSearchedCities;
    const userId = req.user?._id || req.auth?.userId;

    if (!recentSearchCity) {
      return res.json({ success: false, message: "City is required" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (!Array.isArray(user.recentSearchedCities)) {
      user.recentSearchedCities = [];
    }

    user.recentSearchedCities = user.recentSearchedCities.filter(
      (city) => city.toLowerCase() !== recentSearchCity.toLowerCase()
    );

    user.recentSearchedCities.push(recentSearchCity);

    if (user.recentSearchedCities.length > 3) {
      user.recentSearchedCities.shift();
    }

    await user.save();

    res.json({
      success: true,
      message: "City added",
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
};