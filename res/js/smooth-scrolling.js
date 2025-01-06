$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Determine the height of the fixed header
      var headerHeight = $('.mate-header').outerHeight() || 0;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top - headerHeight
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;

        // Move the scroll position once again to compensate for any delayed effect
        $(window).scrollTop($(hash).offset().top - headerHeight);
      });
    } // End if
  });
});
