/*
    /server.js
    Entry point for server.  Requires all necessary server files.
*/
console.log("Loaded /server.js");
var express = require("express");
var app = express();

var path = require("path");

app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "bower_components")));

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(3000, function () {
    console.log("Listening on 3000");
});