$(document).ready(function() {
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