var express=require('express');
var app=express();
var path=require('path');
var empGet=require('../modules/genEmp.js');

var server=app.listen( 8080, 'localhost', function(){
  console.log('server is on');
});
//var genEmp = require('../modules/genEmp.js');
app.get('/', function(req, res){
  res.sendFile(path.resolve("../views/index.html"));
});

app.get('/randomEmp', function(req, res){
  var newEmp=empGet();
  //console.log(newEmp);
  res.send(newEmp);
});
