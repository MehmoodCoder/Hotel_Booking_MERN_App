import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  getUserData,
  storeRecentSearchCities,
} from "../controllers/userController.js";

const Router = express.Router();

Router.get("/", protect, getUserData);
Router.post("/store-recent-search", protect, storeRecentSearchCities);

export default Router;
