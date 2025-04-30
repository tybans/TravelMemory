const mongoose = require('mongoose');

const URL = process.env.MONGO_URL

async function dbConnect() {
    if (!URL) {
        console.error("MongoDB URL is missing! Check your .env file.");
        process.exit(1);
    }
    try {
        // mongoose.connect takes the URL of the database and options as parameters. The options are used to configure the connection settings, such as using the new URL parser and enabling unified topology.
        // The useNewUrlParser option is set to true to use the new URL string parser, which is more robust and handles various connection string formats.
        // The useUnifiedTopology option is set to true to use the new Server Discover and Monitoring engine, which provides a more efficient way to manage connections to the MongoDB server.
        await mongoose.connect(URL, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected...");
    } catch (error) {
        console.log(`Couldn't connect to database, ERROR: ${error}`);
        
    }
}

module.exports = dbConnect