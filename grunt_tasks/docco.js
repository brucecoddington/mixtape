/*global module */

module.exports = function(grunt) {

    var _ = grunt.util._,
        createArg = function (arg, value) {
            return ["--", arg, "=", value].join('');
        };

    grunt.registerMultiTask('docco', 'Docco processor.', function() {
        var srcFiles = grunt.file.expandFiles(this.data.src);

        var addArgs = [];
        var dest = this.data.dest;
        if (dest !== undefined) {
            addArgs.push(createArg('dest', dest));
        }

        var css = this.file.css;
        if (css !== undefined) {
            addArgs.push(createArg('css', css));
        }

        var template = this.data.template;
        if (template !== undefined) {
            addArgs.push(createArg('template', template));
        }

        var args;

        _.each(srcFiles, function (file) {
            args = [file].concat(addArgs);
            var argProp = 'docco-single.' + file + '.args';
            grunt.config(argProp, args);
        });

        grunt.task.run('docco-single');

    });

    grunt.registerMultiTask('docco-single', 'Run individual file', function () {
        var done = this.async(),
            args = this.data.args;

        return grunt.util.spawn({cmd: "docco", args: args}, function(err, result, code){
            done();                        
        });
    });
};