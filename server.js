/*
    /server.js
    Entry point for server.  Requires all necessary server files.
*/
console.log("Loaded /server.js");

var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var routes = require("./server/config/routes.js");


app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "bower_components")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(8000, function () {
    console.log("Listening on 8000");
});
