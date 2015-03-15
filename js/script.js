$(document).ready(function() {

  var message_area = $('.message_area');
  var icon         = $('.icon');


  // make message_area appear
  $('.specials').on('click', function() {
    showSpecials();
  });


  // close message_area
  $(icon).on('click', function() {
    closeSpecials();
  });

  /*$(#mainNav).on('click', function() {
    // when icon clicked, show #mainNav as display block
  })
*/


function showSpecials() {
  message_area.fadeIn('slow');
  $('.slogan').hide();
  $('.main').hide();
}

function closeSpecials() {
  message_area.fadeOut('slow');
  $('.slogan').fadeIn('slow');
  $('.main').fadeIn('slow');
}


/*function iconMenu() {
  $('#mainNav').css("display": )
    //make mainNav display block
}
*/

 // doesn't work yet
 // click anywhere on body to make message_area go away
  // $('body').on('click', message_area, function(e) {
  //   e.stopPropagation(e);
  //   closeSpecials();
  // });



});
