var express = require('express'),
    quoter  = require('./quoter');

var app = module.exports = express.Router();

app.get('/', function(req, res) {
     res.sendfile('./ember2app/index.html');
});

app.get('/api/random-quote', function(req, res) {
  res.status(200).send(quoter.getRandomOne());
});
