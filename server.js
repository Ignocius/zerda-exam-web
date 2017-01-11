'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mysql = require('mysql');
var validator = require('./validate');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static('./public'));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : "'root'",
  password : 'admin',
  database : 'secretprojects'
});

connection.connect();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/exam/', function survey (req, res) {
  let ifValid = validator(req.body.feedback, req.body.email, req.body.scale);
  let response = {
  "status": "ok",
  "projects": [
    "secret project 1",
    "secret project 2"
  ]
  };

  let errMsg =  {
    "status": "error",
    "message": "thank you"
  };

   if (ifValid) {
     connection.query('SELECT * FROM projects', function(err, rows, fields){
       if (err) {
         throw err;
       } else {
         res.send(rows);
       }
    });
  }  else {
     res.send(errMsg);
   };
});

app.listen(3600, function(){
	console.log('SERVER IS UP AND RUNNING on port: 3600')
});
