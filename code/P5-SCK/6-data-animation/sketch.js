//make a variable to catch the JSON object
var dataz;

//this is what pings their API and uses a javascript thing called socket.io
//basically imagine it as opening up the star gate and the data comes through
io.connect('wss://smartcitizen.xyz').on('data-received', function(device) {
  if(device.data.id==3636){
    console.log(device);
    //$('body').append("<div>" + device.data.name + "</div>");   
    //we put the json dataz in a variable called dataz
    dataz=device;
  }

});


//ARRAY OF IMAGES
//declare data type 
var images = [];
var j=0;// a variable to call each position in our array
var n=10;
var x;
var soundData;


function preload(){
    //fill our array
  for (var i=0; i<67; i++) { //run through values of i
    var s=nf(i, 3);
    
    images[i] = loadImage("data/frame_"+s+".gif"); //use these values to fill each box in our array
  }
}
function setup() {
  createCanvas(600, 300);
  x=width;

}
function draw() {
  background(255);
  //image function
  if(dataz!=null){

    soundData = dataz.data.data.sensors[7].value;
    println("soundData:"+soundData);

    light = dataz.data.data.sensors[0].raw_value;

    //note sometimes .value seems to give a 0, and other times .raw_value does for both
    //these sensors. Check out latest values here: https://api.smartcitizen.me/v0/devices/3636/

    println("Light"+light);
  }

  if (j>66) { //if i reach the end of my array
    j=0; //send j back to zero
  }


  x=x-round(soundData/200);
  if (x<-300) {
    x=width;
  }
  image(images[j], x, 0, 300, height); //draw images to screen for each value of j (position in your array)

  j++; //j generates values that we then use to call each position of the array

}