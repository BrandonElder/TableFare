function navMenu() {
  $('.navbar-toggler').click(function(){
    $('#overlay').toggleClass('overlay');
    $('.bg-img').toggleClass('opaque');
  });
}


document.addEventListener("turbolinks:load", function() {
  navMenu();
})
