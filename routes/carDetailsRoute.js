import express from 'express'
import { addCarDetails, updateCarDetails } from '../controllers/carDetailsController.js'

const router = express.Router()

router.post('/', addCarDetails)
router.put('/:id', updateCarDetails)

export default router