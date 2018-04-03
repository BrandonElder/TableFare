function navMenu() {
  $('.navbar-toggler').click(function(){
    $('#overlay').toggleClass('overlay');
    $('.bg-img').toggleClass('opaque');
  });
}

function navHide() {
  if (window.matchMedia('(max-width: 992px)').matches) {
    $('.nav-about, .nav-rest').click(function() {
      $('.navbar-collapse').removeClass('show');
      $('#overlay').removeClass('overlay');
      $('.bg-img').removeClass('opaque');
    });
  }
}

function navScroll() {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
}

function navMobileScroll() {
  $(document).scroll(function () {
    var $nav = $(".navbar-toggler");
    $nav.toggleClass('scroll', $(this).scrollTop() > $nav.height());
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

function navRestaurants() {
  $('.nav-rest').click(function() {
    $('html,body').animate({
      scrollTop: $('.included-tf').offset().top },
      'slow');
      return false;
  });
}

document.addEventListener("turbolinks:load", function() {
  navMenu();
  navHide();
  navScroll();
  navMobileScroll();
  navAbout();
  navRestaurants();
})
