module.exports = function(config) {
    config.set({
        frameworks: ['mocha'],

        files: [
        'node_modules/mocha/mocha.js',
        'node_modules/chai/chai.js',
        'node_modules/sinon/lib/sinon.js',

        'client/app/app.js',
        'client/specs/unit/**/*.spec.js'
        ],

        browsers: ['Chrome', 'Firefox'],

        plugins: ['karma-mocha', 'karma-chrome-launcher', 'karma-firefox-launcher']
    });
};
