function navMenu() {
  $('.navbar-toggler').click(function(){
    $('#overlay').toggleClass('overlay');
    $('.bg-img').toggleClass('opaque');
  });
}

function navScroll() {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
}

function navAbout() {
  $('.nav-about').click(function() {
    $('html,body').animate({
      scrollTop: $('.about-tf').offset().top },
      'slow');
      return false;
  });
}

document.addEventListener("turbolinks:load", function() {
  navMenu();
  navScroll();
  navAbout();
})
