$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	$('.reviews__list').slick({
		slidesToShow: 3,
		variableWidth: true,
		centerMode: true
	})
});
