
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
        uglify: {
            js : {
                files: {
                    'dist/js/script.min.js': ['dist/js/script.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['concat', 'sass', 'uglify', 'watch']);
};
