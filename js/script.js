$(document).ready(function(){
  $(".elemento-hover").hover(function(){
    $(this).find(".spaziatore").toggle();
  });
});
