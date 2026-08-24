import Booking from "../models/bookingModel"


const checkAvailability = async ({  checkInDate, checkOutDate, room }) => {
    try {
        const bookings = await Booking.find({
            room,
            checkInDate: {$lte: checkInDate},
            checkOutDate: {$gte: checkOutDate}
        })
        const isAvailable = bookings.length === 0
        return isAvailable
    } catch (e) {
        console.error(e.message)
    }
}

export const checkAvailabilityAPI = async (req, res) => {
    try {
        const {room, checkInDate, checkOutDate} = req.body
        const isAvailable = await checkAvailability({checkInDate, checkOutDate, room})
        res.json({
            success: true,
            isAvailable
        })
    } catch (e) {
        res.json({
            success: false,
            msg: e.msg
        })
    }
}