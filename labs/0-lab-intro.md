#Lab 0: Sensing

##Arduino
[https://www.arduino.cc/](https://www.arduino.cc/)

**What is it?**

* Open source microcontroller
* Off line board that connects sensors and actuators
* Tutorials and getting started guides are here: 
	* [https://www.arduino.cc/en/Guide/HomePage](https://www.arduino.cc/en/Guide/HomePage)


##Particle 

[https://www.particle.io/](https://www.particle.io/)  
(Photon models)

**What is it?**

* Open source microcontroller (with an Ardunio heart) but with wifi connectivity. 
* 8 digital GPIO pins and 6 analog input pins.
* It is programmed with the same language as Arduino but comes with it's own browser based IDE. 
* Programs are uploaded to each board from the IDE over wifi.
* Although these boards are designed to operate wirelessly, this means you will need to consider [power.](https://docs.particle.io/datasheets/photon-datasheet/#power) They can be powered by  3.6VDC and 5.5VDC batteries via the mini usb port.
* Boards are compatible with sensors, and sensor data is sent to the Particle API 
* Sensor data can easily be set up with IFTTT via the platform.


##Citizen Sensing Kit

[https://smartcitizen.me/](https://smartcitizen.me/)

**What is it?**

* Prebaked sensing kit with wireless connectivity: Measures temperature, Humidity, Light, Sound, Carbon Monoxide, Nitrogen Dioxide 
* This board publishes data to the Smart Citizen website. You can find your sensor board at the Copenhagen location.
* For more documentation for set up, data and API structure go here: [https://docs.smartcitizen.me/#/](https://docs.smartcitizen.me/#/)
* For information on how to call the API and use the data in custom software see here: [https://docs.smartcitizen.me/#/start/inside-the-sc-platform](https://docs.smartcitizen.me/#/start/inside-the-sc-platform)
* To see the raw data being published by the kit already installed at CIID go here: [https://api.smartcitizen.me/v0/devices/3545/](https://api.smartcitizen.me/v0/devices/3545/). Looks disgusting hey! This data is in json format and is produced via an api call. If you are curious, for a tutorial on json data using javascript and p5js formats, see the [delightful Dan Shiffman tutorial here.](https://www.youtube.com/watch?v=6mT3r8Qn1VY) Don't worry we will be going into this more tomorrow!

For some further reading on art and API (and their politics):

* Jer Thorp, [Art and the API](http://blog.blprnt.com/blog/blprnt/art-and-the-api), 2013.


##To try (if time permits):

####Particle + Light sensor:

* Login to the [particle build environment](https://build.particle.io).
* Connect your board.
* Go to this [getting started guide](* [Getting started tutorial is here](https://docs.particle.io/guide/getting-started/start/photon/)) and read through the device modes section.
* Go to [web IDE section](https://docs.particle.io/guide/getting-started/build/photon/) and familiarize yourselves with this section
* Go to the code examples and run through the ["Read your Photoresistor: Function and Variable" section.](https://docs.particle.io/guide/getting-started/examples/photon/#read-your-photoresistor-function-and-variable)

**Trouble shooting:**

* Not sure what's happening with your Particle? See this guide describing [device modes.](https://docs.particle.io/guide/getting-started/modes/electron/)

