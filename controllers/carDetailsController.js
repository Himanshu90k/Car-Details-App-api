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
        next(error)
    }
}

export const updateCarDetails = async (req, res, next) => {
    try {
        //search for the car object
        const car = await Car.findById(req.params.id)
        if (!car) {
            return res.status(404).json({message: "car details not found"})
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
        next(error)
    }
}

export const deleteCarDetails = async (req, res, next) => {
    try {
        //delete the car document from the MonogDB
        const car = await Car.findByIdAndDelete(req.params.id)
        if (!car) {
            return res.status(404).json({message: "car details not found"})
        }

        console.log(`The car details with id: ${req.params.id} was deleted`)
        res.status(200).json({message: "Car details deleted"})

    } catch (error) {
        console.log(error)
        next(error)
    }
}

export const getCarDetails = async (req, res, next) => {
    try {
        const car = await Car.findById(req.params.id)
        if(!car) {
            return res.status(404).json({message: "Car details not found"})
        }

        console.log(`car details requested with id: ${req.params.id} and ip${req.ip}`)
        res.status(200).json(car)

    } catch (error) {
        console.log(error)
        next(error)
    }
}