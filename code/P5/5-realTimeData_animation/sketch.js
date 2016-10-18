//make a variable to catch the JSON object
var dataz;
var sound;
var light;
var temp;
var CO;
var NO2;

var birds = [];
var b=0;
var bx;

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

function preload(){

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

	bx = width-100;
}

function draw() {

	noStroke();
	checkforData();
	

	image(birds[b], bx, 0,100,100);
	
	if(b<4){
		b++;	
	}else{
		b=0;
	}
	
	if(sound<30){
		bx=bx-5;
	}else if(sound<70){
		bx=bx-2;
	}else{
		bx=bx;
	}

	if( bx<0){
		bx=width-100;
	}
}

function checkforData(){

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
}

//Next steps: How can you make the image turn around
//scale() of (-1,1) to the character’s image inside a push()/pop() 
//How can you add in more... sounds, colors etc.
