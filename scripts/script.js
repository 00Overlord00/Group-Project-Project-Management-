console.log( 'Script: GO' );

$(document).ready( function() {

var makeMyDay = function() {
  $( '#projectArea' ).append( '' );
};

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
  // $( '#projectArea' ).append('<p>' + genCo() + '</p>');
  var company = genCo();
  $('#projectArea').append('<p>Project: ' + company.name + ' Logic: ' + company.logic + ' Front End: ' + company.frontEnd + ' Back End: ' + company.backEnd + '</p>');
});

var bigBusiness = function() {
  var businessName;
  var rando = wildCard();
  if ( rando >25) {
    businessName = "CrapCo.";
  }else {
    businessName = "HyperKids INC.";
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
