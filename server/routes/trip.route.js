const express = require('express')
const routes = express.Router() // It confirms that we are using express framework to create our server and we are creating a new router instance. This router will be used to define routes for handling HTTP requests related to trip details.
// The router instance allows us to define multiple routes and their corresponding request handlers in a modular way, making the code more organized and maintainable.

const tripDetails = require('../controllers/trip.controller');

routes.post('/addTrip', tripDetails.tripAdditionController) //this is the route for adding trip details
// We are using tripdetails.tripAdditionController as the request handler for this route. This function will be called when a POST request is made to the /addTrip endpoint. The tripAdditionController function is defined in the trip.controller.js file and is responsible for handling the logic of adding a new trip detail to the database.
routes.get('/getTrip', tripDetails.getTripDetailsController)
routes.get('/:id', tripDetails.getTripDetailByIdController) //this id is the same name which i have specified in param

module.exports = routes