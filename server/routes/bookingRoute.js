import express from "express";
import {
  checkAvailabilityAPI,
  CreateBooking,
  getHotelBookings,
  getUserBookings,
  stripePayment,
} from "../controllers/bookingController.js";
import {protect} from "../middlewares/authMiddleware.js";

const Router = express.Router();

Router.post("/check-availability", checkAvailabilityAPI);
Router.post("/book", protect, CreateBooking);
Router.get("/user", protect, getUserBookings);
Router.get("/hotel", protect, getHotelBookings);
Router.post("/stripe-payment", protect, stripePayment);

export default Router;
