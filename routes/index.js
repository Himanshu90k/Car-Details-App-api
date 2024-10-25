import express from 'express'
import carDetailsRoute from './carDetailsRoute.js'

const router = express.Router()

router.use('/car-details', carDetailsRoute)

export default router