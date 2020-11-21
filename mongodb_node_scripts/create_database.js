// import package
var mongo = require('mongodb');

// create database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/statwig_mongo";

MongoClient.connect(url, { useNewUrlParser: true },  function(err, db){
	if(err) throw err;
	console.log("Database Created!");
	db.close();
});

