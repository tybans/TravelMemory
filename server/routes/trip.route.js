const express = require('express')
const routes = express.Router()

const tripDetails = require('../controllers/trip.controller');

routes.post('/addTrip', tripDetails.tripAdditionController)
routes.get('/getTrip', tripDetails.getTripDetailsController)
routes.get('/:id', tripDetails.getTripDetailByIdController) //this id is the same name which i have specified in param

module.exports = routes