$(document).ready(function(){

  smoothScroll();

});

// Select all links with hashes
function smoothScroll(){

  var $header = $(document.getElementById("header"));
  var headerHeight = $header.height();

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

      //get location of where I might scroll
      var headerOffset;
      //if target scroll is further than current scroll position
      if(target.offset().top > window.pageYOffset){
        headerOffset = 0; //the header will scroll away
      }
      else{
        headerOffset = headerHeight; //header will be there
      }
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: ((target.offset().top)-($('main').find('.sectionHeaderWrapper').outerHeight()+headerOffset))
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
        // $('a[href*="#"]').style.color="var(--dark-grey)";
        //this.style.color="#1C9D03";

      }
    }
  });
 }


$("li").click(function () {
  $("li").toggleClass("active");
})
