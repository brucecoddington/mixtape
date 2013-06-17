module.exports = function ( grunt ) {
    
    var _ = grunt.util._;

    grunt.registerMultiTask("coffee", "Compile CoffeeScript files into JavaScript", function() {
        var options = grunt.helper("options", this);

        grunt.verbose.writeflags(options, "Options");

        var source = this.data.source;
        var destination = this.data.destination;

        var jsFile;
        var destFile;
        var sourceCode;
        var sourceCompiled;
        var helperOptions;

        grunt.file.recurse(source, function (abspath, rootdir, subdir, filename) {

            if (_(filename).endsWith('coffee')){
                helperOptions = _.extend({filename: filename}, options);
                sourceCode = grunt.file.read(abspath);

                grunt.verbose.writeln('file : ' + filename);

                jsFile = filename.replace('coffee', 'js');
                destFile = [destination, subdir, jsFile].join('/');
                sourceCompiled = grunt.helper("coffee", sourceCode, helperOptions);

                grunt.file.write(destFile, sourceCompiled);
            }
        });
    });	
}