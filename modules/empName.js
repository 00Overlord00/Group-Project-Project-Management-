firstNameArray = ["Adam", "Anna", "Craig", "Gini", "Lanny", "Meg", "Eric", "Nick", "Pat", "Ted"];
lastNameArray = ["Smith", "Jones", "Beerguzzler", "Jobs", "Gates", "Newton", "Waster", "Bach", "Mozart"];

var rng = function (min, max){
    return Math.floor( Math.random() * (max-min + 1) + min );
};

var empName = function(){
  var firstLength = firstNameArray.length - 1;
  var lastLength = lastNameArray.length - 1;
  var i = rng ( 0, firstLength );
  var j = rng ( 0, lastLength );
  return firstNameArray[i] + " " + lastNameArray[j];
};

empName();

module.exports=empName;
