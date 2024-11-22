import Car from "../models/Car.js";

export const getSearchResults = async (req, res, next) => {
    try {
        if(req.query.query !== '') {
            const searchResults = await Car.find(
                {carNo: { $regex: req.query.query, $options: 'i'}}
            ).limit(20)

            if(searchResults.length === 0) {
                return res.status(404).json({'message': 'no result found'})
            }

            res.status(200).json(searchResults)
        } else {
            res.status(404).json({'message': "no result found"})
        }

    } catch(error) {
        console.error(error)
        next(error)
    }
}