const mongoose = require('mongoose')

const tripSchema = mongoose.Schema({
    tripName:{
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50
    },
    startDateOfJourney:{
        type: String,
        required: true
    },
    endDateOfJourney:{
        type: String,
        required: true
    },
    nameOfHotels:{
        type: String
    },
    placesVisited:{
        type: String
    },
    totalCost:{
        type: Number
    },
    tripType:{
        type:String,
        enum: ['backpacking', 'leisure', 'business']
    },
    experience:{
        type: String
    },
    image:{
        type:String
    },
    shortDescription:{
        type: String,
        required: true
    },
    featured:{
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

const TripModel = mongoose.model('tripdetails', tripSchema)

module.exports = {TripModel} //It confirms that we are exporting the TripModel so that it can be used in other parts of the application. This is a common practice in Node.js applications to keep the code organized and modular.
// We are keeping this inside curly braces because we are exporting multiple things from this file. In this case, we are exporting the TripModel, which is the Mongoose model for the trip schema. By using curly braces, we can export multiple models or functions from the same file and import them as needed in other files.