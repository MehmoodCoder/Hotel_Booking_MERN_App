import {v2 as cloudinary} from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config()

const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    })
    console.log("Cloudinary connected successfully", process.env.CLOUDINARY_CLOUD_NAME);
    console.log("Cloudinary API Key:", process.env.CLOUDINARY_API_KEY);
    console.log("Cloudinary API Secret:", process.env.CLOUDINARY_API_SECRET);
}

export default connectCloudinary;