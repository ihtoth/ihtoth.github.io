
$(document).ready(function(){


    $('.ripple').on('click', function (event) {
      event.preventDefault();

      var $div = $('<a>'),
          btnOffset = $(this).offset(),
      		xPos = event.pageX - btnOffset.left,
      		yPos = event.pageY - btnOffset.top;
          // href = $(this).attr('href');
      var $href = this.href;


      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");

      $ripple.css("height", $(this).height());
      // $ripple.css("width", $(this).width());
      $div
        .css({
          top: yPos - ($ripple.height()/2),
          left: xPos - ($ripple.width()/2),
          background: $(this).data("ripple-color")
        })
        .appendTo($(this));


      window.setTimeout(function(){
        $div.remove();
        window.location = $href;
      }, 300, $href);



    });


  });
