/* global fetch */

import API_URL from './config';
import toJSON from './utils';

const token =
  'BQAyOt3WUkCYZ5uEgtXAPksYnvpI26O-oCTxE_AwQjp6u35tQ-rWsZGo2M2tNV-RYS9YvsD-w_JwbF-LNgkqHzYQL0k6MlPyS2hBhrxux-kk-QN1TjvYrjPlj2t7lbEreuwXXbGvQlsM-c2w';
const HEADERS = {
  headers: {
    Authorization: `Bearer ${token}`
  }
};
export const getAlbum = id =>
  fetch(`${API_URL}/albums/${id}`, HEADERS).then(toJSON);

export const getAlbums = ids =>
  fetch(`${API_URL}/albums/?ids=${ids}`, HEADERS).then(toJSON);

export const getAlbumTracks = id =>
  fetch(`${API_URL}/albums/${id}/tracks`, HEADERS).then(toJSON);
