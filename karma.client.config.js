frameworks = ['mocha', 'requirejs', 'ng-scenario'];

files = [
    {pattern: 'client/assets/js/**/*.js', included: false},
    {pattern: 'node_modules/**/*.js', included: false},
    {pattern: 'client/app/**/*.js', included: false},
    {pattern: 'client/specs/**/*.spec.js', included: false},

    "client/specs/spec-main.js"
];

browsers = ['Chrome', 'Firefox'];

exclude = [
    'config.js',
    'app/app.js'
];

plugins = ['karma-mocha', 'karma-requirejs', 'karma-chrome-launcher', 'karma-firefox-launcher', 'karma-ng-scenario'];