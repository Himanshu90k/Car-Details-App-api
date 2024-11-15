import express from 'express'
import carDetailsRoute from './carDetailsRoute.js'
import allDetailsRoute from './allDetailsRoute.js'

const router = express.Router()

router.use('/car-details', carDetailsRoute)
router.use('/all-details', allDetailsRoute)

export default router