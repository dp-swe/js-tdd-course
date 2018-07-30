import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Search', () => {
  let spotify;
  let fetchedStub;

  beforeEach(() => {
    spotify = new SpotifyWrapper({token: 'foo'});
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => ({ artist: 'name' }) });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exist the search method', () => {
      expect(spotify.search).to.exist;
    });

    it('should exist the searchAlbums method', () => {
      expect(spotify.search.albums).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(spotify.search.artists).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });

    it('should exist the search method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('search artists', () => {
    it('should call fetch function', () => {
      const artists = spotify.search.artists('Muse');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      const artists = spotify.search.artists('Muse');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Muse&type=artist'
      );
    });
  });

  describe('search albums', () => {
    it('should call fetch function', () => {
      const albums = spotify.search.albums('Muse');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      const albums = spotify.search.albums('Muse');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Muse&type=album'
      );
    });
  });

  describe('search tracks', () => {
    it('should call fetch function', () => {
      const albums = spotify.search.tracks('Muse');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      const albums = spotify.search.tracks('Muse');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Muse&type=track'
      );
    });
  });

  describe('search playlist', () => {
    it('should call fetch function', () => {
      const playlists = spotify.search.playlists('Muse');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct URL to fetch', () => {
      const playlists = spotify.search.playlists('Muse');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Muse&type=playlist'
      );
    });
  });
});
