import Car from "../models/Car.js"

export const getAllCars = async (req, res, next) => {
    try {
        const startOfYear = new Date(Date.UTC(req.params.id, 0, 1, 0));
        const endOfYear = new Date(Date.UTC(req.params.id, 11, 31, 23, 59, 59, 999));

        const cars = await Car.find({date: {$gte: startOfYear, $lt: endOfYear}})

        if(!cars || cars.length === 0) {
            return res.status(404).json({message: "No Data found"})
        }
        console.log(`The cars list was fetched for the date: ${req.params.id}`)
        res.status(200).json(cars)

    } catch (error) {
        console.log(error)
        next(error)
    }
}