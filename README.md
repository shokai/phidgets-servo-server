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


LICENSE:
========

(The MIT License)

Copyright (c) 2012 Sho Hashimoto

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
