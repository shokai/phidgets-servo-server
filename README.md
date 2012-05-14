Phidgets Servo Server
=====================
control Phidgets Servo Motor via HTTP

* MacOSX or Linux
* Ruby 1.8.7+
* [Phidgets](http://www.phidgets.com)


Install Dependencies
--------------------

Install [Phidget21 Library](http://www.phidgets.com/drivers.php)

Install rubygems

    % gem install ffi phidgets-ffi eventmachine eventmachine_httpserver args_parser



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


Auto Start
----------

install plist

    % cp org.shokai.phidgetsservo.plist /Library/LaunchDaemons/
    % sudo chown root /Library/LaunchDaemons/org.shokai.phidgetsservo.plist
    % sudo chgrp wheel /Library/LaunchDaemons/org.shokai.phidgetsservo.plist

edit plist, then

    % sudo launchctl load /Library/LaunchDaemons/org.shokai.phidgetsservo.plist
