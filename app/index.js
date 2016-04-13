/*function app (req, res) {
    res.send('Hello World!');
}

module.exports = app*/


var express = require('express');
var app = express();

var tab = [
    "a","z","e","r"
]

var motivations = require('motivations');
var pickOne = require('pick-one');

app.get("/mot", function(req, res){

    res.send(pickOne(motivations));

});
module.exports = app;
