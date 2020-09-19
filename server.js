const fs = require("fs");
const path = require("path");
const heroku = require("heroku")

// Sets up Express
// =============================================================
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;


// Sets up Express to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// HTML Routes
// =============================================================
require("./assets/notes")(app);
require("./assets/*")(app);

//require("./api/notes")(app);

// Listener
// =============================================================
app.listen(PORT, function() {
    console.log("Applistening on PORT: " + PORT)
});