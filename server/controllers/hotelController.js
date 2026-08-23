import Hotel from "../models/hotelModel";
import User from '../models/UserModel.js'

export const RegisterHotel = async (req, res ) => {
    try {
        const {name , address, contact, city } = req.body
        const owner = req.user._id

        const hotel = await Hotel.findOne({})

        if (hotel) {
            return res.json({
            success: false,
            message:  "Hotel already registered"
        })
        }

        await Hotel.create({name, address, contact, city, owner})

        await User.findByIdAndUpdate(owner, {role: "hotelOwner"})

        res.json({
            success: true,
            message:  "Hotel registered successfully"
        })
    } catch (e) {
        res.json({
            success: false,
            message:  e.message
        })
    }
}
