
var images=[];
var images2 = [];
var num_b=0;

var px=0;
var py=0;
var blocksize=100;
var sx=1200;
var sy=700;

var tiles={};

function setup() {
  createCanvas(1200, 700);
  for (var n=0;n<100;n+=1) {
  images[n] = loadImage("marble1/test"+nf(n+1,3)+".png");
  images2[n] = loadImage("marble2/test"+nf(n+1,3)+".png");
  }
}

function draw() {
   num_b=(num_b+100)%100;
     var rx=px/blocksize;
  var ry=py/blocksize;
  for (var x=rx;x<rx+sx/blocksize+2;x=x+1) {
    for (var y=ry;y<ry+sy/blocksize+2;y=y+1) {
 randomSeed(x+y*450);
    var bx=(x-1)*blocksize-px;
    var by=(y-1)*blocksize-py;
     var m_t=(x+y)%2;
     var ddd=random(4);//first random value after randomSeed() is shitty
     var tile=tiles.get(x+"+"+y,2);
     
     if (tile==2) {tile=int(random(2));}
     
      if (tile>0) {
  if (m_t==0) {image(images[num_b], bx, by);} else
              {image(images[(100-num_b)%100], bx, by);}
      } else {
    if (m_t==0) {image(images2[num_b], bx,by);} else
              {image(images2[(100-num_b)%100],  bx, by);}    
      }
 
    }
  }
  num_b+=1;
  //saveFrame("bild####.png");
}

function keyPressed() {
  if (key=='a') {
    px=px-6;;
  }
    if (key=='d') {
    px=px+6;;
  }
     if (key=='w') {
    py=py-6;
  }
      if (key=='s') {
    py=py+6;
  }
  
     if (key=='+') {
    num_b+=1;
  } 
     if (key=='-') {
   num_b-=1;
  } 
  
}

function mouseClicked() {
  var mx=(mouseX+px)/100+1;
  var my=(mouseY+py)/100+1;
   randomSeed(mx+my*450);
   var ddd=random(4);//first random value after randomSeed() is shitty
   var tile=tiles.get(mx+"+"+my,2);
   if (tile==2) {
   tile=1-int(random(2));} else {
     tile=1-tile;
   }
   tiles.set(mx+"+"+my,tile);
   println("Tile:"+mx+" "+my+" "+mouseX+" "+mouseY+" "+px+" "+py);
}
function mousePressed(){
}
function mouseDragged() {
  px-=(mouseX-pmouseX);
   py-=(mouseY-pmouseY);
}