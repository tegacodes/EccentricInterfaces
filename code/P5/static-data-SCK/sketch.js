// var url1 = "https://api.smartcitizen.me/v0/devices/3545/readings?sensor_id=15&rollup=1m&from=2016-07-17&to=2016-07-20";
var url1 = "https://api.smartcitizen.me/v0/devices/3545";
var noTwo, light;

function setup() {
	createCanvas(640, 480);
	loadJSON(url1, gotData);
}
function draw() {
	 background(noTwo*10,0,0,100);
	 noStroke();
	 fill(0,light/3,light/3)
	 ellipse(width/2, height/2, 50, 50);
}
function gotData(citizen){
	console.log(citizen);
	for(i=0; i<citizen.data.sensors.length; i++){
		if(citizen.data.sensors[i].description=="NO2"){
			console.log(citizen.data.sensors[i].raw_value);
			noTwo = citizen.data.sensors[i].raw_value;
		}
		if(citizen.data.sensors[i].description=="Digital Ambient Light Sensor"){
			light = citizen.data.sensors[i].raw_value;
		}
	}
  var no2Div = createDiv("NO2 " + noTwo + " <small>kOhm/ppm</small>");
}