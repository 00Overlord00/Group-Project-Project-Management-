function empGet() {
  var genEmp ={
  "empName": empName(),
  "empJob": empJob(),
  "empVelocity": empVelocity()
  };
  return genEmp;
}

var empName=require('./empName.js');
var empJob=require('./empJob.js');
var empVelocity=require('./empVelocity.js');

// var empGet=genEmp;

// empGet(genEmp);

module.exports=empGet;
