import Car from "../models/Car.js";

export const addCarDetails = async (req, res, next) => {
    try {
        const {name, carNo, mechanicName, serviceAdvisor, RO_PRW, work} = req.body

        //create new car object from req body and save to the database
        const car = new Car ({name, carNo, mechanicName, serviceAdvisor, RO_PRW, work})
        await car.save()
        res.status(201).json(car)

    } catch(error) {
        console.log(error)
        next()
    }
}
