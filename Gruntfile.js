module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        copy: {
            bootstrapfonts: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist/fonts',
                src: '*',
                dest: 'web/fonts'
            },
            bootstrapjs: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist/js',
                src: 'bootstrap.min.js',
                dest: 'web/js/vendor'
            },
            images: {
                expand: true,
                cwd: 'src/MyApp/Resources/assets/img',
                src: '**',
                dest: 'web/img'
            }
        },
        concat: {
            bootstrapcss: {
                options: {
                    sourceMap: true
                },
                src: [
                    'node_modules/bootstrap/dist/css/bootstrap.min.css',
                    'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
                ],
                dest: 'web/css/bootstrap.css'
            },
            concatscss: {
                src: [
                    'src/MyApp/Resources/assets/scss/*.scss',
                    '!src/MyApp/Resources/assets/scss/style.scss'
                ],
                dest:'src/MyApp/Resources/assets/scss/style.scss'
            },
            concatjs: {
                src: [
                    'src/MyApp/Resources/assets/js/*.js'
                ],
                dest:'web/js/main.js'
            }
        },
        sass: {
            css: {
                options: {
                    style: 'expanded',
                    sourcemap: 'inline',
                    trace: true
                },
                src: 'src/MyApp/Resources/assets/scss/style.scss',
                dest:'web/css/style.css'
            }
        },
        watch: {
            css: {
                files: ['src/MyApp/Resources/assets/scss/*.scss'],
                tasks: ['concatscss','scsstocss']
            },
            js: {
                files: ['src/MyApp/Resources/assets/js/*.js'],
                tasks: ['concatjs']
            }
        }
    });

    grunt.registerTask('bootstrapfonts', ['copy:bootstrapfonts']);
    grunt.registerTask('bootstrapjs', ['copy:bootstrapjs']);
    grunt.registerTask('copyimages', ['copy:images']);

    grunt.registerTask('bootstrapcss', ['concat:bootstrapcss']);
    grunt.registerTask('concatscss', ['concat:concatscss']);
    grunt.registerTask('concatjs', ['concat:concatjs']);

    grunt.registerTask('scsstocss', ['sass:css']);

    grunt.registerTask('watchcss', ['watch:css']);
    grunt.registerTask('watchjs', ['watch:js']);
    grunt.registerTask('watchall', ['watchcss', 'watchjs']);

    grunt.registerTask('default', ['bootstrapfonts', 'bootstrapjs', 'bootstrapcss', 'concatscss', 'concatjs', 'scsstocss', 'copyimages']);


//suoptimaizinti pagal kai pprasyta webe

    //Concat and compile
    //Instead of concatenating the files, just @import them into another .sass file eg. main.scss.

};




