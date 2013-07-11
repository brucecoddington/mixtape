module.exports = function(config) {
    config.set({

        singleRun: true,
        
        reporters: ['progress', 'junit'],
        
        junitReporter: {
            outputFile: 'client/test-reports/e2e/test-results.xml',
            suite: 'e2e'
        },

        frameworks: ['ng-scenario'],

        files: [
            "client/test/e2e/**/*.spec.js"
        ],

        proxies: {
            '/' : 'http://localhost:8080'
        },

        urlRoot: "__karma__",

        browsers: ['Chrome', 'Firefox'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ng-scenario',
            'karma-junit-reporter'
        ]
    });
};
