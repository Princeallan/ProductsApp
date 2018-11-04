// app.js
var express = require('express');
var bodyParser = require('body-parser');

// initialize our express app
var app = express();

var port = 1234;

app.listen(port, () => {
	console.log('Server is up and running on port numner ' + port);
});