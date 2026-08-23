import express from 'express'
import upload from '../middlewares/uploadMidddleware'
import { protect } from '../middlewares/authMiddleware'
import { createRoom, getOwnerRooms } from '../controllers/roomController'

const Router = express.Router()

Router.route('/').post( upload.array('images', 4), protect, createRoom).get(getRooms)
Router.get('/owner', protect, getOwnerRooms)


export default Router