frameworks = ['ng-scenario'];

files = [
    "client/dist/release/app.js",
    "client/specs/e2e/**/*.spec.js"
];

proxies = {
    '/' : 'http://localhost:8880'
};

urlRoot = "__karma__";

browsers = ['Chrome', 'Firefox'];

plugins = ['karma-chrome-launcher', 'karma-firefox-launcher', 'karma-ng-scenario'];