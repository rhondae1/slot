module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['./scripts/**/*.js']
    },
    sass: {
      dist: {
        files: {
          'styles/main.css': 'styles/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['./scripts/**/*.js', 'styles/*.scss'],
        tasks: ['jshint','sass']
      },
      sassy: {
        files: ['./sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
};
