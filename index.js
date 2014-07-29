module.exports = function(grunt) {
    grunt.registerMultiTask('angular-htmlify', 'Annotate AngularJS scripts for minification', function () {
        var params = {};
        if (this.data.customPrefixes){
            params.customPrefixes = this.data.customPrefixes
        }
        var htmlify = require('angular-html5')(params);
        this.files.forEach(function (file) {
            var contents = file.src
                .map(grunt.file.read)
                .map(function(buffer){
                    var string = buffer.toString();
                    if(htmlify.test(string)){
                        grunt.log.writeln('Compile File: ', file.dest);
                        string = htmlify.replace(string);
                    }else{
                        grunt.log.writeln('Not Compiled File: ', file.dest);
                    }
                    return string
                }).join('');
            grunt.file.write(file.dest, contents);
        });
    });
};