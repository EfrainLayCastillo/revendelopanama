var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RevendeloPanama' });
});

/* GET Acces page */
router.get('/cuenta', function(req, res, next) {
  res.render('register', { title: 'Registrate' });
});

module.exports = router;
