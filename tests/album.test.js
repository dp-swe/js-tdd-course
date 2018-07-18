import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let stubedFetch;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy'
      );
    });

    it('should return the correct data from Promise', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      album.then(data => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const albums = getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const albums = getAlbums([
        '4aawyAB9vmqN3uQ7FjRGTy',
        '4aawyAB9vmqN3uQ7FjRGTk'
      ]);
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk'
      );
    });

    it('should return the correct data from Promise', () => {
      const albums = getAlbums([
        '4aawyAB9vmqN3uQ7FjRGTy',
        '4aawyAB9vmqN3uQ7FjRGTk'
      ]);
      albums.then(data => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });

    describe('getAlbumTracks', () => {
      it('should call fetch method', () => {
        const tracks = getAlbumTracks();
        expect(stubedFetch).to.have.been.calledOnce;
      });

      it('should call fetch with the correct url', () => {
        const tracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
        expect(stubedFetch).to.have.been.calledWith(
          'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks'
        );
      });

      it('should return the correct data from Promise', () => {
        const tracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
        tracks.then(data => {
          expect(data).to.be.eql({ album: 'name' });
        });
      });
    });
  });
});
