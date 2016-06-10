console.log( 'Script: GO' );

$(document).ready( function() {

var wildCard = function(){
  return parseInt(mysteryNumber(10, 60));
};

var mysteryNumber = function(min, max) {
  return Math.random() * (max - min) + min;
};

$(document).on( 'click', '#generateProject', function(){
  $('body').append( '<div id = "projectArea"></div>' );
  $( '#projectArea' ).empty();
  $( '#empGenDiv' ).empty();
  $( '#empGenDiv' ).append( '<button id = "empGen">Generate Employee</button>' );
  var company = genCo();
  $('#projectArea').append('<h2>Project: ' + company.name + '</h2><br>' + '<h3>Logic: ' + company.logic + '<br>' + 'Front End: ' + company.frontEnd + '<br>' + 'Back End: ' + company.backEnd + '</h3>');
});

$(document).on( 'click', '#empGen', function(){
  $.ajax({
    url: 'http://localhost:8080/randomEmp',
    dataType: 'json',
    success: function(data){
      var empObject = JSON.parse(( data ));
    console.log(empObject.empName);
    }
  });
});

var bigBusiness = function() {
  var businessName;
  var rando = wildCard();
  if ( rando < 15) {
    businessName = "CrapCo.";
  }else if (rando > 15 && rando < 20){
    businessName = "Complete BS LLC";
  }else if(rando > 20 && rando < 25){
    businessName = "OmniCorp";
  }else if(rando > 25 && rando < 30){
    businessName = "Callahan Auto";
  }else if( rando > 30 && rando < 35){
    businessName = "Spaceley Sprockets";
  }else if( rando > 35 && rando < 40){
    businessName = "Empire Records";
  }else if( rando > 40 && rando < 45){
    businessName = "Pewterschmidt Industries";
  }else if( rando > 45 && rando < 50){
    businessName = "Virtucon";
  }else if( rando > 50 && rando < 55){
    businessName = "Dunder Mifflin Paper Co.";
  }else if( rando > 55 && rando <= 60){
    businessName = "Stark Industries";
  }else {
    businessName = "Nakatomi Corporation";
  } return businessName;
};

var genCo = function() {
    var company = { name: 'undefined', logic: 'undefined', frontEnd: 'undefined', backEnd: 'undefined'};
    company.name = bigBusiness();
    company.logic = wildCard();
    company.frontEnd = wildCard();
    company.backEnd = wildCard();
    console.log( company );
    return company;
  };
});
