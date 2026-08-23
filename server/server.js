import express from "express";
import dotenv, { config } from "dotenv";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'

config.dotenv();

connectDB(process.env.MONGODB_URI);

const app = express();
const PORT = process.env.PORT || "6000";

app.use(cors());
app.use(express.json)
app.use(clerkMiddleware())

app.listen(PORT, () => {
  console.log(`The server is running on PORT : ${PORT}`);
});
