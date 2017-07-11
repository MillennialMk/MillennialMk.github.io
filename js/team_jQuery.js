$(document).ready(function($){
  var jafet = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>';
  var ivan ='<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>';
  var elisa='<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>';


  $('#jafet').click(function () {
    $(this).fadeToggle('fast',function(){
      if ( $('img',this).css('visibility') == 'hidden' )
       $('img',this).css('visibility','visible');
     else
       $('img',this).css('visibility','hidden');
      jafet = $('p', this).replaceWith(jafet); //What the fuck
      $(this).toggleClass('expand');
    });

    $(this).fadeToggle('slow',function(){
    });
  });

  $('#ivan').click(function () {
    $(this).fadeToggle('fast',function(){
      if ( $('img',this).css('visibility') == 'hidden' )
       $('img',this).css('visibility','visible');
     else
       $('img',this).css('visibility','hidden');
      ivan = $('p', this).replaceWith(ivan); //What the fuck
      $(this).toggleClass('expand');
    });

    $(this).fadeToggle('slow',function(){
    });
  });

  $('#elisa').click(function () {
    $(this).fadeToggle('fast',function(){
      if ( $('img',this).css('visibility') == 'hidden' )
       $('img',this).css('visibility','visible');
     else
       $('img',this).css('visibility','hidden');
      elisa = $('p', this).replaceWith(elisa); //What the fuck
      $(this).toggleClass('expand');
    });

    $(this).fadeToggle('slow',function(){
    });
  });
});
