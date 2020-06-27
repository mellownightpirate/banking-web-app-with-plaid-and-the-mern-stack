// pull in our required dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// initialise our app using express()
const app = express();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Pull in our MongoURI from our keys.js file and connect to MongoDB database
mongoose.connect(
    db,
    { useNewUrlParser: true }
)
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));