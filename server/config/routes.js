/*
    /server/config/routes.js
    Configure the routes (Listen for routes, connect to controllers)
*/
console.log("Loaded /server/config/routes.js");

var QuestionController = require("../controllers/questions");

module.exports = function (app) {

    app.get("/getquestions", QuestionController.index)  // Controller get questions
    app.post("/addq", QuestionController.createq)  // Controller create questions
    app.get("/oneq/:id", QuestionController.oneq) //get one question object from db
    app.post("/adda", QuestionController.addanswer)  // Controller create questions
    app.post('/likes', QuestionController.likes) //update like count
};
