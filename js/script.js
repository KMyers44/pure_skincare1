$(document).ready(function() {

  var message_area = $('.message_area');
  var icon         = $('.icon');


  // make message_area appear
  $('.specials').on('click', function() {
    message_area.fadeIn('slow');
    $('.slogan').hide();
    $('.main').hide();
  });


  // close message_area
  $(icon).on('click', function() {
    message_area.fadeOut('slow');
    $('.slogan').fadeIn('slow');
    $('.main').fadeIn('slow');
  });



 // doesn't work yet
 // click anywhere on body to make message_area go away
  // $('body').on('click', function() {
  //   e.stopPropagation();
  //   message_area.fadeOut('slow');
  // });



});
