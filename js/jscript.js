$(document).ready(function(){
	
	$('#menuButton').on('click', function(){
		$('#Menu').addClass('displayOn', 500);
	});

	$('#close').on('click', function(){
		$('#Menu').removeClass('displayOn');
	});

	$('#subscribe').on('click', function(){
		$('#thank').addClass('d-block');
	});


});