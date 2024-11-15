import express from 'express'
import { getAllCars } from '../controllers/allDetailsControllers.js'

const router = express.Router()

// get all car details in a year
router.get('/:id', getAllCars)

export default router