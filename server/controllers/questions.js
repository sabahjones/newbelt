/*
    /server/controllers/items.js
    Main logic for connecting http requests with database requests, delivering responses
*/
console.log("Loaded: /server/controllers/questions.js");

var Question = require('../models/question.js')

module.exports = {

    index: function (request, response) {
        Question.find({}, function(err, results){
          if (err) {
            console.log("unable to get questions from db")
          }
          else {
            console.log("questions retrieved!")
            response.json(results)
          }
        })
        console.log("Question Index");
    },


    addanswer: function (request, response){
      var newanswer = Question.findOneAndUpdate(
        {_id: request.body.id},
        {$push: {answers: {
            text: request.body.text,
            description: request.body.description,
            likes: 0}}},
          function(err) {
            if (err){
              console.log("error adding question")
            }
            else {
              console.log("successfully added question")
              response.json(newanswer)
            }}
          )
    },

    likes: function(request, response){
      var updatelikes = Question.update(
          {_id: request.body.id},
          {answers: {likes: request.body.value}},
      function (err){
        if (err){
          console.log("unable to increment likes")
        }
        else {
          console.log("successfully update likes")
          response.json(updatelikes)
        }
      })
    },

    createq: function (request, response) {
        var newquestion = new Question({
            text: request.body.text,
            description: request.body.description
        })
        newquestion.save(function(err){
          if (err){
            console.log("unable to save question")
          }
          else {
            console.log("saved new question successfully!")
            response.json(newquestion)
          }
        })
        console.log(request.body)
    },

    oneq: function(request, response) {
      Question.find({_id: request.params.id}, function(err, results){
        if (err){
          console.log("unable to retrive question")
        }
        else {
          console.log("I have your question!")
          response.json(results);
        }
      })
    }
};
