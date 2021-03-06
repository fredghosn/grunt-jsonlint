module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      gruntfile: {
        src: [ 'Gruntfile.js' ]
      },
      packageJson: {
        src: [ 'package.json' ]
      },
      tasks: {
        src: [ 'tasks/*.js' ],
        options: {
          eqnull: true,
          curly: true,
          newcap: true,
          unused: true,
          indent: 2,
          noempty: true,

          node: true
        }
      },
      tests: {
        src: [ 'test/**/*.js' ],
        options: {
          eqnull: true,
          indent: 2,
          node: true
        }
      }
    },

    jsonlint: {
      sample: {
        src: [ 'test/valid.json' ]
      },
      packageJson: {
        src: [ 'package.json' ]
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: [ 'test/**/*.js' ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');

  require('./tasks/jsonlint')(grunt);

  grunt.registerTask('test', [ 'jshint', 'jsonlint', 'mochaTest' ]);

  // Default task(s).
  grunt.registerTask('default', [ 'test' ]);

};
