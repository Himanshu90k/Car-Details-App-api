import express from 'express'
import { addCarDetails } from '../controllers/carDetailsController.js'

const router = express.Router()

router.post('/', addCarDetails)

export default router