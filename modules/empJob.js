var empSkill = ["Front End", "Clientside Logic", "Serverside Logic"];

var rng = function (min, max){
    return Math.floor( Math.random() * (max-min + 1) + min );
};

var empJob = function (){
  var x = rng(0, 2);
  return empSkill[x];
};

empJob();

module.exports=empJob;
