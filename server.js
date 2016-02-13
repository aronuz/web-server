var express = require('express');
var app=express();

// app.get('/', function(req, res){
//   res.send('hello');
// });

app.get('/about', function(req, res){
  res.send('about');
});

app.use(express.static(__dirname+'/public'));
// console.log(__dirname+'/public');

app.listen(3000);