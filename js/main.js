$(document).ready(function() {
  var mainSlider = $('.banner-slider');
  var tabSlider1 = $('.slider-container-tab1');
  var tabSlider2 = $('.slider-container-tab2');
  var slickOptions = {
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
  };
  $('.scrollbar-rail').scrollbar();
	$('.nav-tab').click(function() {
		if (!$(this).hasClass('active')) {
			var i = $(this).index();
			var activeSlider = '';
			if (i === 0) activeSlider = tabSlider1;
      if (i === 1) activeSlider = tabSlider2;
      if (tabSlider1.hasClass('slick-initialized')) tabSlider1.slick('unslick');
      if (tabSlider2.hasClass('slick-initialized')) tabSlider2.slick('unslick');
      activeSlider.slick(slickOptions);
			$('.nav-tab.active').removeClass('active');
			$('.tabs-content .active').hide().removeClass('active');
			$(this).addClass('active');
			$($('.tabs-content').children('.content-item')[i]).fadeIn(1000).addClass('active');
		}
	});
	mainSlider.slick({
	  dots: true,
	  arrows: false,
	  infinite: true,
	  speed: 700,
	  slidesToShow: 1,
	  autoplay: true,
  	autoplaySpeed: 5000
	});
  tabSlider1.slick(slickOptions);
});