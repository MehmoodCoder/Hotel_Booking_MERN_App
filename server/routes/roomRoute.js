import express from "express";
import upload from "../middlewares/uploadMidddleware.js";
import { protect } from "../middlewares/authMiddleware.js";
import {
  createRoom,
  getOwnerRooms,
  toggleRoomAvailability,
} from "../controllers/roomController.js";

const Router = express.Router();

Router.route("/")
  .post(upload.array("images", 4), protect, createRoom)
  .get(getRooms);
Router.get("/owner", protect, getOwnerRooms);
Router.post("/toggle-availability", protect, toggleRoomAvailability);

export default Router;
