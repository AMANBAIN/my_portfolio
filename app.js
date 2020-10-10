
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// enable static file for express
app.use(express.static(__dirname + '/public'));

// we will be using res.render to load up an ejs view file

// home page render
app.get('/', function (req, res) {
    res.render('home');
});

// about me page render
app.get('/about', function (req, res) {
    res.render('about');
});

// services page render
app.get('/services', function (req, res) {
    res.render('services');
});

// projects page render
app.get('/projects', function (req, res) {
    res.render('projects');
});

// contact me page render
app.get('/contact', function (req, res) {
    res.render('contact');
});

// listener 
app.listen(80);
console.log('Express started on port 80');
