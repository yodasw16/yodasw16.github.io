module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Watch Task
        watch: {
            options: {
                livereload: true,
            },
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['compass:dev'],
            },
        },

        // Compass Task
        compass: {
            dev: {
                options: {
                    httpPath: '_site',
                    cssDir: 'css',
                    sassDir: 'sass',
                    imagesDir: 'img',
                    force: true,
                    outputStyle: 'compressed',
                    relativeAssets: true,
                    require: ['modular-scale', 'breakpoint'],
                },
            },
        },

        // Run shell commands
        shell: {
            bundle: {
                command: 'bundle install'
            },
        },

    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-shell');
};
