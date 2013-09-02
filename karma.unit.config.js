module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      '../node_modules/chai/chai.js',
      '../node_modules/sinon/lib/sinon.js',

      'dist/assets/js/app.js',
      'assets/js/components/angular-mocks/angular-mocks.js',
      'test/util/state.mock.js',
      
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
      'karma-jasmine', 
      'karma-chrome-launcher', 
      'karma-firefox-launcher', 
      'karma-ng-html2js-preprocessor'
    ]

  });
};