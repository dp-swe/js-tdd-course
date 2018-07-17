const token = 'BQCWf8ZN4JVcXYh3gaMpAB1OHwKmskSv9VIgwVdanBqShRd3sAvZgGL7Cyr0fYUkl_7Xz06KjV5k0SwTezTEt9omH9g3wj-JPGTTsXdDR1tUjc3lhOxCYK-bqT3yxKTRfNDaeUPojj02ErkR';
const HEADERS = {
  headers: {
    Authorization: `Bearer ${token}`
  }
}
export const getAlbum = (id) => fetch(`https://api.spotify.com/v1/albums/${id}`, HEADERS).then(data => data.json());
export const getAlbumTracks = () => { };
