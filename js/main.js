$(document).ready(function() {
	$('.nav-tabs li').click(function() {
		if (!$(this).hasClass('active')) {
			var i = $(this).index();
			$('.nav-tabs li.active').removeClass('active');
			$('.tabs-content .active').hide().removeClass('active');
			$(this).addClass('active');
			$($('.tabs-content').children('.content-item')[i]).fadeIn(1000).addClass('active');
		}
	});
	$('.banner-slider').slick({
	  dots: true,
	  arrows: false,
	  infinite: true,
	  speed: 700,
	  slidesToShow: 1,
	  autoplay: true,
  	autoplaySpeed: 5000
	});
	$('.slider-container').slick({
	  dots: false,
	  autoplay: true,
  	autoplaySpeed: 3000,
	  infinite: true,
	  speed: 700,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  responsive: [
	    {
	      breakpoint: 1720,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
});