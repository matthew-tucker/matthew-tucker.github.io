
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

// document ready hooks
$(document).ready(function() {
	
	// keep the scroll bar on top
	// we also make it slightly translucent
	$(document).scroll(function () {
		var scroll = $(this).scrollTop();
        var topDist = $(".img-banner").position();
        if (scroll > topDist.top) {
            $('.site-nav').addClass("nav-fixed");
        } else {
            $('.site-nav').removeClass("nav-fixed");
        }
    });

	// change thet banner on reload randomly
	// this calls the loadBanner() method from above
	$('.img-banner').loadBanner({
		path: '/files/images/',
		altTag: '',
		fadeIntime: 0,
		TheImages: ['central-valley.jpg', 'golden-gate.jpg', 'niagra.jpg', 'qp1.jpg', 
					'seals.jpg', 'khatim.jpg','omm-alla.jpg', 'statistics-malaria.jpg', 
					'yorkshire.jpg', 'stormtrooper.jpg', 'pool.jpg']});
	
	// show and hide more information for academic publication lines		    
	$(".show-abs").on("click", function(){ 
		$(this).next().slideToggle(duration=500, function() {
			if ($(this).prev().html() === "more") {
				$(this).prev().html("less");
			} else {
				$(this).prev().html("more");
			}
	})});
	
	// make sure links in the pubs list open in a new window/tab so that
	// pdf/external requests don't direct the user away from the website
	$("ul.pubs-list a[href^='http://']").attr("target","_blank");
});



