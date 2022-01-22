const express = require('express');
const router = express.Router();

const data = require('../resources/data.json');

// end-point -> GET: /product 
router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify(data));
})

// end-point -> GET: /product/1
router.get('/:id', (req, res) => {
  const id = req.params['id'];
  const result_data = data.find(item => item.id == id);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify(result_data));
})

// end-point -> GET: /product/category/mobile
router.get('/category/:cate', (req, res) => {
  const cate = req.params['cate'];
  const result_data = data.filter(item => item.category == cate);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify(result_data));
})

module.exports = router;