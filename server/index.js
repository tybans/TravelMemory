const express = require('express');
require('dotenv').config()

// CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to control how web pages in one domain can request and interact with resources (such as data, images, or scripts) hosted on another domain. This security mechanism is in place to prevent potentially harmful cross-origin requests.
// two domain means: our server and client port numbers
// when we connect our server with client we need cors
const cors = require('cors')
const dbConnect = require('./dbConnection') // importing db connection file

const app = express(); // It confirms that we are using express framework to create our server.
const Port = process.env.PORT


// connecting to database
dbConnect();

// JSON middleware to handle json req
app.use(express.json()); // It confirms that the server can parse incoming requests with JSON payloads. This is important for handling data sent in the body of POST or PUT requests, which is often in JSON format.

// middleware for cors
app.use(cors()) // It confirms that the server can accept requests from different origins (domains). This is important for allowing your frontend application to communicate with your backend server, especially if they are hosted on different domains or ports.

// importing routes
const tripRoutes = require('./routes/trip.route')

// middleware for routes
app.use('/trip', tripRoutes) //http://localhost:5005/trip/addTrip --> POST ROUTE
// We are using app.use because we are using multiple routes in our app. It is a way to define a base URL for a group of related routes. In this case, all routes defined in tripRoutes will be prefixed with /trip.



app.get('/hello', (req, res) =>{
    res.send("Server is running...")
})


app.listen(Port, () =>{
    console.log(`Server started at http://localhost:${Port}`);
})