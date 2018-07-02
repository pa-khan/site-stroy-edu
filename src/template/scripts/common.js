$(document).ready(function($) {

	$('.input_phone').mask('+7 (000) 000-00-00');

	$('.reviews__list').slick({
		slidesToShow: 3,
		variableWidth: true,
		centerMode: true,
		prevArrow: '<button class="slick-prev slick-arrow"><i class="icon icon-left-open"></i></button>',
		nextArrow: '<button class="slick-next slick-arrow"><i class="icon icon-right-open"></i></button>',
		responsive: [{
			breakpoint: 1015,
			settings: {
				slidesToShow: 1,
				variableWidth: false,
				centerMode: false
			}
		}]
	})

	$('.plans__list').slick({
		slidesToShow: 4,
		asNavFor: $('.plans__content'),
		responsive: [{
				breakpoint: 1015,
				settings: {
					slidesToShow: 2,
					prevArrow: '<button class="slick-prev slick-arrow"><i class="icon icon-left-open"></i></button>',
					nextArrow: '<button class="slick-next slick-arrow"><i class="icon icon-right-open"></i></button>',
				}
			}, {
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					dots: true,
					prevArrow: '<button class="slick-prev slick-arrow"><i class="icon icon-left-open"></i></button>',
					nextArrow: '<button class="slick-next slick-arrow"><i class="icon icon-right-open"></i></button>',
			}
		}]
	})

	$('.plans__content').slick({
		slidesToShow: 4,
		arrows: false,
		asNavFor: $('.plans__list'),
		responsive: [{
				breakpoint: 1015,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 767,
				settings: {
					slidesToShow: 1
			}
		}]
	})

	$('.info__icon, .info__close').click(function(event) {
		var item = $(this).parents('.info');

		if (item.hasClass('info_toggle')) {
			item.removeClass('info_toggle');
		} else{
			$('.info').removeClass('info_toggle');
			item.addClass('info_toggle');
		}
	});

	$('.panel__mobile-btn').click(function(event) {
		$(this).toggleClass('panel__mobile-btn_toggle');
		$('.panel__nav').toggleClass('panel__nav_toggle')
	});

	if ($(window).width() < 767) {
		$('.advantages__list').slick({
			dots: true,
			prevArrow: '<button class="slick-prev slick-arrow"><i class="icon icon-left-open"></i></button>',
			nextArrow: '<button class="slick-next slick-arrow"><i class="icon icon-right-open"></i></button>'
		})
	}

	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1500);
		return false;
	});
});
