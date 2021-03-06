module.exports = function (grunt){
    return {
        css: {
            files: ['src/sass/**/*.scss'],
            tasks: ['css']
        },
        js: {
            files: ['src/javascript/**/*.js'],
            tasks: ['test', 'js']
        },
        options: {
            spawn: false,
            interrupt: true,
            debounceDelay: 250,
            livereload: {
                key: grunt.file.read('node_modules/grunt-contrib-connect/tasks/certs/server.key'),
                cert: grunt.file.read('node_modules/grunt-contrib-connect/tasks/certs/server.crt')
            },
        }
    };
};
