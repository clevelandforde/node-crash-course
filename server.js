const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made'); // This is log here in the console after going to localhost:port but it's not log in the console in the browser and that is because this console.log code is running on the server in the backend and not in the browser on the frontend.
});

const port = 3002;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
