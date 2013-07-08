/*global require*/

var requirejs = {
    baseUrl : 'app',

    paths : {

        // jquery and plugins
        jquery : '../assets/js/components/jquery/jquery.min',

        // bootstrap
        bootstrap : '../assets/js/components/bootstrap/docs/assets/js/bootstrap.min',
        bsDatePicker: '../assets/js/components/bootstrap-datepicker/js/bootstrap-datepicker',
        bsSelect: '../assets/js/components/bootstrap-select/bootstrap-select',
        bsTimePicker: '../assets/js/components/bootstrap-timepicker/js/bootstrap-timepicker',
        
        modernizr: '../assets/js/components/modernizr/modernizr',

        // AngularJS libraries
        angular : '../assets/js/components/angular/build/angular',
        ngResource : '../assets/js/components/angular-resource/angular-resource.min',
        ngStrap : '../assets/js/components/angular-strap/dist/angular-strap',
        
        logger : '../assets/js/components/javascript-debug/ba-debug.min',

        lodash : '../assets/js/components/lodash/dist/lodash.min',
        moment : '../assets/js/components/moment.min',
        socketio : '../../node_modules/socket.io/lib/socket.io',
        
        // templates
        templates : '../assets/templates'
    },

    shim :  {
        app : {
            deps : ['ngResource', 'ngStrap', 'modernizr']
        },

        modernizr: {
            exports: 'Modernizr'
        },

        lodash: {
            exports: '_'
        },

        moment : {
            exports : 'moment'
        },

        logger : {
            exports: 'debug'
        },

        angular : {
            exports: 'angular'
        },

        ngResource : {
            deps : ['angular'],
            exports: 'angular'
        },

        bootstrap : {
            deps: ['jquery']
        },

        ngStrap : {
            deps: ['bootstrap', 'angular', 'bsDatePicker', 'bsSelect', 'bsTimePicker'],
            exports: 'angular'
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

    waitSeconds : 15,
    jquery : '1.10.1'
};
