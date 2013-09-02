$(document).ready(function(){
	var counter = 0;
	$('.homePlayerplus_1').on('click', function(){
		$('output').val(counter ++);
	});

	$('.homePlayerminus_1').on('click', function(){
		$('output').val(counter --);
	});




});