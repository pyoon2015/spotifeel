var express = require('express');
var app = express();

var things = require('./things.js');

// For body parser
var bodyParser = require('body-parser');
// To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))
// To parse json data
app.use(bodyParser.json())

// For cookie parser
var cookieParser = require('cookie-parser');
app.use(cookieParser())

app.use('/things', function(req, res, next){
    console.log("A new request arrived at " + Date.now());

    // This function call is very important. It tells that more processing is
    // required for the current request and is in the next middleware function/route handler.
    next();
});

// both index.js and things.js should be in the same directory
app.use('/things', things);

app.listen(3000);