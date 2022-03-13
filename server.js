const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //Set header content type
  res.setHeader('Content-Type', 'text/html');
  let path = './views/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    default:
      path += '404.html';
      break;
  }

  // send and html file
  fs.readFile(path, (err, result) => {
    if (err) {
      console.log(err);
    } //res.write(result); // If we're only sending one thing into res.write, then we don't actually need this line of code here, we can put it directly into res.send method instead. If we were writing multiple things we might use res.write one after the other
    else res.end(result);
  });
});

const port = 3000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
