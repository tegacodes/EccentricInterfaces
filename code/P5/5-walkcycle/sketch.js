var frames = []; // An array to store the images
var characterX;  // The X location of the character
var characterY;  // The Y location of the character
var targetX;     // The X goal, from the user's click
var targetY;     // The Y goal, from the user's click
var exampleImgOnly; 
var ff=0;

//---------------------------------------
function preload(){

  // These URLs are for the individual walk cycle images,
  // stored in the imgur album http://imgur.com/a/85DTu
  var filenames = [];


  filenames[0] = "http://i.imgur.com/svA3cqA.png";
  filenames[1] = "http://i.imgur.com/jV3FsVQ.png";
  filenames[2] = "http://i.imgur.com/IgQDmRK.png";
  filenames[3] = "http://i.imgur.com/kmVGuo9.png";
  filenames[4] = "http://i.imgur.com/jcMNeGq.png";
  filenames[5] = "http://i.imgur.com/ttJGwkt.png";
  filenames[6] = "http://i.imgur.com/9tL5TRr.png";
  filenames[7] = "http://i.imgur.com/IYn7mIB.png";
  
  for(var i=0; i<5;i++){

    frames[i]=loadImage("data/bird/frame_"+i+".gif");
  }
  
  // // PUT CODE HERE TO LOAD THE IMAGES INTO THE frames ARRAY,
  // // USING THE FILENAMES STORED IN THE filenames ARRAY.
  // exampleImgOnly = loadImage("http://i.imgur.com/svA3cqA.png");
  
}

//---------------------------------------
function draw() {
  background(255);
  
  // PUT CODE HERE TO MOVE THE CHARACTER TOWARDS THE TARGET.
  var dx = targetX - characterX;
  var dy = targetY - characterY;
  var distanceFromCharacterToTarget = sqrt(dx*dx + dy*dy);
  if(dx<0){
    characterX--; 
  }
  if(dx>0){
characterX++; 
  }
  if(dy<0){
    characterY--;
  }
  if(dy>0){
characterY++;
  }
  
  // PUT CODE HERE TO DISPLAY THE CHARACTER, CYCLING THROUGH THE FRAMES.
  // WHEN YOU GET THAT WORKING, FLIP THE IMAGE IF THE CHARACTER'S HEADING LEFT. 
  // ...
  image (frames[ff], characterX, characterY, 100,100); // temporary only!
  
  
  // Don't touch this:
  // Draw a spot at the target, colored based on the character's proximity. 
  drawTargetEllipse (distanceFromCharacterToTarget);
  if(ff<4){
    ff++;
  }else{
    ff=0;
  }

}


//=======================================================
// PROBABLY NO REASON TO CHANGE ANYTHING BELOW THIS LINE. 
function setup() {
  createCanvas(800, 480);
  imageMode(CENTER);
  frameRate(12);
  
  // Initialize the character and target positions. 
  characterX = width/2; 
  characterY = height/2; 
  targetX = characterX;
  targetY = characterY;
}

//---------------------------------------
function drawTargetEllipse(distanceFromCharacterToTarget){
  if (distanceFromCharacterToTarget < 80){
    fill (0,200,0, 40); // Green if we're nearby
  } else {
    fill (255,0,0, 40); // Red if we're far away
  }
  noStroke();
  ellipse(targetX, targetY, 160,160); 
}

//---------------------------------------
function mousePressed() {
  targetX = mouseX;
  targetY = mouseY;
}