const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
  // lodash
  const num = _.random(0, 45);
  console.log(num);

  const greet = _.once(() => {
    console.log('Hello');
  });

  greet();
  greet();
  greet();

  //Set header content type
  res.setHeader('Content-Type', 'text/html');
  let path = './views/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', 'about'); // This action will redirect us from the endpoint about-me to the endpoint about
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
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
