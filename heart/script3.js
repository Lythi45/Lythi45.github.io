var xa=[];
var ya=[];
var num=143;
var z=0;
function setup() {


  createCanvas(900, 600);
  background(0);
  noSmooth();


    textAlign(CENTER);
    textSize(12);

heart();
}

var  xf=200;yf=-200;xs=450;ys=300;

function heart() {

tiny=0.0000001;
background(0);
push();
strokeWeight(1);
stroke(255,0,0);
fill(255,0,0);
/*
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
*/

  pop();
  stroke(255,0,0);
  fill(255,0,0,127);
  dist=0.05;
  x=0;
  y=1;
  ellipse(x*xf+xs,y*yf+ys,10,10)
  xa[0]=0;
  ya[0]=1;
  for (i=0;i<num;i++) {
  w=999;
  wi=0;
  ws=Math.PI/4;
  ri=1
  while(abs(w)>tiny){
    w=h(cos(wi)*dist+x,sin(wi)*dist+y);
    if (ri!=Math.sign(w)) {
      ws=ws/2;
      ri*=-1;
    }
    wi+=ws*ri;
    //print(wi,ws,ri,w,x,y);
  }
  x= cos(wi)*dist+x;
  y= sin(wi)*dist+y;
  print(x,y);
  ellipse(x*xf+xs,y*yf+ys,10,10)
  xa[i+1]=x;
  ya[i+1]=y;
  }
  wi=0;
}

function h(x,y) {
  t=(x*x+y*y-1);
  return t*t*t-x*x*y*y*y;
}

function draw(){
  background(0);
  stroke(0,0,0,0);
  for (i=0;i<num+1;i++) {
    r=sin((i+z/3)/72*Math.PI*2*2);
    if (r>0.98) led(xa[i],ya[i],r*127+128,0,0);

  }

  z+=1;
  fill(0);
  beginShape();
  vertex(-4*xf+xs,4*yf+ys);
  vertex(0*xf+xs,4*yf+ys);
  for (i=0;i<num+1;i++) {
    vertex(xa[i]*xf+xs,ya[i]*yf+ys);
  }
  vertex(xa[0]*xf+xs,ya[0]*yf+ys);
  vertex(0*xf+xs,4*yf+ys);
  vertex(4*xf+xs,4*yf+ys);
  vertex(4*xf+xs,-4*yf+ys);
  vertex(-4*xf+xs,-4*yf+ys);
  endShape();
}

function led(x,y,r,g,b) {
  fill(r,g,b,30);
  ellipse(x*xf+xs,y*yf+ys,180,180)
  fill(r,g,b,60);
  ellipse(x*xf+xs,y*yf+ys,100,100)
  fill(r,g,b,80);
  ellipse(x*xf+xs,y*yf+ys,30,30)
  fill(r,g,b,255);
  ellipse(xa[i]*xf+xs,ya[i]*yf+ys,10,10)
}
