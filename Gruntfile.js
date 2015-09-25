module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        bootstrapSrc: 'node_modules/bootstrap/dist/',
        web: 'web/',
        appAssets: 'src/MyApp/Resources/assets/',

        copy: {
            bootstrapFonts: {
                expand: true,
                cwd: '<%= bootstrapSrc %>fonts',
                src: '*',
                dest: '<%= web %>fonts'
            },
            bootstrapJs: {
                expand: true,
                cwd: '<%= bootstrapSrc %>js',
                src: 'bootstrap.min.js',
                dest: '<%= web %>js'
            },
            images: {
                expand: true,
                cwd: '<%= appAssets %>img',
                src: '**',
                dest: '<%= web %>img'
            }
        },
        concat: {
            bootstrapCss: {
                options: {
                    sourceMap: true,
                    separator: '\n\n'
                },
                src: [
                    '<%= bootstrapSrc %>css/bootstrap.min.css',
                    '<%= bootstrapSrc %>css/bootstrap-theme.min.css'
                ],
                dest: '<%= web %>css/bootstrap.css'
            },
            concatJs: {
                options: {
                    separator: '\n\n'
                },
                src: '<%= appAssets %>js/*.js',
                dest:'<%= web %>js/main.js'
            }
        },
        sass: {
            css: {
                options: {
                    style: 'compressed'
                },
                src: '<%= appAssets %>scss/style.scss',
                dest:'<%= web %>css/style.css'
            }
        },
        watch: {
            css: {
                files: ['<%= appAssets %>scss/*.scss'],
                tasks: ['sass:css']
            },
            js: {
                files: ['<%= appAssets %>js/*.js'],
                tasks: ['concat:concatJs']
            },
            src: {
                files: [
                    '<%= appAssets %>scss/*.scss',
                    '<%= appAssets %>js/*.js'
                ],
                tasks: ['sass:css', 'concat:concatJs']
            }
        }
    });

    grunt.registerTask('copyimages', 'Copy App images to web dir', ['copy:images']);
    grunt.registerTask('copyjs', 'Copy App js to web dir', ['concat:concatJs']);
    grunt.registerTask('copycss', 'Copy App css to web dir', ['sass:css']);

    grunt.registerTask('csswatch', ['watch:css']);
    grunt.registerTask('jswatch', ['watch:js']);
    grunt.registerTask('watchall', ['watch:src']);

    grunt.registerTask('copybootstrap', ['copy:bootstrapFonts', 'copy:bootstrapJs', 'concat:bootstrapCss']);
    grunt.registerTask('copyassets', 'Copy App assets to web dir', ['copyimages', 'copyjs', 'copycss']);
    grunt.registerTask('default', ['copybootstrap', 'copyassets']);

};
