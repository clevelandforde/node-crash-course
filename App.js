const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listening for request
app.listen(3000, () => {
  console.log('listening on port 3000 through express');
});

// middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  //   res.sendFile('./views/index.html', { root: __dirname }); // We no longer need the line with res.sendFile since we are now using ejs. If we just replace .html with .ejs then it will take us to downloads for us to do a save. At this 15th day of March 2022 I cannot explain why it takes me to my download folder, I will explain that as soon as i understand. Henceforth, we need res.render(path) seen below, to render a view and send it back to the browser.
  //   res.render('index.ejs'); // This wasn't working without the extension and now i realized that i need to register view engine above using app.set('view engine', 'ejs')
  res.render('index', { title: 'Home' }); // no need for extension since we've now register view engine above. Here express is going to look inside the views folder, find index.ejs, use the ejs view engine to render this index.ejs and send it back to the browser
});

app.get('/about', (req, res) => {
  //   res.sendFile('./views/about.html', { root: __dirname });
  res.render('about', { title: 'About' });
});

app.get('/registrations/create', (req, res) => {
  res.render('create', { title: 'Create new registration' });
});

// 404 page
app.use((req, res) => {
  // It is not scoped out to a particular url like '/404'
  res.status(404).render('404', { title: '404' });
});
