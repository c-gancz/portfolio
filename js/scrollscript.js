
$(document).ready(function() {

  headerFade();

  tabsFade();

  imageHighlight();

  paragraphOne();

  paragraphTwo();

  imageOne();

  imageTwo();

  sliderFade();

  projectNext();
});

function headerFade(){
  $('#header').animate({
    marginLeft:"0px",
    opacity:"1"
  },1500);

  $('#headertext').fadeIn(2000);
};

function tabsFade(){
  var controller = new ScrollMagic.Controller();

  var title = new ScrollMagic.Scene({
    triggerElement: ".tabs, .summarytext",
    duration:500
  });

  title.setTween(".tabs, .summarytext", 1, {
    'opacity': '1',
  });

  title.triggerHook(0.9);

  title.addTo(controller);
};

function imageHighlight(){
  var controller = new ScrollMagic.Controller();

  var title = new ScrollMagic.Scene({
    triggerElement: ".fullimage h1",
    duration:500
  });

  title.setTween(".fullimage h1", 1, {
    'opacity': '1',
    'margin-left':'10%'
  });

  title.triggerHook(1);

  title.addTo(controller);
}

function paragraphOne(){
  var controller = new ScrollMagic.Controller();

  var title = new ScrollMagic.Scene({
    triggerElement: ".p1",
    duration:750
  });

  title.setTween(".p1", 1, {
    'opacity': '1',
  });

  title.triggerHook(1);

  title.addTo(controller);
}

function paragraphTwo(){
  var controller = new ScrollMagic.Controller();

  var title = new ScrollMagic.Scene({
    triggerElement: ".p2",
    duration:750
  });

  title.setTween(".p2", 1, {
    'opacity': '1',
  });

  title.triggerHook(1);

  title.addTo(controller);
}

function imageOne(){
  var controller = new ScrollMagic.Controller();

  var title = new ScrollMagic.Scene({
    triggerElement: ".pimage1",
    duration:750
  });

  title.setTween(".pimage1", 1, {
    'margin-left':'10%'
  });

  title.triggerHook(1);

  title.addTo(controller);
}

function imageTwo(){
  var controller = new ScrollMagic.Controller();

  var title = new ScrollMagic.Scene({
    triggerElement: ".pimage2",
    duration:750
  });

  title.setTween(".pimage2", 1, {
    'margin-left':'10%'
  });

  title.triggerHook(1);

  title.addTo(controller);
}

function sliderFade(){
  var controller = new ScrollMagic.Controller();

  var title = new ScrollMagic.Scene({
    triggerElement: ".photoslider img",
    duration:750
  });

  title.setTween(".photoslider img", 1, {
    'opacity':'1'
  });

  title.triggerHook(1);

  title.addTo(controller);
}

function projectNext(){
  var controller = new ScrollMagic.Controller();

  var title = new ScrollMagic.Scene({
    triggerElement: ".previousproject",
    duration:750
  });

  title.setTween(".previousproject", 1, {
    'opacity':'1',
    'margin-left':'10%'
  });

  title.triggerHook(1);

  title.addTo(controller);
}
