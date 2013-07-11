module.exports = function(config) {
    config.set({

        singleRun: true,
        
        reporters: ['progress', 'junit'],
        
        junitReporter: {
            outputFile: 'test-reports/unit/test-results.xml',
            suite: 'unit'
        },

        frameworks: ['mocha'],

            files: [
              '../node_modules/chai/chai.js',
              '../node_modules/sinon/lib/sinon.js',

            'dist/debug/app.js',
            'assets/js/components/angular/build/angular-mocks.js',
            
            'test/unit/**/*.spec.js', 

            'assets/templates/**/*.html'
        ],

        basePath : 'client',

        // generate js files from html templates
        preprocessors : {
          'assets/templates/**/*.html': 'html2js'
        },

        browsers: ['Chrome', 'Firefox'],

        plugins: [
            'karma-mocha',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ng-html2js-preprocessor',
            'karma-junit-reporter'
        ]
    });
};
