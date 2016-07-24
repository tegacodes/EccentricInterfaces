###Environment (data collection)

* Smart Citizen kit: Temperature, Humidity, Light, Sound, Carbon Monoxide, Nitrogen Dioxide
* https://smartcitizen.me/#sck
* Start on p5 code repository:[https://github.com/aberner6/e_i_code](https://github.com/aberner6/e_i_code)
* Smart citizen API documentation: [http://developer.smartcitizen.me/#root-endpoint](http://developer.smartcitizen.me/#root-endpoint)
* [API data example](https://api.smartcitizen.me/v0/devices/3545/readings?sensor_id=7&rollup=1m&from=2016-07-17&to=2016-07-20)
* [data example 2](https://api.smartcitizen.me/v0/devices/3545/readings?sensor_id=15&rollup=4h&function=max&from=2016-07-17&to=2016-07-20)

##Motion (data collection)
Accelerometer + Gyro: 

Sucessfully got this up and running with an Arduino Duemilanove and a Accelerometer (and an Arduino Nano). Code in repository.
* http://www.geekmomprojects.com/gyroscopes-and-accelerometers-on-a-chip/

To try:
* Arduino nano. (https://www.youtube.com/watch?v=ce3eA8nzInE) Then sending values with radio. 
* Setting up nano with a new mac is a pain: see this guide to try various drivers: http://www.homautomation.org/2015/02/05/how-to-use-arduinos-with-ch340g-ch341g-serialusb-ftdi-chip/
* Arduni YUN is reading funky data from accelerometer.

Arduino YUN + gyro + accelerometer (GY-521 MPU-6050 Module 3)
* http://arduinoyunn.blogspot.com/2014/09/arduino-yun-to-gy-521-accelerometer.html
* Note: This is raspberry pi 1 not 2 so careful with pin numbers: http://blog.bitify.co.uk/2013/11/interfacing-raspberry-pi-and-mpu-6050.html
* http://playground.arduino.cc/Main/MPU-6050#short

Radio + Accelerometer + Nano
* http://forum.arduino.cc/index.php?topic=398769.0

##Energy monitoring (data collection)

* Arduino shield: https://openenergymonitor.org/emon/emontxshield/smt

##Screen based data out

* http://p5js.org/
* https://github.com/processing/p5.js/wiki/Processing-transition

####Particle

* Getting particle on wifi hotspot:[https://cmuphyscomp.github.io/physcomp-f15/exercises/mobile/wireless-with-photon/index.html](https://cmuphyscomp.github.io/physcomp-f15/exercises/mobile/wireless-with-photon/index.html)


####P5 tutorials on api calls:
* Basic [p5 data weather example.](http://p5js.org/examples/demos/Hello_P5_Weather.php). Although this does not update in real time.   
* See Annelie p5 repo for smart citizen

For help on p5 + APIS, Shiffman has many tutorials on this here:   
* [Working with APIS in js](https://vimeo.com/144162104)
* [Loading json asynchronously from urls](https://vimeo.com/144162101)
* [For real time pings of api using setInterval](https://vimeo.com/144704359)
* and many more on that channel too.

##Radio Comms
* https://www.youtube.com/watch?v=wlhuO82IZjQ
* http://arduino-info.wikispaces.com/Nrf24L01-2.4GHz-HowTo