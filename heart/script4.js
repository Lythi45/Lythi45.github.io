var xa=[];
var ya=[];
var num=144;
var z=0;

var hoeheDiff=[];
var tempo=[];
var weg=[];

var ticks=0;
var next_tick=0;
var akt_kugel=0;

var r=[];
var g=[];
var b=[];
var num_k_used=0;

var rl=[];
var gl=[];
var bl=[];

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
  for (i=0;i<num-1;i++) {
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
  hoeheDiff[i]=(y-ya[i])*5000;
  }
  wi=0;
}
hoeheDiff[num-1]=(ya[0]-ya[num-1])*5000;

function h(x,y) {
  t=(x*x+y*y-1);
  return t*t*t-x*x*y*y*y;
}

var  NUM_KUGEL=5;
//how many ticks for a new light
var  INTERVAL=100;
//how many bits the weg value is shifted down to get a pleasant movement of the lights
var WEG_FAK=12;
//const long  MAX_WAY=NUM_SEG<<WEG_FAK;
var MAX_WAY=589824;

var NUMPIXELS=144;

function draw(){
  background(0);
  stroke(0,0,0,0);

  if (ticks>=next_tick) {
    print("Neue Kugel");
    print(ticks);
    weg[akt_kugel]=0;
    tempo[akt_kugel]=random(10000);
    r[akt_kugel]=random(250);
    g[akt_kugel]=random(250);
    b[akt_kugel]=random(250);
    akt_kugel++;

    if (akt_kugel>num_k_used) {num_k_used=akt_kugel;}
    akt_kugel=(akt_kugel==NUM_KUGEL)?0:akt_kugel;
    next_tick+=INTERVAL;
    print(num_k_used+" ");
  }

  //delete old lights
  for (i=0;i<NUMPIXELS;i++) { rl[i]=0;gl[i]=0;bl[i]=0;}

  //cycle through the used lights
  for ( i=0;i<num_k_used;i++) {

  //the high resolution weg-var is shifted down to the number of LEDs
  var seg=weg[i]>>WEG_FAK;

  var strip_seg=NUMPIXELS-1-seg;

 //addition of the light colors to preexisting values
  rl[strip_seg]+=r[i];
  gl[strip_seg]+=g[i];
  bl[strip_seg]+=b[i];

  if (rl[strip_seg]>255) rl[strip_seg]=255;
  if (gl[strip_seg]>255) gl[strip_seg]=255;
  if (bl[strip_seg]>255) bl[strip_seg]=255;

  //the diff in height between the LEDs is equivalent to the negative force, so the height diff can be subsracted from the velocity (a way up is deaccelerating, a way down accelerating)
  tempo[i]-=hoeheDiff[seg];

  //a small amount of the velocity is substracted for friction
  tempo[i]=tempo[i]-(tempo[i]>>10);

  //each tick the light is moving according to the velocity
  weg[i]=weg[i]+tempo[i];

  //to close the circle a light who is leaving the LED-strip in each direction is remapped
  if (weg[i]>MAX_WAY) weg[i]-=MAX_WAY;
  if (weg[i]<0) weg[i]+=MAX_WAY;
  }
  for (i=0;i<NUMPIXELS;i++) {
    led(xa[i],ya[i],rl[i],gl[i],bl[i]);
  }
  ticks++;

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

function random(v) {
  return Math.random()*v;
}
