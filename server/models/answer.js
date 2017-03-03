/*
    /server/models/answer.js
    Create database schema for "Answer"
*/
console.log("Loaded: /server/models/question.js");

var mongoose = require("mongoose");


var AnswerSchema = mongoose.Schema({
    text: String,
    description: String,
});

module.exports = mongoose.model("Answer", AnswerSchema);
