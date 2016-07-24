#Wired connection to accelerometer.

Accelerometer is this one: [MPU-6050](http://playground.arduino.cc/Main/MPU-6050)
YUN setup [is here.](https://www.arduino.cc/en/Guide/ArduinoYun#toc15s)

On my yun:
SIID: tegayun
pw: arduino2016

* ssh root@tegayun.local (here is a [terminal tutorial for mac](https://www.arduino.cc/en/Tutorial/LinuxCLI))
* check IP address in port of arduino

Code for [this tutorial.](http://www.geekmomprojects.com/gyroscopes-and-accelerometers-on-a-chip/)

Wiring:
To set up the hardware, I soldered header pins to the GY-521, and connected it to an Arduino UNO via a tiny bread board.  The wiring was trivial – only four jumper cables were needed.  For power connect GND↔GND and VCC↔3.3V (the GY-521 board has a voltage regulator, and can take either 5V or 3.3V). Only two pins were needed to transmit data on the I2C bus: SDA (data)↔A4 and SCL (clock)↔A5.

