
$(document).ready(function(){

	$('.titlehover').mouseenter(function(){
		$('#imghover').stop().fadeTo(700, 0.2);
		});

	$('.titlehover').mouseleave(function(){
		$('#imghover').stop().fadeTo(700, 0);
		});

});
