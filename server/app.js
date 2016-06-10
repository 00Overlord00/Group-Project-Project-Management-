var express=require('express');
var app=express();
var path=require('path');
var empGet=require('../modules/genEmp.js');

var server=app.listen( 8080, 'localhost', function(){
  console.log('server is on');
});

app.get('/', function(req, res){
  res.sendFile(path.resolve('./public/views/index.html'));
  // res.sendFile(path.resolve("../vendors/bootstrap.min.css"));
  // res.sendFile(path.resolve("../vendors/jquery-1.12.4.min.js"));
  // res.sendFile(path.resolve("../scripts/script.js"));
});

app.get('/randomEmp', function(req, res){
  var newEmp=empGet();
  console.log(newEmp);
  res.send(newEmp);
});

app.use(express.static('public'));
