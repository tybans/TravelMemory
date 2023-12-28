const express = require('express');
require('dotenv').config()

// CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to control how web pages in one domain can request and interact with resources (such as data, images, or scripts) hosted on another domain. This security mechanism is in place to prevent potentially harmful cross-origin requests.
// two domain means: our server and client port numbers
// when we connect our server with client we need cors
const cors = require('cores')

const app = express();
const Port = process.env.PORT

const dbConnect = require('./dbConnection')
dbConnect();

// JSON middleware to handle json req
app.use(express.json());

// middleware for cors
app.use(cors())

// importing routes
const tripRoutes = require('./routes/trip.route')

// middleware for routes
app.use('/trip', tripRoutes) //http://localhost:5005/trip/addTrip --> POST ROUTE



app.get('/hello', (req, res) =>{
    res.send("Server is running...")
})


app.listen(Port, () =>{
    console.log(`Server started at http://localhost:${Port}`);
})