var rng = function (min, max){
    return Math.floor( Math.random() * (max-min + 1) + min );
};

var empVelocity = function(){
  var x = rng (1, 9);
  return x;
};

empVelocity();

module.exports=empVelocity;
