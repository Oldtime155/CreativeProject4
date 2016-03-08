var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
   res.sendFile('index.html', { root: 'public' });
});

//onionScope
var onionScope = "http://a.knrz.co/horoscope-api/current";
router.get('/onionScope', function(req,res) {
  console.log("In onionScope");
  request(onionScope).pipe(res);
  
});

module.exports = router;