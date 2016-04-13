const port = process.env.PORT || '8080';
const host = process.env.HOST || '0.0.0.0';

const express = require('express');
const app = express();


var rules = require('./app/index.js');
app.use(rules)
//app.use(express.static('site'));

//app.use(require('./app'));

app.listen(port, host);

console.log('Server running %s:%d...', host, port, 'i m momo');

//module.exports = app;
