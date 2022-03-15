// Express file is typically called App.js
// Note additionally that we still keep our raw node server.js file up to this stage, simply for comparison with oun now express App.js file
const express = require('express');

// express app
const app = express();

// listening for request
app.listen(3000, () => {
  console.log('listening on port 3000 through express');
}); // This creates an instance of a server and can be stored in a const like const serve = app.listen() for when we want to use web sockets

app.get('/', (req, res) => {
  //   res.send({ name: 'cleveland' });
  res.sendFile('./views/index.html', { root: __dirname }); // This path (the first argument/parameter) originally is not a relative path, you will have to specifically state where it is relative from in the second parameter because by default it's going to look for and absolute path (the path from the root file computer). Therefore, the second argument that we have to pass is an options object and specify what the root should be which is the current directory that the app.js is in and to get the current directory we use __dirname.
}); // This is how we respond to the request we listening for by setting routes/endpoints. The app.get() method takes in two arguments; 1 the path and 2 a function that takes in a request and response object so that we can do something with these objects. the req contains info about the request such as the url and the method of the request like get, post, put etc and res is the response object which we can use to send a response.

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 page
app.use((req, res) => {
  // It is not scoped out to a particular url like '/404'
  res.status(404).sendFile('./views/404.html', { root: __dirname }); // Here we have to manually set the status code
});
