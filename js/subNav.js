$(document).ready(function(){
  $( ".subnavEl" ).hover(function() {
      //alert($( this ).css( "transform" ));
    if( $(this).find( ".subnavText").css("display") == "none"){
          $(this).find(".subnavText").css("display","block");
    // $(this).find(".subnavText").css("transform","scaleX(1)");
    // $(this).find(".subnavText").css("transition", "transform 0.1s ease-out");
    }
    else{
        $(this).find(".subnavText").css("display", "none");
    }
  });
});
