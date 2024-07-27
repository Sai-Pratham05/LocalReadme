var c = document.getElementById('canv');
var $ = c.getContext('2d');

// JavaScript code to change canvas height on mobile devices
function setCanvasHeight() {
  const canvas = document.getElementById('canv');

  if (window.innerWidth <= 768 ||  window.innerWidth <= 1024) 
  {
    canvas.setAttribute('height', '35');
  }
}
setCanvasHeight();

window.addEventListener('resize', setCanvasHeight);


var col = function(x, y, r, g, b) {
  $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  $.fillRect(x, y, 1,1);
}
var R = function(x, y, t) {
  return( Math.floor(190 + 64*Math.cos( (x*x-y*y)/300 + t )) );
}

var G = function(x, y, t) {
  return( Math.floor(130 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
}

var B = function(x, y, t) {
  return( Math.floor(120 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
}

var t = 0;

var run = function() {
  for(var x=0;x<=35;x++) {
    for(var y=0;y<=35;y++) {
      col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
    }
  }
  t = t + 0.05;
  window.requestAnimationFrame(run);
}

run();