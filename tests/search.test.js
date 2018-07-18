import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
} from '../src/main';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Search', () => {
  let fetchedStub;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => ({ artist: 'name' }) });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the search method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('generic search', () => {
    it('should call fetch function', () => {
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      context('passing one type', () => {
        const artists = search('Muse', 'artist');

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Muse&type=artist'
        );

        const albums = search('Muse', 'album');
        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Muse&type=album'
        );
      });

      context('passing more than one type', () => {
        const artistsAndAlbuns = search('Muse', ['artist', 'album']);

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Muse&type=artist,album'
        );
      });
    });

    it('should return the JSON data from the Promise', () => {
      const artists = search('Muse', 'artist');
      artists.then(data => {
        expect(data).to.be.eql({ artist: 'name' });
      });
    });
  });

  describe('search artists', () => {
    it('should call fetch function', () => {
      const artists = searchArtists('Muse');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      const artists = searchArtists('Muse');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Muse&type=artist'
      );
    });
  });

  describe('search albums', () => {
    it('should call fetch function', () => {
      const albums = searchAlbums('Muse');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      const albums = searchAlbums('Muse');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Muse&type=album'
      );
    });
  });

  describe('search tracks', () => {
    it('should call fetch function', () => {
      const albums = searchTracks('Muse');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      const albums = searchTracks('Muse');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Muse&type=track'
      );
    });
  });

  describe('search playlist', () => {
    it('should call fetch function', () => {
      const playlists = searchPlaylists('Muse');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct URL to fetch', () => {
      const playlists = searchPlaylists('Muse');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Muse&type=playlist'
      );
    });
  });
});
