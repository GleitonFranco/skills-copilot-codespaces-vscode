// Create a web server that listens on port 4000 and serves a list of comments
// stored in comments.json. The comments should be served at the path /comments
// and should be served as JSON.

// To start the server, run the following command:
// node comments.js

// You can view the comments by visiting http://localhost:4000/comments in your
// web browser.

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error reading comments file');
        return;
      }

      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});