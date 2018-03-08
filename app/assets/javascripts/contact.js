function flipContact() {
  $('.flip').click(function(){
    $('.cont-flip').toggleClass('flipped');
    return false;
  });
}

document.addEventListener("turbolinks:load", function() {
  flipContact();
})