var assert = require('assert');
var util = require('../');

var testData = {
  isFile: ['./test/test.js'],
  isDir: ['/', './', '../', '/../../'],
  isExist: ['./test/test.js'],
  isUrl: ['http://www.so.com'],
  isRelative: ['/image/s', '../image/s'],
  isImage: ['1.jpg', 'http://www.qq.com/q.gif']
};

describe('lr-util-file', function() {

  describe('#isFile()', function() {
    it('should return true when it\'s a file and exist', function() {

      testData.isFile.forEach(function(v) {
        assert.equal(util.isFile(v), true, v + ' is a file');
      })

    })
  })

  describe('#isDir()', function() {
    it('should return true when it\'s a directory', function() {
      testData.isDir.forEach(function(v) {
        assert.equal(util.isDir(v), true, v + ' is a directory');
      })
    })
  })

  describe('#isUrl()', function() {
    it('should return true when it\'s a url', function() {

      testData.isUrl.forEach(function(v) {
        assert.equal(util.isUrl(v), true, v + ' is a url');
      })

    })
  })

  describe('#exist()', function() {
    it('should return true when it\'s exist', function() {
      testData.isExist.forEach(function(v) {
        assert.equal(util.exist(v), true, v + ' is exists');
      })
    })
  })

  describe('#isRelative()', function() {
    it('should return true when it\'s a relative path', function() {
      testData.isRelative.forEach(function(v) {
        assert.equal(util.isRelative(v), true, v + ' is a relative path');
      })
    })
  })

  describe('#isImage()', function() {
    it('should return true when it\'s a image\'s path', function() {
      testData.isImage.forEach(function(v) {
        assert.equal(util.isImage(v), true, v + ' is a image\'s path');
      })
    })
  })

})