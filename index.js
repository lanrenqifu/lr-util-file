/**
 * @file 路径相关工具模块
 * @type {exports}
 */

'use strict';

var fs = require('fs');
var _ = require('lodash');
var relative = require('is-relative-url');

/**
 * @const
 * @desc 用来判断不同类型文件的后缀
 * @type {{image: string[]}}
 */
var TYPES = {
  'image': [
    'svg', 'wbmp', 'png', 'bmp',
    'fax', 'gif', 'ico', 'jpe',
    'jpeg', 'jpg', 'cur', 'webp'
  ]
}

/**
 * @desc 获取判断文件类型的正则
 * @param type
 * @returns {RegExp}
 */
function getFileTypeReg(type){
  var map = TYPES[type];
  map = map.join('|');
  return new RegExp('\\.(?:' + map + ')$', 'i');
}

var util = {
  /**
   * @desc 判断传入路径是否是文件
   * @param fl
   * @returns {*}
   */
  isFile: function(fl) {
    try {
      return fs.statSync(_.trim(fl)).isFile();
    } catch(e) {
      return false;
    }
  },

  /**
   * @desc 判断传入路径是否是文件夹
   * @param path
   * @returns {*}
   */
  isDir: function(path) {
    try {
      return fs.statSync(_.trim(path)).isDirectory();
    } catch(e) {
      return false;
    }
  },

  /**
   * @desc 判断传入的路径是否存在
   * @param path
   * @returns {*}
   */
  exist: function(path) {
    path = _.trim(path);
    return this.isFile(path) || this.isDir(path);
  },

  /**
   * @desc 判断传入路径是否是线上地址
   * @param str
   * @returns {boolean}
   */
  isUrl: function(str) {
    str = _.trim(str);
    return !_.isString(str) || (str == '') ? false : !!str.match(/^https?:\/\/(.*)$/);
  },

  /**
   * @desc 判断传入的路径是否是相对地址
   * @param str {String}
   * @returns {boolean}
   */
  isRelative: function(str) {
    str = _.trim(str);
    return !_.isString(str) || (str == '') ? false : relative(str);
  },

  /**
   * @desc 判断传入的路径是否是一张合法的图片地址
   * @param str {String} 传入的路径
   */
  isImage: function(str) {
    str = _.trim(str);
    return !_.isString(str) || (str == '') ? false : getFileTypeReg('image').test(str);
  }
};

module.exports = util;