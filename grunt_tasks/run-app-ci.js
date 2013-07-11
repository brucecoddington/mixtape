module.exports = function (grunt) {

    //Welcome to the thunderdome
    grunt.registerMultiTask('runappci', 'Run the node server in a daemon with an environment', function () {
        var _ = require('underscore'),
            fork = require('child_process').fork,
            // keep alive (ctrl-c to stop)
            done = this.async();

        global.runappciChild = fork('server.js', {
            env: _.extend(process.env, {NODE_ENV: this.data.env})
        });

        // A helper function to shut down the child.
        global.runappciChild.shutdown = function () {
            // Get rid of the exit listener since this is a planned exit.
            console.log('Terminating runapp server');
            this.kill("SIGTERM");
        };

        // SIGTERM AND SIGINT will trigger the exit event.
        process.once("SIGTERM", function () {
            process.exit(0);
        });
        process.once("SIGINT", function () {
            process.exit(0);
        });

        // And the exit event shuts down the child.
        process.once("exit", function () {
            global.runappciChild.shutdown();
        });
         
        //Preserve the exception when something goes wrong
        process.once("uncaughtException", function (error) {
            // If this was the last of the listeners, then shut down the child and rethrow.
            if (process.listeners("uncaughtException").length === 0) {
                global.runappciChild.shutdown();
                throw error;
            }
        });

        //Wait for the server to tell us that it's ready to serve requests.
        global.runappciChild.on('message', function(data) {
            if (data.status === 'ready') {
                done();
            }
        });

       
        
    });
};
