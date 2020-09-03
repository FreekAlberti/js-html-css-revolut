$(document).ready(function(){
  $(".elemento-hover").hover(function(){
    $(this).children(".menu").toggle();
  });
});
