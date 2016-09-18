module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {                       
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['{,*/}*.{scss,sass}'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },

    watch: {
      compile:{
        files: ['sass/*.scss'],
        tasks: ['sass']
      } 
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  grunt.registerTask('default', 'watch:compile');
};