var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Head-first', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Head-first.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/images11.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images11.jpg'));
});

app.get('/ui/blue.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blue.jpg'));
});

app.get('/ui/drinks.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'drinks.gif'));
});

app.get('/ui/green.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'green.jpg'));
});

app.get('/ui/lightblue.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'lightblue.jpg'));
});

app.get('/ui/red.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'red.jpg'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
