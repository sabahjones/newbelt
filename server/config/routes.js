/*
    /server/config/routes.js
    Configure the routes (Listen for routes, connect to controllers)
*/
console.log("Loaded /server/config/routes.js");

var ItemsController = require("../controllers/items");

module.exports = function (app) {

    app.get("/items", ItemsController.index)  // Controller get items
    app.post("/items", ItemsController.create)  // Controller create items

};
