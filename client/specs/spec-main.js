var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return (/\.spec\.js$/).test(file);
});

require.config({
  paths : {

    // jquery and plugins
    jquery : '/base/client/assets/js/components/jquery/jquery.min',

    // bootstrap
    bootstrap : '/base/client/assets/js/components/bootstrap/docs/assets/js/bootstrap.min',
    bsDatePicker: '/base/client/assets/js/components/bootstrap-datepicker/js/bootstrap-datepicker',
    bsSelect: '/base/client/assets/js/components/bootstrap-select/bootstrap-select',
    bsTimePicker: '/base/client/assets/js/components/bootstrap-timepicker/js/bootstrap-timepicker',
        
    modernizr: '/base/client/assets/js/components/modernizr/modernizr',

    // AngularJS libraries
    angular : '/base/client/assets/js/components/angular/angular',
    ngResource : '/base/client/assets/js/components/angular-resource/angular-resource.min',
    ngMocks : '/base/client/assets/js/lib/angular-mocks-1.1.5',
    ngScenario : '/base/client/assets/js/components/angular-scenario/angular-scenario',
    
    logger : '/base/client/assets/js/components/javascript-debug/ba-debug.min',

    lodash : '/base/client/assets/js/components/lodash/dist/lodash.min',
    moment : '/base/client/assets/js/components/moment.min',
    socketio : '/base/node_modules/socket.io/lib/socket.io',
    
    // //jasmine testing libraries
    mocha : '/base/node_modules/mocha/mocha',
    chai : '/base/node_modules/chai/chai',
    sinon : '/base/node_modules/sinon/lib/sinon',

    // templates
    templates : '/base/client/assets/templates',
    controllers : '/base/client/app/controllers',
    directives : '/base/client/app/directives',
    filters : '/base/client/app/filters',
    services : '/base/client/app/services',

    app: '/base/client/app/app',
    routes: '/base/client/app/routes'
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

    ngResource : {
        deps : ['angular']
    },

    ngMocks : {
      deps: ['angular']
    },

    ngScenario : {
      deps: ['angular']
    },

    bootstrap : {
      deps: ['jquery']
    },

    bsDatePicker : {
        deps: ['bootstrap']
    },

    bsSelect : {
        deps: ['bootstrap']
    },

    bsTimePicker : {
        deps: ['bootstrap']
    }
  },
  // ask requirejs to load these files (all our tests)
  deps: tests,
  // start test run, once requirejs is done
  callback: window.__karma__.start
});