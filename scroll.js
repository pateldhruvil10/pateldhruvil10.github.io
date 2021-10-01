$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#i').fadeIn();
    }
    else{
      $('#i').fadeOut();
    }
  });

  $("#i").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });
});
