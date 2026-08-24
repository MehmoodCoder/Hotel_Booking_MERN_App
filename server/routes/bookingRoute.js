import express from 'express'
import { checkAvailabilityAPI, CreateBooking } from '../controllers/bookingController'
import protect from '../middlewares/authMiddleware.js'

const Router = express.Router()

Router.post('/check-availability', checkAvailabilityAPI)

export default Router