import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    mongoose.connection.on("connected", () => console.log("DB connected"));
    await mongoose.connect(`${url}/hotel-booking`);
  } catch (e) {
    console.log(e.message);
  }
};

export default connectDB;
