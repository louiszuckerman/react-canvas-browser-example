# Example [React-Canvas](https://github.com/Flipboard/react-canvas) Project for Browser

## Getting started

### Install tools

You can use [Node](http://nodejs.org/) or [io.js](https://iojs.org/en/index.html).  I'll use io.js in this example.

    host:~$ mkdir node; cd node
    host:~/node$ wget https://iojs.org/dist/v1.3.0/iojs-v1.3.0-linux-x64.tar.xz
    host:~/node$ tar xJf iojs-v1.3.0-linux-x64.tar.xz
    host:~/node$ ln -s iojs-v1.3.0-linux-x64 iojs
    host:~/node$ export PATH=$PATH:~/node/iojs/bin  # Add this to ~/.bashrc for later
    host:~/node$ npm install -g react-tools browserify

### Clone & build project

    host:~/node$ cd ~/projects
    host:~/projects$ git clone https://github.com/semiosis/react-canvas-browser-example.git
    host:~/projects$ cd react-canvas-browser-example
    host:~/projects/react-canvas-browser-example$ npm install react@^0.13.0-beta.1 react-canvas
    host:~/projects/react-canvas-browser-example$ jsx app.js | browserify - > public/browser.js

## Developing

You can now open public/index.html in a browser and see the app in action.  To make changes, just edit the app.js then
rebuild with the `jsx app.js | browserify - > public/browser.js` command