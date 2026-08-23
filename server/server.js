import express, { Router } from "express";
import dotenv from "dotenv";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import cors from "cors";
import UserRouter from './routes/userRouter.js'
import HotelRouter from './routes/hotelRoutes.js'
import connectCloudinary from "./configs/cloudinary.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(async (req, res, next) => {
  await connectDB();
  next();
});
connectCloudinary()

app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("API is working");
});
app.use("/api/user", UserRouter);
app.use("/api/hotels", HotelRouter);

app.use("/api/clerk", clerkWebhooks);

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 6000;
  app.listen(PORT, () => {
    console.log(`The server is running on PORT : ${PORT}`);
  });
}

export default app;
