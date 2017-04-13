
$(document).ready(function(){

	backgroundFade();

	animateInterval();

	menuToggle();


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

function menuToggle(){

	$("#hamburger").click(function(){
    $("#toggle").slideToggle();
	});

};


// FUNCTION 2: The function that allows the slider to keep switching to the next project.
function animateOn(){

			$(".titlehover").animate({
				marginLeft: "-50px",
				opacity: "1"
			},1000);

			$(".year").animate({
				marginLeft: "-50px",
				opacity: "1"
			},1500);

			$(".largeimage").animate({
				opacity: "1",
			},1500);

			$(".slider-frame").animate({
				marginTop:"0px"
			},1500);

			$("#frame img").animate({
				marginTop:"-10px",
				opacity:"1"
			},1700);

};

function animateOff(){

			$(".titlehover").animate({
				marginLeft: "-600px",
				opacity: "0"
			},1000);

			$(".year").animate({
				marginLeft: "-1200px",
				opacity: "0"
			},1500);

			$(".largeimage").animate({
				opacity: "0",
			},1500);

			$(".slider-frame").animate({
				marginTop:"600px"
			},1500);

			$("#frame img").animate({
				marginTop:"200px",
				opacity:"0"
			},1700);

};

function animateInterval(){
	animateOn();

	setInterval(function(){
		animateOff();
		animateOn();
	}, 6000);
};
