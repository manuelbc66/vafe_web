function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

TweenMax.set('svg', {
  visibility: 'visible' });


// Loader 1
var loader1Bar1Heights = [20, 45, 57, 80, 64, 32, 66, 45, 64, 23, 66, 13, 64, 56, 34, 34, 2, 23, 76, 79, 20];
var loader1Bar1Timeline = new TimelineMax({ repeat: -1 });
var loader1Bar2Heights = [80, 55, 33, 5, 75, 23, 73, 33, 12, 14, 60, 80];
var loader1Bar2Timeline = new TimelineMax({ repeat: -1 });
var loader1Bar3Heights = [50, 34, 78, 23, 56, 23, 34, 76, 80, 54, 21, 50];
var loader1Bar3Timeline = new TimelineMax({ repeat: -1 });
var loader1Bar4Heights = [30, 45, 13, 80, 56, 72, 45, 76, 34, 23, 67, 30];
var loader1Bar4Timeline = new TimelineMax({ repeat: -1 });

function tlArrayStep(element, timeline, duration, array) {
  for (var i = 0, length = array.length; i < length; i++) {
    timeline.to(element, duration, { height: array[i] });
  }
}

tlArrayStep('.loader1 rect:nth-child(1)', loader1Bar1Timeline, 4.3 / loader1Bar1Heights.length, loader1Bar1Heights);
tlArrayStep('.loader1 rect:nth-child(2)', loader1Bar2Timeline, 2 / loader1Bar2Heights.length, loader1Bar2Heights);
tlArrayStep('.loader1 rect:nth-child(3)', loader1Bar3Timeline, 1.4 / loader1Bar3Heights.length, loader1Bar3Heights);
tlArrayStep('.loader1 rect:nth-child(4)', loader1Bar4Timeline, 2 / loader1Bar4Heights.length, loader1Bar4Heights);

// Loader 2
TweenMax.to('.loader2 circle:nth-child(1)', 2, {
  attr: {
    r: 22,
    "stroke-width": 1,
    "stroke-opacity": 1 },

  opacity: 0,
  repeat: -1,
  delay: 1 });

TweenMax.to('.loader2 circle:nth-child(2)', 2, {
  attr: {
    r: 22,
    "stroke-width": 1,
    "stroke-opacity": 1 },

  opacity: 0,
  repeat: -1 });

TweenMax.to('.loader2 circle:nth-child(3)', 1.5, {
  attr: {
    r: 1 },

  repeat: -1,
  yoyo: true,
  ease: Power2.easeOut });


// Loader 3
TweenMax.staggerTo('.loader3 circle', 0.5, {
  attr: {
    "fill-opacity": 0 },

  repeat: -1,
  yoyo: true,
  ease: Power0.easeNone },
0.25);

// Loader 4
var loader4__hearts = document.querySelectorAll('.loader4__heart');
var loader4Count = void 0;

TweenMax.set('.loader4__heart:first-child', {
  opacity: 0.5 });

for (loader4Count = 0; loader4Count < loader4__hearts.length; ++loader4Count) {
  var opacityProp = 0.5;
  if (loader4Count === 0) {
    opacityProp = 1;
  }

  TweenMax.to(loader4__hearts[loader4Count], 0.75, {
    opacity: opacityProp,
    repeat: -1,
    yoyo: true,
    ease: Power0.easeNone });


}

// Loader 5
var loader5Front = document.querySelector('.loader5__front');

TweenMax.set(loader5Front, {
  drawSVG: '25% 45%' });

TweenMax.to(loader5Front, 1, {
  rotation: 360,
  repeat: -1,
  transformOrigin: '50% 50%',
  ease: Power0.easeNone });


// Loader 6
var loader6__circles = document.querySelectorAll('.loader6 circle');
var loader6Count = void 0;

TweenMax.set('.loader6__center', {
  opacity: 0.3,
  scale: 0.6,
  transformOrigin: '50% 50%' });

for (loader6Count = 0; loader6Count < loader6__circles.length; ++loader6Count) {
  var scaleProp = 0.6;
  var _opacityProp = 0.3;
  if (loader6Count === 1) {
    scaleProp = 1;
    _opacityProp = 1;
  }

  TweenMax.to(loader6__circles[loader6Count], 0.5, {
    opacity: _opacityProp,
    scale: scaleProp,
    repeat: -1,
    yoyo: true,
    transformOrigin: '50% 50%',
    ease: Power0.easeNone });


}

// Loader 7
var loader7Timeline = new TimelineMax({ repeat: -1 });

loader7Timeline.staggerTo('.loader7 circle', 0.4, {
  attr: {
    "fill-opacity": 1 } },

0.2).
staggerTo('.loader7 circle', 0.4, {
  attr: {
    "fill-opacity": 0 } },

0.2, 0.4);

// Loader 8
TweenMax.staggerTo('.loader8 circle', 2, {
  attr: {
    r: 20 },

  opacity: 0,
  repeat: -1 },
1);

// Loader 9
TweenMax.to('.loader9__inner', 2, {
  rotation: -360,
  repeat: -1,
  transformOrigin: '50% 50%',
  ease: Power0.easeNone });

TweenMax.to('.loader9__outer', 3, {
  rotation: 360,
  repeat: -1,
  transformOrigin: '50% 50%',
  ease: Power0.easeNone });


// Loader 10
TweenMax.to('.loader10', 1, {
  rotation: 360,
  repeat: -1,
  ease: Power0.easeNone });


// Loader 11
var loader11Timeline = new TimelineMax({ repeat: -1 });

TweenMax.to('.loader11__center', 0.5, {
  attr: {
    height: 10 },

  y: 60,
  repeat: -1,
  yoyo: true,
  stagger: 5 });

TweenMax.to('.loader11__inner2', 0.5, {
  attr: {
    height: 10 },

  y: 50,
  repeat: -1,
  yoyo: true,
  delay: 0.25 });

TweenMax.to('.loader11__inner3', 0.5, {
  attr: {
    height: 10 },

  y: 50,
  repeat: -1,
  yoyo: true,
  delay: 0.35 });


// Loader 12
var loader12Timeline = new TimelineMax({ repeat: -1 });

loader12Timeline.to('.loader12__path-top', 0.75, {
  attr: {
    cx: 50,
    cy: 50 } },

"l12_1").
to('.loader12__path-left', 0.75, {
  attr: {
    cx: 27,
    cy: 5 } },

"l12_1").
to('.loader12__path-right', 0.75, {
  attr: {
    cx: 5,
    cy: 50 } },

"l12_1");