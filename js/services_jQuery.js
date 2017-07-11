$(document).ready(function ($) {
    //  TO-DO: IMPLEMENT TOGGLE [DONE]
    //  DRY IT UP [Tomorrow problem]
    var graphicDetail = $('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>')
    var photoshootDetail = $('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>');
    var productionDetail = $('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>');
    var socialDetail = $('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>');
    var personalDetail = $('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>');

    // $(".box").click(function(){
    //   $(this).slideToggle('slow',function(){
    //   });
    // });
    // $('.box').click(function(){
    //   $(this).slideToggle('slow',function(){
    //   });
    // });

    $('#graphic').click(function () {
      $(this).fadeToggle('fast',function(){
        $('img',this).toggle();
        graphicDetail = $('p', this).replaceWith(graphicDetail); //What the fuck
        $(this).toggleClass('expand');
      });

      $(this).fadeToggle('slow',function(){
      });

    });

    $('#photoshoot').click(function () {
      $(this).fadeToggle('fast',function(){
        $('img',this).toggle();
        photoshootDetail = $('p', this).replaceWith(photoshootDetail); //What the fuck
        $(this).toggleClass('expand');
      });

      $(this).fadeToggle('slow',function(){
      });

    });

    $('#production').click(function () {
      $(this).fadeToggle('fast',function(){
        $('img',this).toggle();
        productionDetail = $('p', this).replaceWith(productionDetail); //What the fuck
        $(this).toggleClass('expand');
      });

      $(this).fadeToggle('slow',function(){
      });

    });

    $('#social').click(function () {
      $(this).fadeToggle('fast',function(){
        $('img',this).toggle();
        socialDetail = $('p', this).replaceWith(socialDetail); //What the fuck
        $(this).toggleClass('expand');
      });

      $(this).fadeToggle('slow',function(){
      });

    });

    $('#personal').click(function () {
      $(this).fadeToggle('fast',function(){
        $('img',this).toggle();
        personalDetail = $('p', this).replaceWith(personalDetail); //What the fuck
        $(this).toggleClass('expand');
      });

      $(this).fadeToggle('slow',function(){
      });

    });

  });
