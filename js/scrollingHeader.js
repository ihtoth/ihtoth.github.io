$(document).ready(function(){

  smoothScroll();


  //When scrolling is past height of the header, make fixed header appear.
  //when scrolling is back up o less than height of header, make fixed header disappear.

// (function(){
//   let navLinks = $('desktopNav li a'),
//       navH = $('header').height(),
//       section = $('section'),
//       documentEl = $(document);
//
//
//   documentEl.on('scroll', function(){
//     let currentScrollPos = documentEl.scrollTop();
//       section.each(function() {
//       let self = $(this);
//       if (self.offset().top <
//             (currentScrollPos + navH) &&
//             (currentScrollPos + navH) <
//             (self.offset().top + self.outerHeight()) ) {
//                targetClass = '.' + self.attr('class') + '-link';
//                navLinks.removeClass('active');
//                $(targetClass).addClass('active');
//              }
//       });
//
//   });
// });
});
// Select all links with hashes
function smoothScroll(){
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: ((target.offset().top)-120)
        }, 1000,function() {
          // Callback after animation
          // Must change focus!
          // var $target = $(target);
          // $target.focus();
          // if ($target.is(":focus")) { // Checking if the target was focused
          //   return false;
          // } else {
          //   $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          //   $target.focus(); // Set focus again
          // };
        });
      }
    }
  });
 }

// $(".mobile").click(function () {
//   $("li").toggleClass("visible");
// });

$("li").click(function () {
  $("li").toggleClass("active");
})
