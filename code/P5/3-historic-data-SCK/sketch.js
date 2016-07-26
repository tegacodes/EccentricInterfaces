//add in device number here
var no = 3636;
var sno = 14;
var startDate = "2016-07-18";
var endDate = "2016-07-30";
var rollup = "1h";
var calc="avg";
//https://api.smartcitizen.me/v0/devices/3636/readings?sensor_id=14&rollup=1h&from=2016-07-18&to=2016-07-30
//construct string from the API call and the device number variable no
//var url = "https://api.smartcitizen.me/v0/devices/" + no +"/readings?sensor_id="+sno+"&rollup="+rollup+"&from="+startDate+"&to="+endDate;

var url = "https://api.smartcitizen.me/v0/devices/" + no +"/readings?sensor_id="+sno+"&rollup="+rollup+"&"+calc+"&from="+startDate+"&to="+endDate;


function setup() { //runs once
  createCanvas(640, 480);
  //CALL BACK
  //this is a call back that says, wait until we get some data back from url, and then send it 
  //as the variable to goData
  loadJSON(url, gotData);
}


function draw() { //loops continuously
  background(0, 0, 0, 100);
  noStroke();
  
  ellipse(width / 2, height / 2, 50, 50);
}



//gotData recieves a bunch of json data in its local variable called citizen
function gotData(citizen) {
  //print it out
  console.log(citizen); 
  
 
  
  var no2Div = createDiv("Some text to add to website  " + " <small>units</small>"); //add in div that gets data value to write to screen
  //this will add to the bottom of the screen
 }