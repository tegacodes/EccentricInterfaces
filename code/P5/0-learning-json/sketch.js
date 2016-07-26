
function setup() {

  createCanvas(400, 400);
    background(255, 0, 0);

  //THIS IS A CALLBACK
  //Will run drawFlower when the first part is finished and loaded. 
  //This structure order.
loadJSON("flower.JSON", drawFlower);
}


function draw() {



}

function drawFlower(flower) {   //the argument here is the JSON data that is coming from the loadJSON file
  rect(100, 0, flower.width, flower.height);
  text(flower.name, 10, 50);

}