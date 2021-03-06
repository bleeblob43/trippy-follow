var segLength = 80,
  x, y, x2, y2;
var running = false;
var nib = 0;
function setup() {
  createCanvas(720, 480);
  strokeWeight(20);
  stroke(255, 70);
  background(0);
  x = width/2;
  y = height/2;
  x2 = x;
  y2 = y;
}

function draw() {

  dragSegment(0, mouseX, mouseY);
  for( var i=0; i<x.length-1; i++) {
    dragSegment(i+1, x[i], y[i]);
  }
}

function dragSegment(i, xin, yin) {
background(0);

  dx = mouseX - x;
  dy = mouseY - y;
  angle1 = atan2(dy, dx);

  tx = mouseX - cos(angle1) * segLength;
  ty = mouseY - sin(angle1) * segLength;
  dx = tx - x2;
  dy = ty - y2;
  angle2 = atan2(dy, dx);
  x = x2 + cos(angle2) * segLength;
  y = y2 + sin(angle2) * segLength;

  segment(x, y, angle1);
  dot(x2, y2, angle2);
	
}
function dot(x,y,a){
	push();
	translate(x,y);
	rotate(a);
	ellipse(segLength,0,20,20);
	pop();
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
	
  line(0, 0, segLength, 0);
	
  pop();
}

function mousePressed(){
  console.log(running);

  if(!running){
    push();
    translate(x,y);
    fill(255);
    ellipse(0,0,nib,nib);
    pop();
    nib++;
    if(nib>=100){
      nib = 0;
      running = false;
    }
  }
}
