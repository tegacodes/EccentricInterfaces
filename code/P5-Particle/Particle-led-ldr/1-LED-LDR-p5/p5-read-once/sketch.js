function setup() {
  createCanvas(displayWidth,displayHeight);
  noLoop();
  var url= 'https://api.particle.io/v1/devices/260037000447333439313830/analogvalue?access_token=27280314aec35f59f2530e76ba2e999f3600dfd9';
  data = loadJSON(url, drawLight);
}


function draw() {

  background(0);

}

function drawLight(data){
  var i = 0;
  stroke(180);
  var reading = data.result;
  print(reading);
  fill (200, 0, reading/10);

  while (i < reading){
  ellipse(random(width), random(height), reading/50, reading/50);
  i++;
  }


}
