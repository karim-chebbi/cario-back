const mongoose = require('mongoose')

const Schema = mongoose.Schema

const carSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: Number,
    fuel: String,
    description: String,
    image: String,
    
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
} ,
    { timestamps: true }
    ,
    { collection: 'cars' }
)


module.exports = Car = mongoose.model('Car', carSchema)