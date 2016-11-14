//add in device number here
var no = 3636;

//construct string from the API call and the device number variable no
var url = "https://api.smartcitizen.me/v0/devices/" + String(no);
var noTwo, light;

function setup() { //runs once
  createCanvas(640, 480);
  //CALL BACK
  //this is a call back that says, wait until we get some data back from url, and then send it 
  //as the variable to goData
  loadJSON(url, gotData);
}


function draw() { //loops continuously
  background(noTwo * 10, 0, 0, 100);
  noStroke();
  fill(0, light / 3, light / 3)
  ellipse(width / 2, height / 2, 50, 50);
}



//gotData recieves a bunch of json data in its local variable called citizen
function gotData(citizen) {
  //print it out
  console.log(citizen); 
  //use a for loop to run through the json
  for (i = 0; i < citizen.data.sensors.length; i++) {
    if (citizen.data.sensors[i].description == "NO2") { //get the NO2 Value
      console.log(citizen.data.sensors[i].raw_value);
      noTwo = citizen.data.sensors[i].raw_value; //put into a variable called noTwo
    }
    if (citizen.data.sensors[i].description == "Digital Ambient Light Sensor") {
      light = citizen.data.sensors[i].raw_value; //put the light sensor data into light
    }
  }
  
  var no2Div = createDiv("NO2 " + noTwo + " <small>kOhm/ppm</small>"); //add in div that gets data value to write to screen
  //this will add to the bottom of the screen
}