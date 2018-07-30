import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

const spotify = new SpotifyWrapper({token: 'BQAe-uVc6S_7iQxmtmbmPUI8uHJ0YWSws_ntrc_VbZMq8MaCHd7n-yzyZi_8QqCgJfDa_tA2es9F4oeVxHxk1pAmahFj2ehxrvvWJcHyp2EGfkfaRD7TVc5ThNOais4pA8Ppq7WaNQ5FcWa5'});
const albums = spotify.search.albums('Muse');
albums.then(data => data.albums.items.map(item => console.log(item.name)));