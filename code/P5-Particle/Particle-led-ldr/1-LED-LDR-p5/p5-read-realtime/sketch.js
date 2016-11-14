var data;
var reading =0;
var currentM;

function setup() {
  createCanvas(displayWidth,displayHeight);
  readurl();
  currentM=millis();
}


function draw() {
  fill(255);
  if(millis()-currentM>2000){
    readurl();
    print("read URL");
    currentM=millis();
    print("currentM:"+currentM);
  }


}


function readsensor(data){
  background(255,0,0);
  reading = data.result;
  print("reading:"+reading);
  text(reading, 10,10);
  ellipse(200,200,reading,reading);


}

function readurl(){
  var url= 'https://api.particle.io/v1/devices/260037000447333439313830/analogvalue?access_token=27280314aec35f59f2530e76ba2e999f3600dfd9';
  data = loadJSON(url, readsensor);
}
