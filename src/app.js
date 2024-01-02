
const express = require('express');
const path = require('path');
const usersRouter = require('./routes/users');

let app = express();

app.use(express.json());

// ../public is the directory for the static ressources
// GET http://localhost:8000/ or GET http://localhost:8000/index.html 
// returns the index.html in /public
app.use(express.static(path.join(__dirname, '../public')));

app.use('/users', usersRouter);

// send "Not found" for all other 'paths'
app.use(function(req, res) {
  res.status(404).send('Not found: ' + req.path);
});

// error handler
app.use(function(err, res) {
  // send the error page
  res.status(err.status || 500).send('error' + err.message);
});

module.exports = app;