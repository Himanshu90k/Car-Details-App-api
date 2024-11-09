import mongoose from "mongoose"

const carDetailsSchema = mongoose.Schema({
    carName: {type: String},
    date: {type: Date, required: true},
    carNo: {type: String, required: true, unique: true},
    mechanicName: {type: String},
    serviceAdvisor: {type: String},
    RO_PRW: {type: String},
    work: {type: String}
}, {timestamps: true})

const Car = mongoose.model('Car', carDetailsSchema)
export default Car