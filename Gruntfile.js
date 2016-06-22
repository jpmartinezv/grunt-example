
module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            js: {
                src: ['js/main.js', 'js/utils.js'],
                dest: 'dist/js/script.js',
            },
            css: {
                src: ['css/reset.css', 'css/theme.css'],
                dest: 'dist/css/styles.css',
            },
        },
        watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat'],
            },
            css: {
                files: ['css/**/*.css'],
                tasks: ['concat'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'watch']);
};
