// app.js
const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route')

// initialize our express app
const app = express();

const mongoose = require('mongoose');
let dev_db_url = mongoose.connect('mongodb://someuser:abcd1234@ds155833.mlab.com:55833/productstutorial', { useNewUrlParser: true });

// const mongoDB = process.env.MONGODB_URI || dev_db_url;

// mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product)

const port = 1234;

app.listen(port, () => {
	console.log('Server is up and running on port number ' + port);
});

