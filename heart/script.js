function setup() {


  createCanvas(900, 600);
  background(0);
  noSmooth();


    textAlign(CENTER);
    textSize(12);

heart();
}

function heart() {
  xf=200;yf=-200;xs=450;ys=300;

background(0);
push();
strokeWeight(1);
stroke(255,0,0);
fill(255,0,0);
for (var x=-4; x<4; x+=0.01) {
  for (var y=-4; y<4; y+=0.01) {

    f=h(x,y);

    if (f<0) {
      stroke(-f*200,100,0);
    } else {
      stroke(100,f*100,0);
    }
    point(x*xf+xs,y*yf+ys)
  }
}

  pop();
}

function h(x,y) {
  t=(x*x+y*y-1);
  return t*t*t-x*x*y*y*y;
}
