//make a variable to catch the JSON object
var dataz;
var birds = [];
var b=0;
var bx=0;

//this is what pings their API and uses a javascript thing called socket.io
//basically imagine it as opening up the star gate and the data comes through
io.connect('wss://smartcitizen.xyz').on('data-received', function(device) {
	if(device.data.id==3724){
		console.log(device);
		//$('body').append("<div>" + device.data.name + "</div>");   
		//we put the json dataz in a variable called dataz
		dataz=device;
	}

});


var sound;
var light;
var temp;
var CO;
var NO2;

var playMode = 'sustain';
var s= 1;

function preload()
{
  // initialize sound
  sound = loadSound('data/puffin.mp3');
  for( var i=0;i<5;i++){
  	birds[i]=loadImage("data/bird/frame_"+i+".gif")

  }

}


function setup() {
	createCanvas(640, 480);
	background(255);
	println(dataz);
	imageMode(CENTER);
	frameRate(12);
}

function draw() {

	noStroke();
	if(dataz!=null){

		sound = dataz.data.data.sensors[7].raw_value;
		println("sound:"+sound);

		light = dataz.data.data.sensors[0].raw_value;
		println("Light"+light);

		NO2 = dataz.data.data.sensors[15].raw_value;
		println("NO2:"+NO2);

		COData = dataz.data.data.sensors[5].raw_value;
		println("CO:"+CO);

		Temp = dataz.data.data.sensors[12].raw_value;
		println("Temp:"+Temp);

	}
	
	

	from = color(255, 0, 0);
	to = color(0, 0, 255);
	var x = map(light,0,2500, 0,1);
	var col1 = lerpColor(from, to, x); //http://p5js.org/reference/#/p5/lerpColor
	fill(col1);
	rect(0,0,width,height/2);
	fill(0);
	rect(0,height/2,width,height/2);

	if(soundData>60){
		if(s==1){
			sound.play();
			s=0;
		}
		sound.onended(myCallback);

	}else{
		sound.stop();
	}




}

function myCallback () {
	console.info("sound finished");
	s=1;
}


