var express = require('express');
const app = require('../app');
var router = express.Router();

var data = require('../data/data.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-type', 'application/json');
  res.status(200).json(data)
});

router.get('/:id', function(req, res, next) {
  res.setHeader('Content-type', 'application/json');
  res.status(200).json(data.filter(item => item.id == req.params['id']))
})

router.post('/', function(req, res, next) {
  res.setHeader('Content-type', 'application/json'); 
  res.status(200).end('POST');
})


router.put('/', function(req, res, next) {
  res.setHeader('Content-type', 'application/json'); 
  res.status(200).end('PUT');
})

router.delete('/', function(req, res, next) {
  res.setHeader('Content-type', 'application/json'); 
  res.status(200).end("DELETE")
})


module.exports = router;
