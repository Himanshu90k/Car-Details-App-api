import Car from "../models/Car.js";

export const getSearchResults = async (req, res, next) => {
    try {
        const searchResults = await Car.find(
            {carNo: { $regex: req.query.query, $options: 'i'}}
        ).limit(20)

        res.status(200).json(searchResults)
    } catch(error) {
        console.error(error)
        next(error)
    }
}