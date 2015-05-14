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



  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });



});
