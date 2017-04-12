
$(document).ready(function(){


	backgroundFade();


		$(".titlehover").animate({
			marginLeft: "-50px",
			opacity: "1"
		},1000);

		$(".year").animate({
			marginLeft: "-50px",
			opacity: "1"
		},1500);

		$('.largeimage').fadeIn(2000);


});

/////////////////////// FUNCTIONS //////////////////////////

// FUNCTION 1: Make slightly-opaque background image appear while hovering over the project title.
function backgroundFade(){

	$('.titlehover').mouseenter(function(){
		$('#imghover').stop().fadeTo(700, 0.2);
		});

	$('.titlehover').mouseleave(function(){
		$('#imghover').stop().fadeTo(700, 0);
		});

};

// FUNCTION 2: The function that allows the slider to keep switching to the next project.
