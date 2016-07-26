#SCK Data Animations

* p5js & SCK
* Download whole code zip here
* Repo is here

###Agenda
1) JSON  
2) Asynchronous JS and callbacks  
3) CSK API calls  

###JSON

* Let's talk about JSON.
* This is what JSON looks like: [https://api.smartcitizen.me/v0/devices/3636](https://api.smartcitizen.me/v0/devices/3636)
Gross HUH!
* Chrome extension for [JSON data and install it.](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa). Refresh.
* See this example.


####CSK APIs

* [CSK API Documentation](http://developer.smartcitizen.me/#summary)
* An API endpoint is
* The SCK API can be called without a key (for now). This is unusual.

**Basic API Call**

* https://api.smartcitizen.me/v0/devices/deviceNumber
* Replacing deviceNumber with the device number you want (3636)


* [Historic data](http://developer.smartcitizen.me/#get-historical-readings)
* https://api.smartcitizen.me/v0/devices/3636/readings?sensor_id=14&rollup=1h&from=2016-07-18&to=2016-07-30

**Real Time API Calls**

* To make real time API calls to the SCK we have to use an additional library called socket.io. A web socket is 



##Dan Shiffman Video Tutorials

* [What is JSON 1](https://www.youtube.com/watch?v=_NFkzw6oFtQ&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=2)
* [What is JSON 2](https://www.youtube.com/watch?v=_NFkzw6oFtQ&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=2)
* [Loading JSON data from a URL (Asynchronous Callbacks!) - p5.js Tutorial](https://www.youtube.com/watch?v=6mT3r8Qn1VY)
* [Foundations of Javascript tutorials](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)

##Cool Extras
* For weird and awesome sets of things in JSON format see Darius Kazemi's corpora: [https://github.com/dariusk/corpora](https://github.com/dariusk/corpora)

