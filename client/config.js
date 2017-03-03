/*
    /client/config.js
    Configure client routes, and really anything
*/
var app = angular.module("app", ["ngRoute"]);
console.log("Creating App");

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "partials/login.html",
        controller: "logincontroller"
    }).when("/qindex", {
        templateUrl: "partials/q_index.html",
        controller: "qController"
    }).when("/addquestion", {
        templateUrl: "partials/newQuestion.html",
        controller: "newQuestion"
    }).when("/answerpage/:id", {
        templateUrl: "partials/answers.html",
        controller: "answercontroller"
    }).when("/newanswerpage/:id", {
        templateUrl: "partials/newAnswer.html",
        controller: "newanswer"
    });
    console.log("Configuring Routes")
});
