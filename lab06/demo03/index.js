const express = require('express');
const app = express();

const hostname = 'localhost';
const port = '3002';

// end-point -> GET: /
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send("Hello world!!!");
})

const productRouter = require('./routers/product.router');
app.use('/product', productRouter);

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
})