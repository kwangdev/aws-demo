var express = require('express');
var router = express.Router();
const data = require('../data/data.json')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(data);
});

module.exports = router;
