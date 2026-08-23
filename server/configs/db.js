import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "hotel-booking",
    });
    console.log("DB connected");
  } catch (e) {
    console.log("DB Error:", e.message);
  }
};

export default connectDB;
