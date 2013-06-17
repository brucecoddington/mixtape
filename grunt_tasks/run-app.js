module.exports = function (grunt) {

    grunt.registerMultiTask('runapp', 'Run the node server in a daemon with an environment', function () {
        var exec = require('child_process').exec,
            env = this.data.env,
            cmd = ['NODE_ENV=', env, ' nodemon ./server.js'].join(''),

            // keep alive (ctrl-c to stop)
            done = this.async();

        var child = exec(cmd, {
            //Increase the max buffer of stdout, the default is
            //insufficient for debugging and development.  If the
            //child process quits for seemingly no reason, this
            //is probably what killed it.

            //Setting the buffer to 50MB
            maxBuffer: 50000*1024

        }, function (error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('Grunt NPM Exec Error: ' + error);
            }
        });

        child.stdout.on('data', function (data) {
            console.log('%s', data);
        });

        child.stderr.on('data', function (data) {
            console.log('%s', data);
        });
    });
};