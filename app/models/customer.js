const mongoose = require('mongoose')
const validator=require('validator')
const isNumeric=require('validator/lib/isNumeric')

const Schema = mongoose.Schema  
const customerSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    }, 
    name: {
        type: String,
        required: [true,'name required']
    },
   origin:{
    type: String,
    required: true
   },
    destination: {
        type: String,
        required:true
    },
    pickupTime:{
        type: String,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    },
})


const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer

