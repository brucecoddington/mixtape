/*global require, console, jasmine, window*/
/*jslint nomen:false*/

var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return /\.spec\.js$/.test(file);
});

require.config({
  paths : {

    // jquery and plugins
    jquery : '/base/client/assets/js/components/jquery/jquery.min',

    // bootstrap
    bootstrap : '/base/client/assets/js/libs/bootstrap',
    modernizr: '/base/client/assets/js/components/modernizr/modernizr',

    // AngularJS libraries
    angular : '/base/client/assets/js/components/angular/angular',
    logger : '/base/client/assets/js/components/javascript-debug/ba-debug.min',

    lodash : '/base/client/assets/js/components/lodash/lodash.min',
    moment : '/base/client/assets/js/components/moment.min',
    socketio : '/base/node_modules/socket.io/lib/socket.io',
    
    // //jasmine testing libraries
    mocha : '/base/node_modules/mocha/mocha',
    chai : '/base/node_modules/chai/chai',
    sinon : '/base/node_modules/sinon/lib/sinon',

    // templates
    templates : '/base/client/assets/templates'
  },

  shim :  {
    modernizr: {
      exports: 'Modernizr'
    },

    lodash: {
      exports: '_'
    },

    moment : {
      exports : 'moment'
    },

    // Testing dependencies
    sinon : {
      exports : 'sinon'
    },

    mocha : {
      exports: 'mocha'
    }, 

    logger : {
      exports: 'debug'
    },

    angular : {
      exports: 'angular'
    },

    bootstrap : {
      deps: ['jquery']
    }
  },
  // ask requirejs to load these files (all our tests)
  deps: tests,
  // start test run, once requirejs is done
  callback: window.__karma__.start
});