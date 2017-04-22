// Variables to manage which section we're displaying (so we can animate them in and out)
var sections = ['#beeslider','#charlieslider','#invitationslider','#exhibitionslider','#agendaslider', '#viledaslider'];
var currentSectionId = '#beeslider';
var sectionIndex = -1;

var images = ['.imageholder1','.imageholder2','.imageholder3','.imageholder4','.imageholder5', '.imageholder6'];
var currentImageClass = '.imageholder1';
var imagesIndex = 0;


$(document).ready(function(){

	backgroundFade();

	animateInterval();

	tabsText();

	imageSlider();

	sliderArrows();

	mobileMenu();

	listFade();

	animateList();

});

/////////////////////// FUNCTIONS //////////////////////////

// FUNCTION 1: Make slightly-opaque background image appear while hovering over the project title.
function backgroundFade(){

	// BEE CONSERVATION PROJECT BKG FADE
	$('#beeslider .titlehover').mouseenter(function(){
		$('#beehover').stop().fadeTo(700, 0.2);
	});

	$('#beeslider .titlehover').mouseleave(function(){
		$('#beehover').stop().fadeTo(700, 0);
	});

	// CHARLIE PROJECT BKG FADE
	$('#charlieslider .titlehover').mouseenter(function(){
		$('#charliehover').stop().fadeTo(700, 0.2);
	});

	$('#charlieslider .titlehover').mouseleave(function(){
		$('#charliehover').stop().fadeTo(700, 0);
	});

	// INVITATION BKG FADE
	$('#invitationslider .titlehover').mouseenter(function(){
		$('#invitationhover').stop().fadeTo(700, 0.2);
	});

	$('#invitationslider .titlehover').mouseleave(function(){
		$('#invitationhover').stop().fadeTo(700, 0);
	});

	// EXHIBITION BKG FADE
	$('#exhibitionslider .titlehover').mouseenter(function(){
		$('#exhibitionhover').stop().fadeTo(700, 0.2);
	});

	$('#exhibitionslider .titlehover').mouseleave(function(){
		$('#exhibitionhover').stop().fadeTo(700, 0);
	});

	// AGENDA BKG FADE
	$('#agendaslider .titlehover').mouseenter(function(){
		$('#agendahover').stop().fadeTo(700, 0.2);
	});

	$('#agendaslider .titlehover').mouseleave(function(){
		$('#agendahover').stop().fadeTo(700, 0);
	});

	// VILEDA BKG FADE
	$('#viledaslider .titlehover').mouseenter(function(){
		$('#viledahover').stop().fadeTo(700, 0.2);
	});

	$('#viledaslider .titlehover').mouseleave(function(){
		$('#viledahover').stop().fadeTo(700, 0);
	});


};

// FUNCTION 3: The function that allows the slider to keep switching to the next project.
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

// FUNCTION 4: Tabs project text ////////////////////////////////
function tabsText(){

	// SUMMARY TAB
	$('.summary').click(function(){
		$('.summarytext').css({
			'display':'block'
		});

		$('.brieftext, .researchtext, .finaltext').css({
			'display':'none'
		});

		$('.summary span').css({
			'background-color':'#fcd000',
			'color':'white'
		});

		$('.brief span, .research span, .finaldesign span').css({
			'background-color':'white',
			'color':'#32052F'
		});
	});

	// BRIEF TAB
	$('.brief').click(function(){
		$('.brieftext').css({
			'display':'block'
		});

		$('.summarytext, .researchtext, .finaltext').css({
			'display':'none'
		});

		$('.brief span').css({
			'background-color':'#fcd000',
			'color':'white'
		});

		$('.summary span, .research span, .finaldesign span').css({
			'background-color':'white',
			'color':'#32052F'
		});
	});

	// RESEARCH TAB
	$('.research').click(function(){
		$('.researchtext').css({
			'display':'block'
		});

		$('.brieftext, .summarytext, .finaltext').css({
			'display':'none'
		});

		$('.research span').css({
			'background-color':'#fcd000',
			'color':'white'
		});

		$('.summary span, .brief span, .finaldesign span').css({
			'background-color':'white',
			'color':'#32052F'
		});
	});

	// FINAL DESIGN TAB
	$('.finaldesign').click(function(){
		$('.finaltext').css({
			'display':'block'
		});

		$('.brieftext, .summarytext, .researchtext').css({
			'display':'none'
		});

		$('.finaldesign span').css({
			'background-color':'#fcd000',
			'color':'white'
		});

		$('.summary span, .research span, .brief span').css({
			'background-color':'white',
			'color':'#32052F'
		});
	});
};

// FUNCTION 5: Image slider ////////////////////////////////
function imageSlider(){

	$('.image1').click(function(){
		$('.imageholder1').fadeIn(500);

		$('.imageholder2,.imageholder3, .imageholder4,.imageholder5,.imageholder6').hide();
	});

	$('.image2').click(function(){
		$('.imageholder2').fadeIn(500);

		$('.imageholder1,.imageholder3, .imageholder4,.imageholder5,.imageholder6').hide();
	});

	$('.image3').click(function(){
		$('.imageholder3').fadeIn(500);

		$('.imageholder1,.imageholder2, .imageholder4,.imageholder5,.imageholder6').hide();
	});

	$('.image4').click(function(){
		$('.imageholder4').fadeIn(500);

		$('.imageholder1,.imageholder2, .imageholder3,.imageholder5,.imageholder6').hide();
	});

	$('.image5').click(function(){
		$('.imageholder5').fadeIn(500);

		$('.imageholder1,.imageholder2, .imageholder3,.imageholder4,.imageholder6').hide();
	});

	$('.image6').click(function(){
		$('.imageholder6').fadeIn(500);

		$('.imageholder1,.imageholder2, .imageholder3,.imageholder4,.imageholder5').hide();
	});

};

// FUNCTION 7: Image slider arrows ///////////////////

function sliderArrows(){
	$('.imageholder1').fadeIn(500);

	$('.right').click(function(){
		$(currentImageClass).hide();

		imagesIndex = (imagesIndex + 1) % images.length;
		// Pull out the id of the section to display
		currentImageClass = images[imagesIndex];
		// Make it display on the page
		$(currentImageClass).fadeIn(500);
	});

	$('.left').click(function(){
		$(currentImageClass).hide();

		imagesIndex = (imagesIndex -1) % images.length;
		// Pull out the id of the section to display
		currentImageClass = images[imagesIndex];
		// Make it display on the page
		$(currentImageClass).fadeIn(500);

	});
}

//////////////////// SLIDE TOGGLE MENU //////////////////////////////
function mobileMenu(){

	$(".hamburger").click(function(){
    $(".menu").slideToggle();
});

};

/////////////////////  FUNCTION PROJECT LIST BACKGROUND FADE
function listFade(){

	// BEE CONSERVATION PROJECT BKG FADE
	$('.beelisthover').mouseenter(function(){
		$('#beelist').stop().fadeTo(700, 0.2);

		$('#beeprojectimage').show();

		$('#charlieprojectimage, #invitationprojectimage, #exhibitionprojectimage, #agendaprojectimage, #viledaprojectimage').hide();
	});

	$('.beelisthover').mouseleave(function(){
		$('#beelist').stop().fadeTo(700, 0);
	});

	// CHARLIE BOOK PROJECT BKG FADE
	$('.charlielisthover').mouseenter(function(){
		$('#charlielist').stop().fadeTo(700, 0.2);

		$('#charlieprojectimage').show();

		$('#beeprojectimage, #invitationprojectimage, #exhibitionprojectimage, #agendaprojectimage, #viledaprojectimage').hide();
	});

	$('.charlielisthover').mouseleave(function(){
		$('#charlielist').stop().fadeTo(700, 0);
	});

	// INVITATION PROJECT BKG FADE
	$('.invitationlisthover').mouseenter(function(){
		$('#invitationlist').stop().fadeTo(700, 0.2);

		$('#invitationprojectimage').show();

		$('#beeprojectimage, #charlieprojectimage, #exhibitionprojectimage, #agendaprojectimage, #viledaprojectimage').hide();
	});

	$('.invitationlisthover').mouseleave(function(){
		$('#invitationlist').stop().fadeTo(700, 0);
	});

	// EXHIBITION PROJECT BKG FADE
	$('.exhibitionlisthover').mouseenter(function(){
		$('#exhibitionlist').stop().fadeTo(700, 0.2);

		$('#exhibitionprojectimage').show();

		$('#beeprojectimage, #charlieprojectimage, #invitationprojectimage, #agendaprojectimage, #viledaprojectimage').hide();
	});

	$('.exhibitionlisthover').mouseleave(function(){
		$('#exhibitionlist').stop().fadeTo(700, 0);
	});

	// AGENDA PROJECT BKG FADE
	$('.agendalisthover').mouseenter(function(){
		$('#agendalist').stop().fadeTo(700, 0.2);

		$('#agendaprojectimage').show();

		$('#beeprojectimage, #charlieprojectimage, #exhibitionprojectimage, #invitationprojectimage, #viledaprojectimage').hide();
	});

	$('.agendalisthover').mouseleave(function(){
		$('#agendalist').stop().fadeTo(700, 0);
	});

	// VILEDA PROJECT BKG FADE
	$('.viledalisthover').mouseenter(function(){
		$('#viledalist').stop().fadeTo(700, 0.2);

		$('#viledaprojectimage').show();

		$('#beeprojectimage, #charlieprojectimage, #exhibitionprojectimage, #agendaprojectimage, #invitationprojectimage').hide();
	});

	$('.viledalisthover').mouseleave(function(){
		$('#viledalist').stop().fadeTo(700, 0);
	});

};

/////////////////////  FUNCTION PROJECT LIST animation

function animateList(){
	$('#beeprojectimage .imagelarge').fadeIn(1250);

	$('.imagesmall').animate({
		'margin-left':'-15%'
	},1250);

};
