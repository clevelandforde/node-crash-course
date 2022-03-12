const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //Set header content type
  res.setHeader('Content-Type', 'text/html');

  // res.write('GDF');
  res.write('\nForms');
  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
