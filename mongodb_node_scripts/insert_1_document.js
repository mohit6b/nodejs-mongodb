// import package
var mongo = require('mongodb');

// insert document(record) into collection(table)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db){ 
	if(err) throw err;
	var dbo = db.db('statwig_mongo');
	var manufacturer_obj = { name: "John Smith", address: "37 Streets" };
	dbo.collection("manufacturers").insertOne(manufacturer_obj, function(err, res){
	  if(err) throw err;
	  console.log("One Document Inserted");
	  db.close();
  });
}); 


