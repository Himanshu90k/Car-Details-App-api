import express from 'express'
import { addCarDetails, updateCarDetails, deleteCarDetails, getCar, getCars } from '../controllers/carDetailsController.js'

const router = express.Router()

router.post('/', addCarDetails)
router.put('/:id', updateCarDetails)
router.delete('/:id', deleteCarDetails)

// get details of a single car
router.get('/:id', getCar)

// get details of all cars on a day
router.get('/', getCars)

export default router