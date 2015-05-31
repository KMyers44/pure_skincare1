$(document).ready(function() {

  var messageArea = $('.message-area');
  var icon         = $('.icon');


  // make message_area appear
  $('.specials').on('click', function() {
    showSpecials();
  });


  // close message_area
  $(icon).on('click', function() {
    closeSpecials();
  });


  // scroll on treatment items click
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


  function showSpecials() {
    messageArea.fadeIn('slow');
    $('.upper-page').css(
      'position', 'relative'
      );
    $('.slogan').hide();
    $('.main').hide();

  }

  function closeSpecials() {
    messageArea.fadeOut('slow');
    $('treatments', '.upper-page').css(
      'position', 'fixed'
      );
    $('treatments', '.container').css(
      'padding-top', '0'
      );
    $('.slogan').fadeIn('slow');
    $('.main').fadeIn('slow');
  }

});
