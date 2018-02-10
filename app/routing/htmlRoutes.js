var express = require("express");

var path = require('path');

var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;



module.exports.htmlRouteMethod = function (app) { 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'../public', "home.html"));
});





app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname,'../public', "survey.html"));
});



    
};

