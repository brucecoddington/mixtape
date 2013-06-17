# Locomotive/Express application boilerplate with Angular/RequireJS client application. #

# Getting Started #

In order to use the template you will need to install node.js on your machine. Depending on your operating system, Node has different one click installs that you can choose. 

## Install [Node](http://nodejs.org/) ##

Note:  On Windows machines, you need to add an Environment Variable to your path that points to Node Home.  Typically it gets installed to C:\Program Files\nodejs (or the associated Program Files x86 folder for 64 bit OS). 

After you have Node and npm up and running, we need to have npm install the global tools we will need. Open shell/cmd prompt :

## Install [Grunt](https://github.com/cowboy/grunt) ##
`npm install -g grunt` 

## Install [Bower](http://twitter.github.com/bower/) ##
`npm install -g bower`

## Install [PhantomJS](http://phantomjs.org/download.html) ##

Windows users: don't forget to put the executable on your path.

# Start your Prototype: #

#### Install the Node dependencies locally. ####
`npm install`

#### Install the Browser dependencies. ####
`bower install`

## These are the individual Grunt.js tasks that are available: ##

#### `clean` ####
* Removes the 'dist' and 'test-reports' directories so that nothing lingers from previous builds.

#### `lint` ####
* Runs the JavaScript through JSHint to check for errors.

#### `concat` ####
* Combines the almond require shim with the application code. 

#### `mincss` ####
* Concatenates and minifies the project's CSS into one file.

#### `min` ####
* Takes the built and optimized require.js file and minifies it for filesize benefits.

#### `runapp` ####
* This will start a Node.js Express server application on a specified port and serve up the application files from various project directories. 

#### `runapp:development` ####
* Uses port 8080 to serve the JavaScript files directly from the app/ directory. Serves the compiled style.css contained in 'dist/assets/css' directory.

#### `runapp:debug` ####
* Uses port 8880 to serve the 'human readable' concatenated JavaScript files and compiled CSS. 

#### `runapp:release` ####
* Uses port 8000 to serve the concatenated and minified JavaScript and the compiled CSS. 

#### `runapp:mocha` ####
* Uses port 8888 to serve the Mocha test runner.

#### `requirejs` ####
* Uses the requireJs optimizer to compile and concatenate the application's JavaScript.

#### `less` ####
* Compiles the Less files into usable CSS. 

#### `jscoverage` ####
* Instruments the application JavaScript to provide test coverage statistics.

#### `coffee` ####
* Compiles the .coffee files into their respective JavaScript files.

#### `copy` ####
* Packages up the compiled code and static resources into a deployable directory structure. 

#### `copy:release` ####
* Packages up the minified JavaScript code.

#### `copy:debug` ####
* Packages up the readable JavaScript code. 

#### `docco` ####
* Iterates throught the source files and creates annotated source code. 

#### `jade` ####
* Uses grunt-contrib-jade to compile the jade templates. 

#### `jade:templates` ####
* Compiles the client jade templates into html. 

#### `jade:debug` ####
* Compiles the index.html for the debug package.

#### `jade:release` ####
* Compiles the index.html for the release package.

#### `jade:mocha` ####
* Compiles the Mocha test runner.

## Now you have these shortcut tasks to run various combinations: ##

#### `grunt debug` ####
* Cleans the project 
* Runs the application JavaScript through JSHint.
* Compiles the JavaScript via RequireJS Optimizer.
* Compiles the Less into CSS
* Minifies the CSS.
* Runs the JasmineBDD specs and displays the results.
* Creates the Docco documentation.

#### `grunt assemble` ####
* Does everything in the 'debug' task
* Minifies the optimized JavaScript
* Assembles and packages the application.
