// You can use JavaScript to add more interactivity to your website, such as animations or user input validation. Here's an example of how you can add a smooth scrolling effect to the anchor link:

$(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {

      var target = $(this.getAttribute('href'));

      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }

  });
});
