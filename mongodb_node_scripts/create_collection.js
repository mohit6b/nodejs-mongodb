// import package
var mongo = require('mongodb');

// create collection(table)
var MongoClient = require('mongodb').MongoClient;
var url  = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db){ 
	if(err) throw err;
	var dbo = db.db("statwig_mongo");
	dbo.createCollection("manufacturers", function(err, res){ 
	  if(err) throw err;
	  console.log("Collection Created!");
	  db.close();
	});
});

