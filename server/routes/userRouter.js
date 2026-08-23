import express from 'express'
import { protect } from '../middlewares/authMiddleware.js'
import { getUserData } from '../controllers/userController.js'

const Router = express.Router()

Router.get('/', protect, getUserData)

export default Router