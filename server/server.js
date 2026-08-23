import express from "express";
import dotenv from "dotenv";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("API is working");
});

app.use("/api/clerk", clerkWebhooks);

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 6000;
  app.listen(PORT, () => {
    console.log(`The server is running on PORT : ${PORT}`);
  });
}

export default app;