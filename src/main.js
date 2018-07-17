const token = 'BQCWf8ZN4JVcXYh3gaMpAB1OHwKmskSv9VIgwVdanBqShRd3sAvZgGL7Cyr0fYUkl_7Xz06KjV5k0SwTezTEt9omH9g3wj-JPGTTsXdDR1tUjc3lhOxCYK-bqT3yxKTRfNDaeUPojj02ErkR';
const HEADERS = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}
export const search = (query, type) =>
    fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`, HEADERS)
        .then(data => data.json())

export const searchArtists = (query) =>
    search(query, 'artist');
export const searchAlbums = (query) =>
    search(query, 'album');
export const searchTracks = (query) =>
    search(query, 'track');
export const searchPlaylists = (query) =>
    search(query, 'playlist');