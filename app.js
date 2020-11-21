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

// insert many documents(same as records in MySQL)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db){ 
	if(err) throw err;
	var dbo = db.db('statwig_mongo');
	var many_manufacturer_obj = [ 
	     	{ name: 'John', address: 'Highway 71'},
    		{ name: 'Peter', address: 'Lowstreet 4'},
    		{ name: 'Amy', address: 'Apple st 652'},
    		{ name: 'Hannah', address: 'Mountain 21'},
    		{ name: 'Michael', address: 'Valley 345'},
    		{ name: 'Sandy', address: 'Ocean blvd 2'},
    		{ name: 'Betty', address: 'Green Grass 1'},
    		{ name: 'Richard', address: 'Sky st 331'},
    		{ name: 'Susan', address: 'One way 98'},
    		{ name: 'Vicky', address: 'Yellow Garden 2'},
    		{ name: 'Ben', address: 'Park Lane 38'},
    		{ name: 'William', address: 'Central st 954'},
    		{ name: 'Chuck', address: 'Main Road 989'},
    		{ name: 'Viola', address: 'Sideway 1633'}
	];
	dbo.collection("manufacturers").insertMany(many_manufacturer_obj, function(err, res){
	  if(err) throw err;
	  console.log("Number of Document Inserted : " + res.insertedCount);
	  db.close();
  });
}); 


/* The Result Object

{
  result: { ok: 1, n: 14 },
  ops: [
    { name: 'John', address: 'Highway 71', _id: 58fdbf5c0ef8a50b4cdd9a84 },
    { name: 'Peter', address: 'Lowstreet 4', _id: 58fdbf5c0ef8a50b4cdd9a85 },
    { name: 'Amy', address: 'Apple st 652', _id: 58fdbf5c0ef8a50b4cdd9a86 },
    { name: 'Hannah', address: 'Mountain 21', _id: 58fdbf5c0ef8a50b4cdd9a87 },
    { name: 'Michael', address: 'Valley 345', _id: 58fdbf5c0ef8a50b4cdd9a88 },
    { name: 'Sandy', address: 'Ocean blvd 2', _id: 58fdbf5c0ef8a50b4cdd9a89 },
    { name: 'Betty', address: 'Green Grass 1', _id: 58fdbf5c0ef8a50b4cdd9a8a },
    { name: 'Richard', address: 'Sky st 331', _id: 58fdbf5c0ef8a50b4cdd9a8b },
    { name: 'Susan', address: 'One way 98', _id: 58fdbf5c0ef8a50b4cdd9a8c },
    { name: 'Vicky', address: 'Yellow Garden 2', _id: 58fdbf5c0ef8a50b4cdd9a8d },
    { name: 'Ben', address: 'Park Lane 38', _id: 58fdbf5c0ef8a50b4cdd9a8e },
    { name: 'William', address: 'Central st 954', _id: 58fdbf5c0ef8a50b4cdd9a8f },
    { name: 'Chuck', address: 'Main Road 989', _id: 58fdbf5c0ef8a50b4cdd9a90 },
    { name: 'Viola', address: 'Sideway 1633', _id: 58fdbf5c0ef8a50b4cdd9a91 } ],
  insertedCount: 14,
  insertedIds: [
    58fdbf5c0ef8a50b4cdd9a84,
    58fdbf5c0ef8a50b4cdd9a85,
    58fdbf5c0ef8a50b4cdd9a86,
    58fdbf5c0ef8a50b4cdd9a87,
    58fdbf5c0ef8a50b4cdd9a88,
    58fdbf5c0ef8a50b4cdd9a89,
    58fdbf5c0ef8a50b4cdd9a8a,
    58fdbf5c0ef8a50b4cdd9a8b,
    58fdbf5c0ef8a50b4cdd9a8c,
    58fdbf5c0ef8a50b4cdd9a8d,
    58fdbf5c0ef8a50b4cdd9a8e,
    58fdbf5c0ef8a50b4cdd9a8f 
    58fdbf5c0ef8a50b4cdd9a90,
    58fdbf5c0ef8a50b4cdd9a91 ]
}

*/
