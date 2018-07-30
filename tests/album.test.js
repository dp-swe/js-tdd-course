import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let spotify;
  let stubedFetch;

  beforeEach(() => {
    spotify = new SpotifyWrapper({token: 'foo'});
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });

    it('should have spotify.album.getTracks method', () => {
      expect(spotify.album.getTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = spotify.album.getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy'
      );
    });

    it('should return the correct data from Promise', () => {
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      album.then(data => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const albums = spotify.album.getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const albums = spotify.album.getAlbums([
        '4aawyAB9vmqN3uQ7FjRGTy'
      ]);
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums?ids=4aawyAB9vmqN3uQ7FjRGTy'
      );
    });

    it('should return the correct data from Promise', () => {
      const albums = spotify.album.getAlbums([
        '4aawyAB9vmqN3uQ7FjRGTy',
        '4aawyAB9vmqN3uQ7FjRGTk'
      ]);
      albums.then(data => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });

    describe('spotify.album.getTracks', () => {
      it('should call fetch method', () => {
        const tracks = spotify.album.getTracks();
        expect(stubedFetch).to.have.been.calledOnce;
      });

      it('should call fetch with the correct url', () => {
        const tracks = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
        expect(stubedFetch).to.have.been.calledWith(
          'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks'
        );
      });

      it('should return the correct data from Promise', () => {
        const tracks = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
        tracks.then(data => {
          expect(data).to.be.eql({ album: 'name' });
        });
      });
    });
  });
});
