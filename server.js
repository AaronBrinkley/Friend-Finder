var express = require("express");

console.log("hello")
var path = require('path');
console.log("hello")

var bodyParser = require('body-parser');
console.log("hello")

var htmlFile = require('./app/routing/htmlRoutes.js');
console.log("hello")

var apiFile = require('./app/routing/apiRoutes.js');
console.log("hello")

var friendsFile = require('./app/data/friends.js');
console.log("hello")

var friendsAPI = friendsFile.friends
console.log("hello")


var app = express();

var PORT = process.env.PORT || 3000;

htmlFile.htmlRouteMethod(app)

apiFile.apiRouteMethod(app)


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



