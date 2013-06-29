frameworks = ['mocha', 'requirejs', 'ng-scenario'];

files = [
    "client/assets/js/components/angular-scenario/angular-scenario.js",
    'client/specs/e2e/**/*.spec.js'
];

singleRun = true;

browsers = ['Chrome', 'Firefox'];

plugins = ['karma-mocha', 'karma-requirejs', 'karma-chrome-launcher', 'karma-firefox-launcher', 'karma-ng-scenario'];