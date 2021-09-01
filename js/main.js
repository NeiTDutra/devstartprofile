$('#recipeCarousel').carousel({
    interval: 7000
  })
  
  $('.carousel .carousel-item').each(function(){
      var minPerSlide = 3;
      var next = $(this).next();
      if (!next.length) {
      next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<minPerSlide;i++) {
          next=next.next();
          if (!next.length) {
              next = $(this).siblings(':first');
            }
          
          next.children(':first-child').clone().appendTo($(this));
        }
  });

$(document).scroll(function(){

  if( $('#sobre-min').scrollTop() > $('#sobre-min').height()/2 ) {
    
    $('#title-sobre-mim').addClass('opacity-zero-to-one');
    $('#p1-sobre-mim #p3-sobre-mim').addClass('l-t-r');
    $('#p2-sobre-mim #p4-sobre-mim').addClass('r-t-l');
  }
  else {
    
    $('#title-sobre-mim').removeClass('opacity-zero-to-one');
    $('#p1-sobre-mim #p3-sobre-mim').removeClass('l-t-r');
    $('#p2-sobre-mim #p4-sobre-mim').removeClass('r-t-l');
  }
});
