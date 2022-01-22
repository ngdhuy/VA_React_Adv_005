const express = require('express');
const app = express();

const data = require('./data.json');

const hostname = 'localhost';
const port = 3002;

app.get('/', (req, res) => {
  res.send('Homepage');
})

app.get('/product', (req, res) => {
  res.setHeader('Content-Type', 'json');
  res.status(200).end(JSON.stringify(data)); // -> must be return String/Text
})

// pass by query string
app.get('/product/byID', (req, res) => {
  console.log(req.query);
  const id = req.query.id;
  const product = data.find(item => item.id == id);
  res.setHeader('Content-Type', 'json');
  res.status(200).end(JSON.stringify(product));
})

app.get('/product/:id', (req, res) => {
  const id = req.params['id'];
  const product = data.find(item => item.id == id);
  res.setHeader('Content-Type', 'json');
  res.status(200).end(JSON.stringify(product));
})

app.get('/product/search/:from-:to', (req, res) => {
  const from = parseInt(req.params['from']);
  const to = parseInt(req.params['to']);
  const products = data.filter(item => from <= item.price && item.price <= to);
  res.setHeader('Content-Type', 'json');
  res.status(200).end(JSON.stringify(products));
})

app.listen(port, hostname, () => {
  console.log(`Server express is running at http://${hostname}:${port}`);
})