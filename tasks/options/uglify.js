var grunt = require('grunt');
module.exports = {
  options: {
    report: 'gzip',
    banner: grunt.file.read('generators/license.js'),
  },
  dist: {
    files: [{
     src: 'dist/ember-data.js',
     dest: 'dist/ember-data.min.js',
    }]
  }
};
