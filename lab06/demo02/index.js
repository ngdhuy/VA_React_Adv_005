const express = require('express');
const app = express();

const hostname = 'localhost';
const port = 3002;

app.get('/', (req, res) => {
  res.send('Hello world');
})

app.listen(port, hostname, () => {
  console.log(`Server express is running at http://${hostname}:${port}`);
})