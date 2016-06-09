var express=require('express');
var app=express();
var path=require('path');
var empGet=require('../modules/genEmp.js');

var server=app.listen( 8080, 'localhost', function(){
  console.log('server is on');
});

app.get('/', function(req, res){
  res.sendFile(path.resolve("../views/index.html"));
});

app.get('/randomEmp', function(req, res){
  var newEmp=JSON.parse(empGet());
  //console.log(newEmp);
  res.send(newEmp);
});
