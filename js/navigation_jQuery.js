$(document).ready(function($){
  $('.link').click(function(e){
    var dest = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(dest).offset().top
    });
    e.preventDefault();
  });
});
