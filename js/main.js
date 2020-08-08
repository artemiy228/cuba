$(function () {
	$('.slider__inner').slick({
		arrows: true,
		autoplay: true,
		auto: 3000,
		prevArrow: '<button class="slider-btn slider-btn--left"><img src="images/Arrow-left.svg"></button>',
		nextArrow: '<button class="slider-btn slider-btn--right"><img src="images/Arrow-right.svg"></button>',
	});
});