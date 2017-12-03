
PImage[] images = new PImage[100];
PImage[] images2 = new PImage[100];
int num_b=0;

int px=0;
int py=0;
int blocksize=100;
int sx=1200;
int sy=700;

IntDict tiles;

void setup() {
  tiles = new IntDict();
  size(1200, 700);
  for (int n=0;n<100;n+=1) {
  images[n] = loadImage("marble1/test"+nf(n+1,3)+".png");
  images2[n] = loadImage("marble2/test"+nf(n+1,3)+".png");
  }
}

void draw() {
   num_b=(num_b+100)%100;
     int rx=px/blocksize;
  int ry=py/blocksize;
  for (int x=rx;x<rx+sx/blocksize+2;x=x+1) {
    for (int y=ry;y<ry+sy/blocksize+2;y=y+1) {
 randomSeed(x+y*450);
    int bx=(x-1)*blocksize-px;
    int by=(y-1)*blocksize-py;
     int m_t=(x+y)%2;
     float ddd=random(4);//first random value after randomSeed() is shitty
     int tile=tiles.get(x+"+"+y,2);
     
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

void keyPressed() {
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

void mouseClicked() {
  int mx=(mouseX+px)/100+1;
  int my=(mouseY+py)/100+1;
   randomSeed(mx+my*450);
   float ddd=random(4);//first random value after randomSeed() is shitty
   int tile=tiles.get(mx+"+"+my,2);
   if (tile==2) {
   tile=1-int(random(2));} else {
     tile=1-tile;
   }
   tiles.set(mx+"+"+my,tile);
   println("Tile:"+mx+" "+my+" "+mouseX+" "+mouseY+" "+px+" "+py);
}
void mousePressed(){
}
void mouseDragged() {
  px-=(mouseX-pmouseX);
   py-=(mouseY-pmouseY);
}