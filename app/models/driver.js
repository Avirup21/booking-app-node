const mongoose = require('mongoose')
const validator=require('validator')
const isNumeric=require('validator/lib/isNumeric')

const Schema = mongoose.Schema  
const driverSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    }, 
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true 
    }, 
    name: {
        type: String,
        required: [true,'name required']
    },
   pickupTime:{
    type: String,
    required: true
   },
    price: {
        type: String,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    },
})


const Driver = mongoose.model('Driver', driverSchema)

module.exports = Driver

