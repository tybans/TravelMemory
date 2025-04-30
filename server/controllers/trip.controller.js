const mongoose = require('mongoose');
const tripModel = require('../models/trip.model');

async function tripAdditionController(req, res) {
    console.log(req.body);
    try {
        // Starting to create a new trip detail using the TripModel schema
        // The req.body contains the data sent in the request body, which is expected to match the schema defined in TripModel.
        // We are trying to create a new trip detail using the TripModel schema, which is defined in the trip.model.js file.
        // This tripDetail object will be used to create a new document in the MongoDB database.
        let tripDetail = tripModel.TripModel({
            tripName: req.body.tripName,
            startDateOfJourney: req.body.startDateOfJourney,
            endDateOfJourney: req.body.endDateOfJourney,
            nameOfHotels: req.body.nameOfHotels,
            placesVisited: req.body.placesVisited,
            totalCost: req.body.totalCost,
            tripType: req.body.tripType,
            experience: req.body.experience,
            image: req.body.image,
            shortDescription: req.body.shortDescription,
            featured: req.body.featured
        })
        await tripDetail.save()
        res.send("Trip Added Successfully...")
        
    } catch (error) {
        res.send(`something went wrong... ERROR: ${error}`)
        console.log(`Something went wrong... ERROR: ${error}`);
    }
}



// This function is used to get all trip details from the database. It uses the TripModel to find all documents in the collection and returns them as a response.
async function getTripDetailsController(req, res) {
    try {
        await tripModel.TripModel.find({}) // find({}) is used to find all documents in the collection. It returns an array of all trip details.
        // The find() method is a Mongoose method that retrieves documents from the MongoDB database based on the specified criteria. In this case, an empty object ({}) is passed as the criteria, which means it will retrieve all documents in the collection.
        // it uses promises, need to use promise
        .then(doc => res.send(doc)) // doc is the array of all trip details retrieved from the database.
        // The then() method is used to handle the successful resolution of the promise returned by the find() method. It takes a callback function that receives the retrieved documents (doc) as an argument.
        .catch(error => res.send("Something went wrong... ", error)) 
    } catch (error) {
        res.send(`Something went wrong in Getting data, ERROR: ${error}`)
        console.log(`Something went wrong in Getting data, ERROR: ${error}`)
    }
}


// This function is used to get a specific trip detail by its ID. It uses the TripModel to find a document with the specified ID and returns it as a response.
// The ID is passed as a parameter in the request URL, and it is accessed using req.params.id.
async function getTripDetailByIdController(req, res) {
    try {
        await tripModel.TripModel.findById(req.params.id)
        .then(doc => res.send(doc))
        .catch(error => res.send(`Something Went wrong... ${error}`))
        
    } catch (error) {
        res.send(`Something went wrong in Getting data by ID, ERROR: ${error}`)
        console.log(`Something went wrong in Getting data by ID, ERROR: ${error}`)
    }
}


module.exports = {tripAdditionController, getTripDetailsController, getTripDetailByIdController}