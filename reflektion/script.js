function setup() {

  var d = 70;
  var p1 = d;
  var p2 = p1+d;
  var p3 = p2+d;
  var p4 = p3+d;

  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(900, 600);
  background(0);
  noSmooth();

    input = createInput('-cos(x)');
    input.position(20, 65);

    button = createButton('submit');
    button.position(input.x + input.width, 65);
    button.mousePressed(greet);

    greeting = createElement('h2', 'Funktion mit x eingeben:');
    greeting.position(20, 5);

    textAlign(CENTER);
    textSize(0.5);


}

function greet() {
  xf=200;yf=200;xs=450;ys=300;
  tiny=0.00001;
  var name = input.value();
  //greeting.html('hello '+name+'!');
  input.value('');
background(0);
push();
translate(xs,ys);
scale(xf,-yf);
strokeWeight(0.01);
  for (var x=-4; x<4; x+=0.01) {
    y=eval(name);
stroke(255);
    if (x>-4) {
      line(ax,ay,x,y);
    }
    ay=y;
    ax=x;
  }

  stroke(255,0,0);
  for (var xx=-4;xx<4;xx+=0.2){
    x=xx;
    y=eval(name);
    x=xx+tiny;
    y2=eval(name);
    winkel=atan((y2-y)/tiny)*2+Math.PI/2;
    wx=cos(winkel)*3;
    wy=sin(winkel)*3;
    line(x,3,x,y);
    line(x,y,x+wx,y+wy);
    print(x+" "+y+" "+winkel+" "+wx+" "+wy);
  }
  pop();
}
