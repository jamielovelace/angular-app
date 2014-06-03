module.exports = function(grunt) {
 
  grunt.registerTask('default', [ 'imagemin', 'less' ]);
  grunt.registerTask('watch', [ 'watch' ]);
 
  grunt.initConfig({
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img-uncomp/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      }
    },
    less: {
      dist: {
        files: {
          'css/app.css' : 'less/app.less'
        }
      }
    },
    watch: {
      css: {
        files: ['less/*.less'],
        tasks: ['less']
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
};
