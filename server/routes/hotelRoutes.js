import express from 'express'
import { protect } from '../middlewares/authMiddleware'
import { RegisterHotel } from '../controllers/hotelController'

const Router = express.Router()

Router.post('/', protect, RegisterHotel)


export default Router