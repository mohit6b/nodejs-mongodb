
// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://mohit:mohit123>@ds159204.mlab.com:59204/pharma'; //ds123619.mlab.com:23619/statwig_mongodb;
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));































const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});


























Team VIRAAM
Boond
bindu (Bharat interface of developers united)
