var express = require("express");

var path = require('path');

var bodyParser = require('body-parser');

 // var friendsFile = require('./app/data/friends.js');

 // var friendsAPI = friendsFile.friends

 var friendsFile = require('C:/Users/Aaron Brinkley/Friend-Finder/app/data/friends.js');

var friendsAPI = friendsFile.friends

var app = express();
var PORT = 3000;



module.exports.apiRouteMethod = function (app) { 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post("/api/friends", function(req, res) {
  
  var newfriend = req.body;

 


  var friendScore = newfriend.scores;

  console.log(friendScore);
		
  var matchName = '';
		
  var matchImage = '';
		
  var totalDifference = 10000; 
		
  for (var i = 0; i < friendsAPI.length; i++) {
			
		var diff = 0;
			
		// for (var s = 0; s < friendScore.length; s++) {
		// 	diff += Math.abs(friendsAPI[i].scores[s] - friendScore[s]);
		// }
			
		// if (diff < totalDifference) {
				
		// 	totalDifference = diff;
		// 	matchName = friendsAPI[i].name;
		// 	matchImage = friendsAPI[i].photo;
		// }
    };



  
  console.log(newfriend);

  friendsAPI.push(newfriend);

  res.json(newfriend);
    
});




app.get("/api/friends", function(req, res) {
  res.json(friendsAPI);
});







}

