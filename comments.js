// Create a web server that listens for requests on port 3000. It should respond to requests for /comments with a list of comments (an array of objects). Each object should have a username key and a comment key, both of which are strings.

const http = require('http');

http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const comments = [
      { username: 'Bob', comment: 'I love your blog!' },
      { username: 'Dave', comment: 'Good job' },
    ];
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
}).listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});