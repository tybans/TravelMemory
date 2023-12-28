const mongoose = require('mongoose');
const tripModel = require('../models/trip.model');

async function tripAdditionController(req, res) {
    console.log(req.body);
    try {
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



async function getTripDetailsController(req, res) {
    try {
        await tripModel.TripModel.find({})
        // it uses promises, need to use promise
        .then(doc => res.send(doc))
        .catch(error => res.send("Something went wrong... ", error))
    } catch (error) {
        res.send(`Something went wrong in Getting data, ERROR: ${error}`)
        console.log(`Something went wrong in Getting data, ERROR: ${error}`)
    }
}


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