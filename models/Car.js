import mongoose from "mongoose"

const carDetailsSchema = mongoose.Schema({
    name: {type: String},
    carNo: {type: String, required: true, unique: true},
    mechanicName: {type: String},
    serviceAdvisor: {type: String},
    RO_PRW: {type: String, enum: ["r.o", 'p.r.w']},
    work: {type: String}
}, {timestamps: true})

const Car = mongoose.model('Car', carDetailsSchema)
export default Car