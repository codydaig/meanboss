'use strict';

// This will be the start of the app. 

var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.send('Welcome to MeanBoss!');
});

app.listen(3000);