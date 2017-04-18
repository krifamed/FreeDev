var pContainerHeight = $('.intro').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

  /*  $('.img').css({
      'transform' : 'translate(0px, '+ wScroll /1.6 +'%)'
    });
*/
    $('.back-bird').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    $('.fore-bird').css({
      'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    });
    $('.header-logo').css({'opacity': '0',
      'transition' : 'opacity 1s'
    });

  }

});
