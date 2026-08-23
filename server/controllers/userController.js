export const getUserData = async (req, res) => {
  try {
    const role = req.body.role;
    const recentSearchedCities = req.body.recentSearchedCities;
    res.json({
      success: true,
      role,
      recentSearchedCities,
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
};
