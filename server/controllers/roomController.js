import Hotel from "../models/hotelModel.js"
import cloudinary from 'cloudinary'
import Room from "../models/roomModel.js"


export const createRoom = async (req, res) => {
    try {
        const {roomType, pricePerNight, aminities} = req.body
        const hotel = await Hotel.findOne({owner: req.auth.userId})

        if (!hotel) {
            return res.json({
                success: false,
                msg: "No hotel Found"
            })
        }

        const uploadImages = req.files.map(async file => {
            const response = await cloudinary.uploader.upload(file.path)
            return response.secure_url
        })

        const images = await Promise.all(uploadImages)

        await Room.create({
            hotel: hotel._id,
            roomType,
            pricePerNight: +pricePerNight,
            aminities: JSON.parse(aminities),
            images
        })

        res.json({
            success: true,
            meg: "Room Created Successfully"
        })
    } catch (e) {
        res.json({
            success: false,
            meg: e.msg
        })
    }
}