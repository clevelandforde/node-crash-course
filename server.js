const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.socket);
});

const port = 3002;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
