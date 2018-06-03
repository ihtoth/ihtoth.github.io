$(document).ready(function(){
  let navLinks = $('desktopNav li a'),
      navH = $('header').height(),
      section = $('section'),
      documentEl = $(document);


  documentEl.on('scroll', function(){
    let currentScrollPos = documentEl.scrollTop();
      section.each(function() {
      let self = $(this);
      if (self.offset().top <
            (currentScrollPos + navH) &&
            (currentScrollPos + navH) <
            (self.offset().top + self.outerHeight()) ) {
               targetClass = '.' + self.attr('class') + '-link';
               navLinks.removeClass('active');
               $(targetClass).addClass('active');
             }
      });

  });
});

$(".mobile").click(function () {
  $("li").toggleClass("visible");
});

$("li").click(function () {
  $("li").toggleClass("active");
})
