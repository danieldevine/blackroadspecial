module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
            'js/libs/*.js',
            'js/main.js'
        ],
        dest: 'js/build/production.js',
      }
    },

    uglify: {
      build: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js',
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/raw',
          src: ['*.{png,jpg,gif}'],
          dest: 'img/build/'
        }]
      }
    },

    sass: {
      dev: {
        files: {
          'css/global.css': 'scss/global.scss'
        }
      },

      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/global.min.css': 'scss/global.scss'
        }
      }
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['img/raw/*'],
            dest: 'img/store'
          },
    ],
      },
    },


    clean: ['img/raw/*'],


    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['js/*.js', 'js/libs/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: ['scss/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      },
      php: {
        files: ['**/*.php'],
        options: {
          spawn: false
        }
      },
      images: {
        files: ['img/raw/*.{png,jpg,gif}'],
        tasks: ['imagemin', 'copy', 'clean'],
        options: {
          spawn: false,
        },
      }
    },


  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['sass', 'concat', 'uglify', 'imagemin', 'copy', 'clean', 'watch']);

};
