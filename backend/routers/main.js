var express = require('express');
var translite = require('../modules/transliteration');
var router = express.Router();

router.get('/', function (req, res) {
   res.send('This page is under contruction.')
})

module.exports = router