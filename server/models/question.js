/*
    /server/models/item.js
    Create database schema for "Item"
*/
console.log("Loaded: /server/models/question.js");

var mongoose = require("mongoose");

var QuestionSchema = mongoose.Schema({
    text: String,
    description: String,
    answers: [{
      text: String,
      description: String,
      likes: Number
     }],
});

module.exports = mongoose.model("Question", QuestionSchema);
