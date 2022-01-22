const http = require('http');
const fs = require('fs');     // file system

const hostname = 'localhost';
const port = 3001;

const filePath = __dirname + '/page.html';

const server = http.createServer((req, res) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  res.writeHeader(200, { 'Content-Type' : 'text/html' });
  res.end(fileContent);
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});