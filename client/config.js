/*global require*/

var requirejs = {
    baseUrl : 'app',

    paths : {

        // jquery and plugins
        jquery : '../assets/js/components/jquery/jquery.min',
        placeholder : '../assets/js/libs/jquery.placeholder.min',

        // bootstrap
        bootstrap : '../assets/js/components/bootstrap/docs/assets/js/bootstrap.min',
        bsDatePicker: '../assets/js/components/bootstrap-datepicker/js/bootstrap-datepicker',
        bsSelect: '../assets/js/components/bootstrap-select/bootstrap-select',
        bsTimePicker: '../assets/js/components/bootstrap-timepicker/js/bootstrap-timepicker',

        retina : '../assets/js/libs/retina',
        modernizr: '../assets/js/components/modernizr/modernizr',

        // AngularJS libraries
        angular : '../assets/js/components/angular/angular',
        ngResource : '../assets/js/components/angular-resource/angular-resource.min',
        
        logger : '../assets/js/components/javascript-debug/ba-debug.min',

        lodash : '../assets/js/components/lodash/dist/lodash.min',
        moment : '../assets/js/components/moment.min',
        socketio : '../../node_modules/socket.io/lib/socket.io',
        
        // //jasmine testing libraries
        mocha : '../../node_modules/mocha/mocha',
        chai : '../../node_modules/chai/chai',
        sinon : '../../node_modules/sinon/lib/sinon',

        // templates
        templates : '../assets/templates',

        // mocha spec directory
        specs : '../specs'
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

        bootstrap : {
            deps: ['jquery']
        },

        placeholder : {
            deps: ['jquery']
        }
    },

    waitSeconds : 15,
    jquery : '1.10.1'
};