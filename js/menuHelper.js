
$(document).ready(function(){
  //get initial page scroll position.
  var prevScrollpos = window.pageYOffset;
  //get header height
  var $header = $(document.getElementById("header"));
  var headerHeight = $header.height();

  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
    } else {
      header.style.top = "-".concat(headerHeight,"px");
    }
    prevScrollpos = currentScrollPos;
  }


  $('#topMenu li').click(function(){
    $('#menuToggle input')[0].checked = false;
    // console.log($('#menuToggle input')[0].checked);
  });

});
