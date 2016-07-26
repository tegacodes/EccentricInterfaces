function setup() {

 noCanvas();//to use html elements

  //THIS IS A CALLBACK
  //Will run drawFlower when the first part is finished and loaded. 
  //This structure order.
  loadJSON("morebirds.JSON", doBirds);
}


function draw() {


}

function doBirds(data) {
  var birds = data.birds;
  
//run through each elements of birds  
for(var i=0; i< birds.length; i++){
  //make bird families h1
  createElement('h1',birds[i].family);
  var members = birds[i].members;
  for(var j=0;j<members.length;j++){
    //put members in s a div
    createDiv(members[j]);
  }
}

}