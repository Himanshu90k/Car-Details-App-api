import express from "express";
import { getSearchResults } from "../controllers/searchController.js";

const router = express.Router()

//instantly return all search results
router.get('/', getSearchResults)

export default router