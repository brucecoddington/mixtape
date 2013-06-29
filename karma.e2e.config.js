frameworks = ['ng-scenario'];

files = [
    "client/specs/e2e/**/*.spec.js"
];

proxies = {
    '/' : 'http://localhost:8080'
};

urlRoot = "__karma__";

browsers = ['Chrome', 'Firefox'];

plugins = ['karma-chrome-launcher', 'karma-firefox-launcher', 'karma-ng-scenario'];