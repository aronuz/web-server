var express = require('express');
var app=express();
var PORT = 3000;

// app.get('/', function(req, res){
//   res.send('hello');
// });

var middleware={
  requireAuthentication: function(req, res, next){
    console.log('private route hit');
    next();
  },
  logger: function(req, res, next){
    console.log('Request: '+new Date().toString()+' '+req.method+' '+req.originalUrl);
    next();
  }
}

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
  res.send('about');
});

app.use(express.static(__dirname+'/public'));
// console.log(__dirname+'/public');

app.listen(PORT, function(){
  console.log('server started on port '+PORT)
});