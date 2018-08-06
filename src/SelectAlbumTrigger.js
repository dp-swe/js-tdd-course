import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderTracks from './AlbumTracks';

const listAlbums = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');

const albumTracksList = document.getElementById('album-musics');

function makeRequest(albumId){
    spotify.album.getAlbum(albumId)
        .then(data => renderAlbumInfo(data, albumInfo))
        .then(data => renderTracks(data.tracks.items, albumTracksList));
}

export default function selectAlbumTrigger(){
    listAlbums.addEventListener('click', (e) => {
        const target = e.target;
        makeRequest(target.getAttribute('data-album-id'));
    });  
}