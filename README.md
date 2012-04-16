Phidgets Servo Server
=====================
control Phidgets Servo Motor via HTTP

* Ruby 1.8.7+
* [Phidgets](http://www.phidgets.com)


Install Dependencies
--------------------

Install [Phidget21 Library](http://www.phidgets.com/drivers.php)

Install rubygem

    % gem install ffi phidgets-ffi eventmachine eventmachine_httpserver ArgsParser
n


Run
---

    % ./phidgets-servo-server --help
    % ./phidgets-servo-server --port 8901

=> start HTTP server on PORT 8901


Use
---

get Motor Position

    % curl http://localhost:8901


set Motor Position

    % curl -d 90 http://localhost:8901
