
/*!
* ChickenDinner 1.0
* Copyright 2014, Stephen Scaff - http://sosweetcreative.com 
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*/
(function($){
  $.loadBanner = {
    defaults: {
      altTag: ['Banner Image'],
      fadeInTime:1800,
      TheImages: ['banner1.png', 'banner2.png', 'banner3.png', 'banner4.png', 'banner5.png' ]
    }
  };
  
  $.fn.extend({
    loadBanner:function(options) {
      $.extend({}, $.loadBanner.defaults, options);
      return this.each(function() {
        var TheImages = options.TheImages;
        var RandomMath = Math.floor(Math.random()*TheImages.length);
        var SelectedImage = TheImages[RandomMath];
        var imgPath = options.path + SelectedImage;
        var altTag = options.altTag;
        // Fade in Times
        var fadeInTime = options.fadeInTime;
        //Fade In animation - hide first
        $(this).css('display', 'none').fadeIn(fadeInTime);
        if(options.cssBG == 'true'){
          $(this).css('background-image', 'url(' + imgPath + ')');
        } else{
          $(this).attr( {
            src: imgPath,
            alt: altTag
          });
        }
      });
    }
  });
})(jQuery);

$(document).ready(function() {
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $(".img-banner").position();
        if (scroll > topDist.top) {
            $('.site-nav').addClass("nav-fixed");
        } else {
            $('.site-nav').removeClass("nav-fixed");
        }
    });
});

$(document).ready(function() {
	$('.img-banner').loadBanner({
	path: '/files/images/',
	altTag: '',
	fadeIntime: 0,
	TheImages: ['central-valley.jpg', 'golden-gate.jpg', 'niagra.jpg', 'qp1.jpg', 'seals.jpg', 'khatim.jpg','omm-alla.jpg',
			    'statistics-malaria.jpg', 'yorkshire.jpg', 'stormtrooper.jpg', 'pool.jpg']});
			    
	$(".show-abs").on("click", function(){ 
		$(this).next().toggle(duration=500, easing="linear")});
});



