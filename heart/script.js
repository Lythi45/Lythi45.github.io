var xa=[];
var ya=[];
var num=71;
var z=0;
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
  dist=0.10;
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
    fill(sin((i+z/6)/71*Math.PI*2*2)*127+128,0,0,80);
    ellipse(xa[i]*xf+xs,ya[i]*yf+ys,30,30)
  }
  for (i=0;i<num+1;i++) {
    fill(sin((i+z/6)/71*Math.PI*2*2)*127+128,0,0,255);
    ellipse(xa[i]*xf+xs,ya[i]*yf+ys,10,10)
  }
  z+=1;
}
