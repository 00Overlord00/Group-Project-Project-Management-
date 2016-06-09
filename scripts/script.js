console.log( 'Script: GO' );

$(document).on( 'click', '#generateProject', function(){
  $('body').append( '<div id = "projectArea"></div>' );
  $('body').append( '<div id = "buttonArea"></div>' );
  $( '#empGenDiv' ).append( '<button id = "empGen">Generate Employee</button>' );
});
