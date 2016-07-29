#Data driven animation with p5js + Citizen Sensor Kit

* p5js & SCK
* Download [the code example zipped here.](https://github.com/tegacodes/EccentricInterfaces/blob/master/code/P5/code-zip.zip)
* Code repo: https://github.com/tegacodes/EccentricInterfaces/tree/master/code/P5

###Agenda
1) JSON  
2) Asynchronous JS and callbacks  
3) CSK API calls  

###JSON

* Let's talk about JSON.
* This is what JSON looks like: [https://api.smartcitizen.me/v0/devices/3636](https://api.smartcitizen.me/v0/devices/3636)
Gross HUH!
* Install this Chrome extension for [JSON data and install it.](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa). There are many for firefox too. Refresh and your json will be much nicer!

####CSK APIs

* [CSK API Documentation](http://developer.smartcitizen.me/#summary)
* The SCK API can be called without a key (for now). This is unusual, most APIS need authentification.

**Basic API Call**

* https://api.smartcitizen.me/v0/devices/deviceNumber
* Replacing deviceNumber with the device number you want (3636)
* Put in the browser and see the dataz


* [Historic data](http://developer.smartcitizen.me/#get-historical-readings)
* https://api.smartcitizen.me/v0/devices/3636/readings?sensor_id=14&rollup=1h&from=2016-07-18&to=2016-07-30

**Real Time API Calls**

* To make real time API calls to the SCK we have to use an additional library called [socket.io.](http://socket.io/). Check out the examples [in the repo.](https://github.com/tegacodes/EccentricInterfaces/tree/master/code/P5)
* To get this going, you don't need socket. Just add the following function to the top of your sketch.js file:

```
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

```
ALso add a link to the socket io library in the html file - eg:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.6/socket.io.js"></script>
```

This will put the json data into a variable called dataz. It seems to go at a frequency of 3/minute. Do with it what you will.


##Dan Shiffman Video Tutorials for backup

* [What is JSON 1](https://www.youtube.com/watch?v=_NFkzw6oFtQ&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=2)
* [What is JSON 2](https://www.youtube.com/watch?v=_NFkzw6oFtQ&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=2)
* [Loading JSON data from a URL (Asynchronous Callbacks!) - p5.js Tutorial](https://www.youtube.com/watch?v=6mT3r8Qn1VY)
* (And all the videos in that particular playlist)

For beginners:  

* [Foundations of Javascript tutorials](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)

##Cool Extras
* For weird and awesome sets of things in JSON format see Darius Kazemi's corpora: [https://github.com/dariusk/corpora](https://github.com/dariusk/corpora)

