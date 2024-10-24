import express from 'express'
import { getDataByYear } from '../controllers/yearController.js'

const router = express.Router()

router.get('/', getDataByYear)

export default router