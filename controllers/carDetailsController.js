import Car from "../models/Car.js";

export const addCarDetails = async (req, res, next) => {
    try {
        const {carName, carNo, mechanicName, serviceAdvisor, RO_PRW, work} = req.body

        //create new car object from req body and save to the database
        const car = new Car ({carName, carNo, mechanicName, serviceAdvisor, RO_PRW, work})
        await car.save()
        res.status(201).json(car)

    } catch(error) {
        console.log(error)
        next()
    }
}

export const updateCarDetails = async (req, res, next) => {
    try {
        //search for the car object
        const car = await Car.findById(req.params.id)
        if (!car) {
            res.status(404).json({message: "car details not found"})
        }

        // update the car data on the database
        const {mechanicName, serviceAdvisor, RO_PRW, work} = req.body
        const updateCar = await Car.findByIdAndUpdate(
            req.params.id,
            {$set: {mechanicName, serviceAdvisor, RO_PRW, work}, $inc: {__v: 1}}, 
            {new: true}
        )

        console.log(`updated the car details with id: ${req.params.id}`)
        res.status(200).json(updateCar)

        
    } catch(error) {
        console.log(error)
        next()
    }
}