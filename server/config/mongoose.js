/*
    /server/config/mongoose.js
    Connect / Configure the database.
*/
console.log("Loaded /server/config/mongoose.js");

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/question_belt");

require("../models/question");
