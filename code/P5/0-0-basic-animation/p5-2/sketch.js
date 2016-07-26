//2 variables for x and y of ellipse
var x;
var y;


function setup() {
  createCanvas(400,400); 
  noStroke();
  //stroke(r,g,b);
}

function draw() {
 
 x= random(0,400); //random function ---> random(min,max);
 y = random(0,400);
 var r = random(0,255);
 var b = random(0,255);
 var g = random(0,255);
 var s = random(0,100);
 
 fill(r,g,b, 100); //fill(r,g,b,a);   alpha -> transparency
 ellipse(x,y,s,s);
 
  
}