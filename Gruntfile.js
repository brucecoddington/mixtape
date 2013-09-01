// This is the main application configuration file.  It is a Grunt
// configuration file, which you can learn more about here:
// https://github.com/cowboy/grunt/blob/master/docs/configuring.md
//
module.exports = function (grunt) {

  grunt.initConfig ({
    pkg : grunt.file.readJSON('package.json'),

    assets: 'client/assets',
    components: '<%= assets %>/js/components',
    clientdist: 'client/dist',

        // The clean task ensures all files are removed from the dist/ directory so
        // that no files linger from previous builds.
        clean: ["dist", "<%= clientdist %>", "client/docs", "client/test-reports"],

        // The jshint option for scripturl is set to lax, because the anchor
        // override inside main.js needs to test for them so as to not accidentally
        // route.
        jshint:{
          options: {
            scripturl: true,
            laxcomma: true,
            nomen: false,
            globals : {
              angular: true,
              chai: true,
              describe: true,
              beforeEach: true,
              afterEach: true,
              it: true,
              xit: true
            }
          },
          code : {
            src: ["client/src/**/*.js"]
          },
          specs : {
            src: ["client/test/**/*.js"],
            options: {
              expr: true
            }
          }
        },

        // Compiles the Less files into the style.css file.
        less:{
          app:{
            options: {
              paths: ["<%= assets %>/less"]
            },
            files : {
              '<%= clientdist %>/assets/css/style.css': '<%= assets %>/less/style.less'
            }
          }
        },

        // The concatenate task is used here to merge the almond require/define
        // shim and the templates into the application code.
        concat:{
          js : {
            src : [
              // Shims
              '<%= components %>/respond.js/respond.min.js',
              '<%= components %>/modernizr/modernizr.js',

              // jQuery and Related
              '<%= components %>/jquery/jquery.js',
              '<%= components %>/hammerjs/dist/hammer.js',

              // bootstrap
              '<%= components %>/bootstrap/dist/js/bootstrap.js',
              '<%= components %>/bootstrap-datepicker/js/bootstrap-datepicker.js',
              '<%= components %>/bootstrap-timepicker/js/bootstrap-timepicker.js',

              // AngularJS libraries
              '<%= components %>/angular/angular.js',
              '<%= components %>/angular-strap/dist/angular-strap.js',

              //AngularJS Library Dependencies
              '<%= components %>/bootstrap-select/bootstrap-select.js',
              '<%= components %>/angular-strap/vendor/bootstrap-datepicker.js',

              // Angular UI libraries
              '<%= components %>/angular-ui-bootstrap/dist/ui-bootstrap-0.4.0.js',
              '<%= components %>/angular-ui-bootstrap/dist/ui-bootstrap-tpls-0.4.0.js',
              '<%= components %>/angular-ui-router/release/angular-ui-router.js',
              '<%= components %>/angular-ui-utils/components/angular-ui-docs/build/ui-utils.js',

              // logger
              '<%= components %>/javascript-debug/ba-debug.js',

              // utilities
              '<%= components %>/lodash/dist/lodash.js',
              '<%= components %>/moment/moment.js',
              '<%= components %>/add-to-homescreen/src/add2home.js',
              '<%= components %>/faker/Faker.js',

              'client/src/**/*.js'

              ],

              dest: "<%= clientdist %>/assets/js/app.js"
            },
            css : {
              src : [
              "<%= clientdist %>/assets/css/style.css",
              "<%= components %>/add-to-homescreen/style/add2home.css"
              ],
              dest: "<%= clientdist %>/assets/css/style.css"
            }
          },

        // This task uses the MinCSS Node.js project to take all your CSS files in
        // order and concatenate them into a single CSS file named style.css.  It
        // also minifies all the CSS as well.  This is named style.css, because we
        // only want to load one stylesheet in index.html.
        cssmin :{
          all : {
            files : {
              "<%= clientdist %>/assets/css/style.min.css": ["<%= clientdist %>/assets/css/style.css"]
            }
          }
        },

        ngtemplates:  {
          all:      {
            options:  {
              base: 'client',
                    concat: 'js',       //Appends the template file to the concat task
                    module: 'main'
                  },
                  src:      '<%= assets %>/templates/**/*.html',
                  dest:     '<%= clientdist %>/assets/templates/templates.js'
                }
              },

        // Takes the built require.js file and minifies it for filesize benefits.
        uglify : {
          dist : {
            files: {
              "<%= clientdist %>/assets/js/app.min.js" : ["<%= clientdist %>/assets/js/app.js"]
            }
          }
        },

        // A task that runs in the background 'watching' for changes to code.
        watch : {
          options : {
            livereload: true,
            atBegin: true
          },
          development: {
            files: [
            'client/src/**/*.js',
            'client/test/**/*.js',
            '<%= assets %>/templates/**/*.html',
            '<%= assets %>/less/**/*.less',
            'app/views/**/*.jade'
            ],
            tasks: ['development', 'karma:unit:run', 'karma:e2e:run']
          },
          debug: {
            files: [
            'client/src/**/*.js',
            'client/test/**/*.js',
            '<%= assets %>/templates/**/*.html',
            '<%= assets %>/less/**/*.less',
            'app/views/**/*.jade'
            ],
            tasks: ['debug', 'karma:unit:run', 'karma:e2e:run']
          },
          production: {
            files: [
            'client/src/**/*.js',
            'client/test/**/*.js',
            '<%= assets %>/templates/**/*.html',
            '<%= assets %>/less/**/*.less',
            'app/views/**/*.jade'
            ],
            tasks: ['production', 'karma:unit:run', 'karma:e2e:run']
          },
          server : {
            files: [
            'test/**/*.js',
            'app/**/*.js'
            ],
            tasks: ['mochacli']
          }
        },

        // Start the Karma test runner for the client tests.
        karma : {
          unit : {
            reporters: 'dots',
            configFile: 'karma.unit.config.js',
            options: {
              background: true
            }
          },

          e2e : {
            reporters: 'dots',
            configFile: 'karma.e2e.config.js',
            options : {
              port: 9877,
              runnerPort: 9101,
              background: true
            }
          },

          unitci : {
            configFile: 'karma.ci.unit.config.js'
          },

          e2eci : {
            configFile: 'karma.ci.e2e.config.js'
          }
        },

        // Run the server-side Mocha tests
        mochacli : {
          options : {
            reporter: 'spec',
            bail: true
          },
          all : ['test/**/*.js']
        },

        copy: {
          vendor : {
            files: [
            {
              expand: true,
              cwd: '<%= components %>/font-awesome/font',
              src:['**'],
              dest:'<%= clientdist %>/assets/font'
            },
            {
              expand: true,
              cwd: '<%= components %>/dynatree/src/skin',
              src:['**.gif'],
              dest:'<%= clientdist %>/assets/img/dynatree'
            }
            ]
          },
          development : {
            files: [{
              expand: true,
              cwd: '<%= assets %>',
              src: ['img/**', 'font/**'],
              dest: '<%= clientdist %>/assets'
            }
            ]
          },
          debug : {
            files: [{
              expand: true,
              cwd: '<%= clientdist %>/assets',
              src: ['css/style.css', 'font/**', 'img/**', 'js/app.js'],
              dest: '<%= clientdist %>/<%= pkg.name %>-debug/assets'
            },
            {
              expand: true,
              cwd: '<%= clientdist %>/assets/html',
              src:['index.html'],
              dest: '<%= clientdist %>/<%= pkg.name %>-debug'
            }
            ]
          },
          production : {
            files: [
            {
              expand: true,
              cwd: '<%= clientdist %>/assets',
              src: ['css/style.min.css', 'font/**', 'img/**', 'js/app.min.js'],
              dest: '<%= clientdist %>/<%= pkg.name %>/assets'
            },
            {
              src: '<%= clientdist %>/assets/html/index.min.html',
              dest:'<%= clientdist %>/<%= pkg.name %>/index.html'
            }
            ]
          }
        },

        // Compile the **jade** templates into html for deployment
        jade: {
          debug: {
            options: {
              pretty: true,
              data: {
                debug: true,
                env: 'debug'
              }
            },
            files: {
              '<%= clientdist %>/assets/html/index.html' : ['app/views/application/index.jade']
            }
          },
          production : {
            options: {
              data: {
                debug: false,
                env: 'production'
              }
            },
            files: {
              '<%= clientdist %>/assets/html/index.min.html' : ['app/views/application/index.jade']
            }
          }
        },

        // The **docco** task iterates through the `src` files and creates annotated source reports for them.
        docco: {
          options: {
            layout : "parallel"
          },
          client: {
            options: {
              output : "dist/docs/client/"
            },
            src: "client/src/**/*.js"
          },
          app: {
            options: {
              output : "dist/docs/app/"
            },
            src: "app/**/*.js"
          },
          grunt: {
            options: {
              output : "dist/docs/docs/grunt/"
            },
            src: "Gruntfile.js"
          },
          config: {
            options: {
              output : "dist/docs/config/"
            },
            src: "config/**/*.js"
          }
        },

        // The **runapp** task will run the `server.js` in a `nodemon` and watch the server files for changes
        runapp: {
          development : {
            env: 'development'
          },

          debug : {
            env: 'debug'
          },

          production : {
            env: 'production'
          },

          test : {
            options: {
              dieWithParent: true
            },
            env: 'development'
          }
        },

        runappci: {
          all :{
            env: 'development'
          }
        },

        shell : {
          bowerInstall : {
            options: {
              stdout: true,
              stderr: true
            },
            command: 'bower install'
          },
          startup : {
            options: {
              stdout: true,
              stderror: true
            },
            command: [
            'grunt karma:unit',
            'grunt karma:e2e',
            'grunt watch'
            ].join('&')
          },
          angularuibootstrap : {
            options: {
              stdout: true,
              stderr: true,
              execOptions: {
                cwd: '<%= components %>/angular-ui-bootstrap'
              }
            },
            command: 'npm install'
          },
          angularuiutils : {
            options: {
              stdout: true,
              stderr: true,
              execOptions: {
                cwd: '<%= components %>/angular-ui-utils'
              }
            },
            command: 'npm install'
          }

        },

        hub: {
          angularuibootstrap: {
            src: ['<%= components %>/angular-ui-bootstrap/Gruntfile.js'],
            tasks: ['build']
          },
          angularuiutils: {
            src: ['<%= components %>/angular-ui-utils/gruntFile.js'],
            tasks: ['build']
          }
        }

      });

    // *********************************************************************************************

    grunt.loadNpmTasks('grunt-hub');
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-jade");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mixtape-run-app');
    grunt.loadNpmTasks("grunt-karma");
    grunt.loadNpmTasks("grunt-shell");
    grunt.loadNpmTasks("grunt-mocha-cli");
    grunt.loadNpmTasks('grunt-docco-multi');
    grunt.loadNpmTasks('grunt-angular-templates');

    // **********************************************************************************************

    //Initialize a fresh project.  This will build any dependencies and run the default grunt task.
    grunt.registerTask("init", ['shell:bowerInstall', 'builddeps', 'production']);

    //Build dependencies of the project
    grunt.registerTask("builddeps", ['angularuibootstrap', 'angularuiutils']);

    //Build angular-ui bootstrap
    grunt.registerTask("angularuibootstrap", ['shell:angularuibootstrap', 'hub:angularuibootstrap']);

    //Build angular-ui utils
    grunt.registerTask("angularuiutils", ['shell:angularuiutils', 'hub:angularuiutils']);

    // The default task will remove all contents inside the dist/ folder, lint
    // all your code, precompile all the underscore templates into
    // dist/debug/templates.js, compile all the application code into
    // dist/debug/require.js, and then concatenate the require/define shim
    // almond.js and dist/debug/templates.js into the require.js file.

    grunt.registerTask("default", ['clean']);

    // Task to compile everything in development mode
    grunt.registerTask("development", ['default', 'jshint', 'less', 'concat:css', 'copy:vendor', 'copy:development']);
    grunt.registerTask("debug", ['development', 'ngtemplates', 'concat:js', 'jade:debug', 'copy:debug']);
    grunt.registerTask("production", ['debug', 'cssmin', 'uglify', 'jade:production', 'copy:production']);

    // Forks off the application server and runs the unit and e2e tests.
    // Test results stored in client/test-reports
    grunt.registerTask("test", ['production', 'runapp:test', 'karma:unitci', 'karma:e2eci']);

    // Task to kickoff the grunt build for development
    // This will start both Karma test runners (unit, e2e) and the 'watch' task.
    grunt.registerTask("startup", ['shell:startup']);
  };
