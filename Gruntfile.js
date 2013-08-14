// This is the main application configuration file.  It is a Grunt
// configuration file, which you can learn more about here:
// https://github.com/cowboy/grunt/blob/master/docs/configuring.md
//
module.exports = function (grunt) {

    grunt.initConfig ({
        pkg : grunt.file.readJSON('package.json'),

        clientDistDir: 'client/dist',
        assetsDir: 'client/assets',
        componentDir: '<%= assetsDir %>/js/components',

        // The clean task ensures all files are removed from the dist/ directory so
        // that no files linger from previous builds.
        clean: ["dist", "<%= clientDistDir %>", "client/docs", "client/test-reports"],

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

        // The concatenate task is used here to merge the almond require/define
        // shim and the templates into the application code.  
        concat:{
            dist : {

                src : [
                    // jquery and plugins
                    '<%= componentDir %>/respond.js/respond.min.js',
                    '<%= componentDir %>/modernizr/modernizr.js',
                    '<%= componentDir %>/jquery/jquery.js',

                    // bootstrap
                    '<%= componentDir %>/bootstrap/dist/js/bootstrap.js',
                    '<%= componentDir %>/bootstrap-datepicker/js/bootstrap-datepicker.js',
                    '<%= componentDir %>/bootstrap-timepicker/js/bootstrap-timepicker.js',
                    

                    // AngularJS libraries
                    '<%= componentDir %>/angular/build/angular.js',
                    '<%= componentDir %>/angular/build/angular-resource.js',
                    '<%= componentDir %>/angular/build/angular-cookies.js',
                    '<%= componentDir %>/angular-strap/dist/angular-strap.js',

                    //AngularJS Library Dependencies
                    '<%= componentDir %>/bootstrap-select/bootstrap-select.js',
                    '<%= componentDir %>/angular-strap/vendor/bootstrap-datepicker.js',

                    // Angular UI libraries
                    '<%= componentDir %>/angular-ui-bootstrap/dist/ui-bootstrap-0.4.0.js',
                    '<%= componentDir %>/angular-ui-bootstrap/dist/ui-bootstrap-tpls-0.4.0.js',
                    '<%= componentDir %>/angular-ui-router/release/angular-ui-router.js',
                    
                    // logger
                    '<%= componentDir %>/javascript-debug/ba-debug.js',

                    // utilities
                    '<%= componentDir %>/lodash/dist/lodash.js',
                    '<%= componentDir %>/moment/moment.js',
                    '<%= componentDir %>/add-to-homescreen/src/add2home.js',
                    '<%= componentDir %>/responsive-tables/responsive-tables.js',

                    'client/src/**/*.js'

                ],
                
                dest: "<%= clientDistDir %>/debug/app.js"
            }
        },

        // This task uses the MinCSS Node.js project to take all your CSS files in
        // order and concatenate them into a single CSS file named style.css.  It
        // also minifies all the CSS as well.  This is named style.css, because we
        // only want to load one stylesheet in index.html.
        cssmin : { 
            combine : {
                files : {
                    "<%= clientDistDir %>/assets/css/style.css":[
                      "<%= clientDistDir %>/assets/css/style.css"
                    ]   
                }
            }
        },

        ngtemplates:  {
            dist:      {
                options:  {
                    base: 'client',
                    concat: 'dist',       //Appends the template file to the concat task
                    module: 'main'
                },
                src:      'client/assets/templates/**/*.html',
                dest:     'client/dist/assets/templates/templates.js'
            }
        },

        // Takes the built require.js file and minifies it for filesize benefits.
        uglify : {
            dist : {
                files: {
                    "<%= clientDistDir %>/release/app.js" : ["<%= clientDistDir %>/debug/app.js"]
                }
            }
        },

        // A task that runs in the background 'watching' for changes to code.
        watch : {
            options : {
                livereload: true
            },
            client: {
                files: [
                    'client/src/**/*.js', 
                    'client/test/**/*.js',
                    '<%= assetsDir %>/templates/**/*.html'
                ],
                tasks: ['assemble', 'karma:unit:run', 'karma:e2e:run']
            },
            server : {
                files: [
                    'test/**/*.js',
                    'app/**/*.js'
                ],
                tasks: ['mochacli']
            },
            views : {
                files: [
                    'app/views/**/*.jade',
                    '<%= assetsDir %>/less/**/*.less'
                ],
                tasks: ['assemble']
            }
        },

        // Compiles the Less files into the style.css file.
        less:{
            app:{
                options: {
                    paths: ["<%= assetsDir %>/less"]
                },
                files : {
                    '<%= clientDistDir %>/assets/css/style.css': '<%= assetsDir %>/less/style.less'
                }
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
                files: [{expand: true, cwd: '<%= assetsDir %>/css', src:['**'], dest:'<%= clientDistDir %>/assets/css'}]
            },
            release : {
                files: [
                    {expand: true, 
                        cwd: '<%= assetsDir %>', 
                        src:['img/**', 'templates/**', 'font/**'], 
                        dest: '<%= clientDistDir %>/<%= pkg.name %>/assets'},
                    {expand: true, 
                        cwd: '<%= clientDistDir %>/release', 
                        src:['app.min.js'], 
                        dest:'<%= clientDistDir %>/<%= pkg.name %>/app'},
                    {expand: true, 
                        cwd: '<%= clientDistDir %>/assets/css', 
                        src:['**'], 
                        dest: '<%= clientDistDir %>/<%= pkg.name %>/assets/css'},
                    {expand: true, 
                        cwd: '<%= clientDistDir %>/release', 
                        src:['index.html'], 
                        dest: '<%= clientDistDir %>/<%= pkg.name %>'}
                ]
            },
            debug : {
                files: [
                    {expand: true, 
                        cwd: '<%= clientDistDir %>/debug', 
                        src:['app.js'], 
                        dest: '<%= clientDistDir %>/<%= pkg.name %>-debug/app'},
                    {expand: true, 
                        cwd: '<%= assetsDir %>', 
                        src: ['img/**', 'templates/**', 'font/**'], 
                        dest: '<%= clientDistDir %>/<%= pkg.name %>-debug/assets'},
                    {expand: true, 
                        cwd: '<%= clientDistDir %>/assets/css', 
                        src: ['**'], 
                        dest: '<%= clientDistDir %>/<%= pkg.name %>-debug/assets/css'},
                    {expand: true, 
                        cwd: 'client', 
                        src: ['*'], 
                        dest: '<%= clientDistDir %>/<%= pkg.name %>-debug', 
                        filter: 'isFile'}
                ]
            }
        },

        // Compile the **jade** templates into html for deployment
        jade: {
            options : {
                pretty: true
            }, 
            index: {
                options: {
                    data: {
                        debug: true
                    }
                },
                files: {
                    'client/index.html' : ['app/views/application/index.jade']
                }
            },
            dist : {
                option: { 
                    data: {
                        debug: false
                    }
                }, 
                files: {
                    '<%= clientDistDir %>/release/index.html': ['app/views/application/index.jade']
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
            angular : {
                options: {
                    stdout: true,
                    stderr: true,
                    execOptions: {
                        cwd: '<%= assetsDir %>/js/components/angular'
                    }
                },
                command: 'npm install'
            },
            angularui : {
                options: {
                    stdout: true,
                    stderr: true,
                    execOptions: {
                        cwd: '<%= assetsDir %>/js/components/angular-ui-bootstrap'
                    }
                },
                command: 'npm install'
            }
        },

        hub: {
            angular: {
                src: ['<%= assetsDir %>/js/components/angular/Gruntfile.js'],
                tasks: ['package']
            }, 
            angularui: {
                src: ['<%= assetsDir %>/js/components/angular-ui-bootstrap/Gruntfile.js'],
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

    // **********************************************************************************************

    //Initialize a fresh project.  This will build any dependencies and run the default grunt task.
    grunt.registerTask("init", ['shell:bowerInstall', 'builddeps', 'assemble']);

    //Build dependencies of the project
    grunt.registerTask("builddeps", ['angular']);

    //Build angular.js and angular-ui
    grunt.registerTask("angular", ['shell:angular', 'shell:angularui', 'hub:angular', 'hub:angularui']);
    
    // The default task will remove all contents inside the dist/ folder, lint
    // all your code, precompile all the underscore templates into
    // dist/debug/templates.js, compile all the application code into
    // dist/debug/require.js, and then concatenate the require/define shim
    // almond.js and dist/debug/templates.js into the require.js file.
    
    grunt.registerTask("default", ['clean', 'jshint', 'less', 'cssmin', 'jade']);

    // Forks off the application server and runs the unit and e2e tests.
    // Test results stored in client/test-reports
    grunt.registerTask("test", ['assemble', 'runapp:test', 'karma:unitci', 'karma:e2eci']);

    // Task to package everything up for deployment
    grunt.registerTask("assemble", ['default', 'concat', 'uglify', 'copy:vendor', 'copy:debug', 'copy:release', 'docco']);

    // Task to kickoff the grunt build for development 
    // This will start both Karma test runners (unit, e2e) and the 'watch' task.
    grunt.registerTask("startup", ['shell:startup']);
};
