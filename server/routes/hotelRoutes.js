import express from 'express'
import { protect } from '../middlewares/authMiddleware.js'
import { RegisterHotel } from '../controllers/hotelController.js'

const Router = express.Router()

Router.post('/', protect, RegisterHotel)

export default Router