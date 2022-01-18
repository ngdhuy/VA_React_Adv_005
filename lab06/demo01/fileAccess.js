const http = require('http');
const fs = require('fs');     // file system

const hostname = 'localhost';
const port = 3001;

const filePath = __dirname + '/data.json';

const server = http.createServer((req, res) => {
  // const fileContent = fs.readFileSync(filePath, 'utf-8');
  fs.readFile(filePath, 'utf-8', (err, contents) => {
    if(err !== null)
      console.error('Error 404: Cannot read File');
    else {
      res.writeHeader(200, { 'Content-Type' : 'json' });
      res.end(contents);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});