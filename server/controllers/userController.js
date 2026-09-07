import User from "../models/UserModel.js";

export const getUserData = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

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
    const { recentSearchedCities } = req.body;
    const user = await req.user;
    if (user.recentSearchedCities.length < 3) {
      user.recentSearchedCities.push(recentSearchedCities);
    } else {
      user.recentSearchedCities.shift();
      user.recentSearchedCities.push(recentSearchedCities);
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