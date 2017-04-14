// Variables to manage which section we're displaying (so we can animate them in and out)
var sections = ['#beeslider','#charlieslider','#invitationslider','#exhibitionslider','#agendaslider', '#viledaslider'];
var currentSectionId = '#beeslider';
var sectionIndex = -1;


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
	// Make the section that just animated out stop displaying
	$(currentSectionId).css('display','none');
	// Increase the sectionIndex so we can show the next one
	// The % means modulo and allows us to wrap around the array when we reach the end
	// so it cycles
	sectionIndex = (sectionIndex + 1) % sections.length;
	// Pull out the id of the section to display
	currentSectionId = sections[sectionIndex];
	// Make it display on the page
	$(currentSectionId).css('display','block');

	console.log(sectionIndex,currentSectionId);

	// Do all our animation by selecting the specific classes WITH the
	// id of the current section so it only applies to that one section
	$(currentSectionId + " .titlehover").animate({
		marginLeft: "-50px",
		opacity: "1"
	},1000);

	$(currentSectionId + " .year").animate({
		marginLeft: "-50px",
		opacity: "1"
	},1500);

	$(currentSectionId + " .largeimage").animate({
		opacity: "1",
	},1500);

	$(currentSectionId + " .slider-frame").animate({
		marginTop:"0px"
	},1500);

	$(currentSectionId + " #frame img").animate({
		marginTop:"-10px",
		opacity:"1"
	},1700);

};

function animateOff(){

	// Animate out all the parts of our section in the different ways
	$(currentSectionId + " .titlehover").animate({
		marginLeft: "-600px",
		opacity: "0"
	},1000);

	$(currentSectionId + " .year").animate({
		marginLeft: "-1200px",
		opacity: "0"
	},1500);

	$(currentSectionId + " .largeimage").animate({
		opacity: "0",
	},1500);

	$(currentSectionId + " .slider-frame").animate({
		marginTop:"600px"
	},1500);

	$(currentSectionId + " #frame img").animate({
		marginTop:"200px",
		opacity:"0"
	},1700,function () {
		animateOn(); // After this (the longest animation) has completed, we can animate in the next one
	});

};

function animateInterval(){
	animateOn();

	setInterval(function(){
		animateOff();
	}, 6000);
};
