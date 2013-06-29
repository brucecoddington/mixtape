# Locomotive/Express application boilerplate with Angular/RequireJS client application. #

# Getting Started #

This is not a framework..just a collection of some awesome frameworks molded to work together (kinda like a mixtape). Thank you to all of these projects for making my life easier. 

* [Locomotive](http://locomotivejs.org/)
* [Express](http://expressjs.com/)
* [SocketIO](http://socket.io/)
* [Angular](http://angularjs.org/)
* [RequireJS](http://requirejs.org/)
* [karma](http://karma-runner.github.io/0.8/index.html)
* [Mocha](http://visionmedia.github.io/mocha/)
* [chai](http://chaijs.com/)
* [sinon](http://sinonjs.org/)
* [Bootstrap](http://twitter.github.io/bootstrap/)
* [Redis](http://redis.io/)
* [MongoDB](http://www.mongodb.org/)
* [Less](http://lesscss.org/)
* [Jade](http://jade-lang.com/)

This mixtape is heavily influenced by these projects

* [Backbone Boilerplate](https://github.com/backbone-boilerplate/backbone-boilerplate)
* [Angular Fun](https://github.com/CaryLandholt/AngularFun)
* [angular-requirejs-seed](https://github.com/maxdow/angularjs-requirejs-seed)
* [Grails](http://grails.org/)

# Dependencies #  

* [Node](http://nodejs.org/)
* [Grunt](https://github.com/cowboy/grunt) `npm install -g grunt-cli` 
* [Bower](http://twitter.github.com/bower/) `npm install -g bower`

# Start your Application: #

#### Install the Node dependencies locally. ####
`npm install`

#### Install the Browser dependencies. ####
`bower install`

## These are the Grunt.js tasks that are available: ##

* `clean` Removes the 'dist' and 'test-reports' directories so that nothing lingers from previous builds.
* `jshint` Runs the JavaScript through JSHint to check for errors.
* `concat` Combines the almond require shim with the application code. 
* `cssmin` Concatenates and minifies the project's CSS into one file.
* `uglify` Takes the built and optimized require.js file and minifies it for filesize benefits.
* `runapp` This will start a Node.js Express server application on a specified port and serve up the application files from various project directories. 
* `runapp:development` Uses port 8080 to serve the JavaScript files directly from the app/ directory. Serves the compiled style.css contained in 'dist/assets/css' directory.
* `runapp:debug` Uses port 8880 to serve the 'human readable' concatenated JavaScript files and compiled CSS. 
* `runapp:release` Uses port 8000 to serve the concatenated and minified JavaScript and the compiled CSS. 
* `requirejs` Uses the requireJs optimizer to compile and concatenate the application's JavaScript.
* `less` Compiles the Less files into usable CSS. 
* `copy` Packages up the compiled code and static resources into a deployable directory structure. 
* `copy:release` Packages up the minified JavaScript code.
* `copy:debug` Packages up the readable JavaScript code. 
* `docco` Iterates throught the source files and creates annotated source code. 
* `jade` Uses grunt-contrib-jade to compile the jade templates. 
* `jade:templates` Compiles the client jade templates into html. 
* `jade:debug` Compiles the index.html for the debug package.
* `jade:release` Compiles the index.html for the release package.
* `karma` Kicks off the spectacular [Karma](http://karma-runner.github.io/0.8/index.html) test runner.

## And a couple of shortcut tasks to run various combinations: ##

* `grunt debug` 

  * Cleans the project 
  * Runs the application JavaScript through JSHint.
  * Compiles the Less into CSS
  * Compiles the JavaScript via RequireJS Optimizer.
  * Minifies the CSS.
  * Compiles the jade templates

* `grunt assemble`

  * Does everything in the 'debug' task
  * Concatenates the compiled JS with Almond.js 
  * Assembles and packages the application.