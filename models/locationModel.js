const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
    ip: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    timezone: {
        type: String,
        required: true,
    },
    organization: {
        type: String,
        required: true
    }
    // recipeID: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Recipe'
    // }
})

module.exports = mongoose.model('address', locationSchema, 'addresses');