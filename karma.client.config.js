frameworks = ['mocha', 'requirejs'];

files = [
    {pattern: 'client/assets/js/**/*.js', included: false},
    {pattern: 'node_modules/**/*.js', included: false},
    {pattern: 'client/app/**/*.js', included: false},
    {pattern: 'client/specs/unit/**/*.spec.js', included: false},

    "client/specs/spec-main.js"
];

browsers = ['Chrome', 'Firefox'];

exclude = [
    'config.js',
    'app/app.js' // excluding this so that spec-main.js is used to register RequireJS for unit tests
];

plugins = ['karma-mocha', 'karma-requirejs', 'karma-chrome-launcher', 'karma-firefox-launcher'];