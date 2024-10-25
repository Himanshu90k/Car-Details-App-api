import express from 'express'
import { addCarDetails, updateCarDetails, deleteCarDetails, getCarDetails } from '../controllers/carDetailsController.js'

const router = express.Router()

router.post('/', addCarDetails)
router.put('/:id', updateCarDetails)
router.delete('/:id', deleteCarDetails)

// get details of a single car
router.get('/:id', getCarDetails)

export default router