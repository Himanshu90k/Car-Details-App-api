import express from 'express'
import carDetailsRoute from './carDetailsRoute.js'
import allDetailsRoute from './allDetailsRoute.js'
import searchRoute from './searchRoute.js'

const router = express.Router()

router.use('/car-details', carDetailsRoute)
router.use('/all-details', allDetailsRoute)
router.use('/search', searchRoute)

export default router