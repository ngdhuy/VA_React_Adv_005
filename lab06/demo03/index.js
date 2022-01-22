const express = require('express');
const app = express();

const hostname = 'localhost';
const port = '3002';

const log = require('./middleware/log.middleware');
app.use(log);

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

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