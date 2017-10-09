
module.exports = function(grunt) {

  grunt.initConfig({
 
  sass: {
      dist: {
          files: [{
              expland: true,
              src: ['style/src/*.scss'],
              dest: 'style/dist/main.css',
          }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  
  
  grunt.registerTask('default', ['sass']);
  
};