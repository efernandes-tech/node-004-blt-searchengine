var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { results: false });
});

/* GET search page. */
router.get('/search', function (req, res, next) {
  var searchParams = req.query.query.toUpperCase().split(' ');
  var db = require('../db');
  var Cliente = db.Mongoose.model('clientes', db.ClienteSchema, 'clientes');
  Cliente.find({ tags: { $all: searchParams } }, function (e, docs) {
      res.render('index', { results: true, search: req.query.query, list: docs });
  });
});

module.exports = router;
