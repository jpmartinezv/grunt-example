
module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            js: {
                src: ['js/main.js', 'js/utils.js'],
                dest: 'dist/js/script.js',
            },
        },
        sass: {
            css: {
                files: {
                    'dist/css/theme.css': 'sass/theme.sass',
                }
            }
        },
        watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['concat', 'sass', 'watch']);
};
