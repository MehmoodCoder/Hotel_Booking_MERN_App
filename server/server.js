import express from "express";
import dotenv, { config } from "dotenv";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import cors from "cors";

dotenv.config();

connectDB(process.env.MONGODB_URI);

const app = express();
const PORT = process.env.PORT || "6000";

app.use(cors());
app.use(express.json);
app.use(clerkMiddleware());

app.get("/", async (req, res) => {
  res.send("API is working");
});
app.use("/api/clerk", clerkWebhooks);

app.listen(PORT, () => {
  console.log(`The server is running on PORT : ${PORT}`);
});
