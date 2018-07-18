'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global fetch */

var token = 'BQAyOt3WUkCYZ5uEgtXAPksYnvpI26O-oCTxE_AwQjp6u35tQ-rWsZGo2M2tNV-RYS9YvsD-w_JwbF-LNgkqHzYQL0k6MlPyS2hBhrxux-kk-QN1TjvYrjPlj2t7lbEreuwXXbGvQlsM-c2w';
var HEADERS = {
  headers: {
    Authorization: 'Bearer ' + token
  }
};
var getAlbum = exports.getAlbum = function getAlbum(id) {
  return fetch(_config2.default + '/albums/' + id, HEADERS).then(_utils2.default);
};

var getAlbums = exports.getAlbums = function getAlbums(ids) {
  return fetch(_config2.default + '/albums/?ids=' + ids, HEADERS).then(_utils2.default);
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(id) {
  return fetch(_config2.default + '/albums/' + id + '/tracks', HEADERS).then(_utils2.default);
};