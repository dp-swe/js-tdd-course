'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchAlbums = exports.searchArtists = exports.search = undefined;

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
var search = exports.search = function search(query, type) {
  return fetch(_config2.default + '/search?q=' + query + '&type=' + type, HEADERS).then(_utils2.default);
};

var searchArtists = exports.searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};
var searchAlbums = exports.searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};
var searchTracks = exports.searchTracks = function searchTracks(query) {
  return search(query, 'track');
};
var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};