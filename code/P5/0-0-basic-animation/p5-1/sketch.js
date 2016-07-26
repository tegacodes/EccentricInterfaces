//DECLARE A VARIABLE
//ASSIGNED IT A VALUE
var x = 150;

function setup() {
  createCanvas(400, 400); // create(width, height);
  //color function
  background(255, 0, 0);
}

function draw() {
 //background(0, 255, 0); //if you refresh background at the start of draw. 
  //green
  fill(0, 255, 0); //fill our ellipse with bluw
  ellipse(x, 150, 20, 20); //ellipse(x,y,w,h);
  fill(0, 0, 255); //blue
  rect(50, 50, 300, 10);

  x = x + 10;

//IF STATEMENT!
  if (x > 400) { // < > ==  <= >= != operators
    //IF TRUE DO SOMETHING
    x = 0;
  }
}

function mousePressed(){
  
  //draw ellipse ellipse(x,y,w,h);
  ellipse(mouseX, mouseY, 40,40);
 
 //P5 BUILT IN VARIABLE
 //mouseX ->gets filled with the x coordinate of the mouse
 //mouse Y -> gets filled with y coodinate
  
}