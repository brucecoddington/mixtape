// This is the main application configuration file.  It is a Grunt
// configuration file, which you can learn more about here:
// https://github.com/cowboy/grunt/blob/master/docs/configuring.md
//
module.exports = function (grunt) {

    grunt.initConfig ({
        pkg : grunt.file.readJSON('package.json'),

        // The clean task ensures all files are removed from the dist/ directory so
        // that no files linger from previous builds.
        clean: ["client/dist", "client/docs"],

        // The jshint option for scripturl is set to lax, because the anchor
        // override inside main.js needs to test for them so as to not accidentally
        // route.
        jshint:{
            options: {
                scripturl: true,
                laxcomma: true,
                nomen: false,
                globals : {
                    require: true
                }
            },
            code : {
                src: ["client/app/**/*.js"],
            },
            specs : {
                src: ["client/specs/**/*.js"],
                options: {
                    globals: {
                        define: true, 
                        beforeEach: true, 
                        afterEach: true, 
                        it: true, 
                        xit: true
                    },
                    expr: true
                }
            }
        },

        // The concatenate task is used here to merge the almond require/define
        // shim and the templates into the application code.  
        concat:{
            dist : {
                src : ["client/assets/js/components/almond/almond.js", "client/dist/debug/app.js"],
                dest: "client/dist/release/app.js"
            }
        },

        // This task uses the MinCSS Node.js project to take all your CSS files in
        // order and concatenate them into a single CSS file named style.css.  It
        // also minifies all the CSS as well.  This is named style.css, because we
        // only want to load one stylesheet in index.html.
        cssmin :{ 
            combine : {
                files : {
                    "client/dist/assets/css/style.css":[
                      "client/dist/assets/css/style.css"
                    ]   
                }
            }
        },

        // Takes the built require.js file and minifies it for filesize benefits.
        uglify : {
            dist : {
                files: {
                    "client/dist/release/app.js" : ["client/dist/debug/app.js"]
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
                    'client/app/**/*.js', 
                    'client/specs/**/*.js'
                ],
                tasks: ['assemble', 'karma:unit:run', 'karma:e2e:run']
            },
            server : {
                files: [
                    'specs/**/*.js',
                    'app/**/*.js'
                ],
                tasks: ['mochacli']
            },
            views : {
                files: [
                    'app/views/**/*.jade',
                    'client/assets/less/**/*.less', 
                    'client/assets/jade/**/*.jade'
                ],
                tasks: ['assemble']
            }
        },

        requirejs : {
            compile : {
                options: {
                    name: "app",
                    baseUrl: "client/app",
                    optimizeCss: 'none',
                    optimize: 'none',
                    mainConfigFile: "client/config.js",
                    out: "client/dist/debug/app.js",
                    insertRequire: ['app']
                }
            }            
        },

        // Compiles the Less files into the style.css file.
        less:{
            app:{
                options: {
                    paths: ["client/assets/less"]
                },
                files : {
                    'client/dist/assets/css/style.css': 'client/assets/less/style.less'
                }
            }
        },

        // Start the Karma test runner for the client tests. 
        karma : {
            options : {
                reporters: 'dots',
                background: true
            },
            unit : {
                configFile: 'karma.unit.config.js'
            },

            e2e : {
                configFile: 'karma.e2e.config.js',
                options : {
                    port: 9877,
                    runnerPort: 9101
                }
            }
        },

        // Run the server-side Mocha tests
        mochacli : {
            options : {
                reporter: 'spec',
                bail: true
            }, 
            all : ['specs/**/*.js']
        },

        // generate HTML5 offline app cache manifest
        manifest: {
            release: {
                options: {
                    cwd : 'client/',
                    network : ["*"],
                    timestamp : true
                },
                src: [
                    "assets/images/**"
                ],
                dest: "cache.manifest"
            }
        },

        copy: {
            vendor : {
                files: [{expand: true, cwd: 'client/assets/css', src:['**'], dest:'client/dist/assets/css'}]
            },
            release : {
                files: [
                    {expand: true, 
                        cwd: 'client/assets', 
                        src:['images/**', 'templates/**', 'js/**', 'font/**'], 
                        dest: 'client/dist/<%= pkg.name %>/assets'},
                    {expand: true, 
                        cwd: 'client/dist/release', 
                        src:['app.js'], 
                        dest:'client/dist/<%= pkg.name %>/app'},
                    {expand: true, 
                        cwd: 'client/dist/assets/css', 
                        src:['**'], 
                        dest: 'client/dist/<%= pkg.name %>/assets/css'},
                    {expand: true, 
                        cwd: 'client/dist/release', 
                        src:['index.html'], 
                        dest: 'client/dist/<%= pkg.name %>'}
                ]
            },
            debug : {
                files: [
                    {expand: true, 
                        cwd: 'client/app', 
                        src:['**'], 
                        dest: 'client/dist/<%= pkg.name %>-debug/app'},
                    {expand: true, 
                        cwd: 'client/assets', 
                        src: ['images/**', 'templates/**', 'js/**', 'font/**'], 
                        dest: 'client/dist/<%= pkg.name %>-debug/assets'},
                    {expand: true, 
                        cwd: 'client/dist/assets/css', 
                        src: ['**'], 
                        dest: 'client/dist/<%= pkg.name %>-debug/assets/css'},
                    {expand: true, 
                        cwd: 'client', 
                        src: ['*'], 
                        dest: 'client/dist/<%= pkg.name %>-debug', 
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
                    'client/dist/release/index.html': ['app/views/application/index.jade']
                }
            }, 
            templates : {
               files: [{
                   expand: true,
                   cwd: 'client/assets/jade',
                   src: ['**/*.jade'],
                   dest: 'client/assets/templates',
                   ext: '.html'
               }]
           }
        },

        // The **docco** task iterates through the `src` files and creates annotated source reports for them.
        docco: {
            client: {
                src: "client/app/**/*.js",
                dest: "client/docs/client"
            },

            grunt: {
                src: "Gruntfile.js",
                dest: "client/docs/grunt"
            }, 

            config: {
                src: "config/**/*.js", 
                dest: "client/docs/config"
            },
            app : {
                src: "app/**/*.js",
                dest: "client/docs/app"
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
                env: 'test'
            }
        }, 

        shell : {
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
            }
        }

    });

    // *********************************************************************************************

    // Load the necessary tasks
    grunt.loadTasks("grunt_tasks");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-jade");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-karma");
    grunt.loadNpmTasks("grunt-shell");
    grunt.loadNpmTasks("grunt-mocha-cli");

    // **********************************************************************************************

    // The default task will remove all contents inside the dist/ folder, lint
    // all your code, precompile all the underscore templates into
    // dist/debug/templates.js, compile all the application code into
    // dist/debug/require.js, and then concatenate the require/define shim
    // almond.js and dist/debug/templates.js into the require.js file.
    
    grunt.registerTask("default", ['clean', 'jshint', 'less', 'requirejs', 'cssmin', 'jade']);

    // Task to package everything up for deployment
    grunt.registerTask("assemble", ['default', 'concat', 'copy:vendor', 'copy:debug', 'copy:release']);

    // Task to kickoff the grunt build for development 
    // This will start both Karma test runners (unit, e2e) and the 'watch' task.
    grunt.registerTask("startup", ['shell:startup']);
};
