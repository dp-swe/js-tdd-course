import { API_URL } from './config';
import { toJSON } from './utils';

const token =
  'BQAyOt3WUkCYZ5uEgtXAPksYnvpI26O-oCTxE_AwQjp6u35tQ-rWsZGo2M2tNV-RYS9YvsD-w_JwbF-LNgkqHzYQL0k6MlPyS2hBhrxux-kk-QN1TjvYrjPlj2t7lbEreuwXXbGvQlsM-c2w';
const HEADERS = {
  headers: {
    Authorization: `Bearer ${token}`
  }
};
export const search = (query, type) =>
  fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADERS).then(toJSON);

export const searchArtists = query => search(query, 'artist');
export const searchAlbums = query => search(query, 'album');
export const searchTracks = query => search(query, 'track');
export const searchPlaylists = query => search(query, 'playlist');
