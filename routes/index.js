import express from 'express'
import yearRoute from './yearRoute.js'
import carDetailsRoute from './carDetailsRoute.js'

const router = express.Router()

router.use('/year', yearRoute)
router.use('/car-details', carDetailsRoute)

export default router