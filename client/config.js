/*
    /client/config.js
    Configure client routes, and really anything
*/
var app = angular.module("itemsApp", ["ngRoute"]);
console.log("Creating App");

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "partials/items-index.html",
        controller: "itemsIndex"
    }).when("/new-item", {
        templateUrl: "partials/new-item.html",
        controller: "newItem"
    });
    console.log("Configuring Routes")
});