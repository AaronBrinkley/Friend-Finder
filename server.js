var express = require("express");



var path = require('path');


var bodyParser = require('body-parser');

console.log("hello");

var htmlFile = require('./app/routing/htmlRoutes.js');

console.log("hello");

var apiFile = require('./app/routing/apiRoutes.js');



var friendsFile = require('./app/data/friends.js');
//


var friendsAPI = friendsFile.friends


var app = express();

var PORT = process.env.PORT || 3000;

htmlFile.htmlRouteMethod(app)

apiFile.apiRouteMethod(app)


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



