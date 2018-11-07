// app.js
const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route')

// initialize our express app
const app = express();

app.use('/products', product)

const port = 1234;

app.listen(port, () => {
	console.log('Server is up and running on port number ' + port);
});

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://prince:pass1234@ds155833.mlab.com:55833/productstutorial';