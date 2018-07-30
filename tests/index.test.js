import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import SpotifyWrapper from '../src/index';
import API_URL from '../src/config';

chai.use(sinonChai);

describe('SporityWrapper library', () => {
  it('should create an instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceOf(SpotifyWrapper);
  });

  it('should receive API_URL as a option', () => {
    let spotify = new SpotifyWrapper({apiURL: 'api/url'});
    expect(spotify.apiURL).to.eql('api/url');
  });

  it('should use the default API_URL if not provided', () => {
    let spotify = new SpotifyWrapper({});
    expect(spotify.apiURL).to.eql(API_URL);
  });

  it('should receive token as a option', () => {
    let spotify = new SpotifyWrapper({token: 'foo'});
    expect(spotify.token).to.eql('foo');
  });

  describe('request method', () => {
    let stubedFetch;

    beforeEach(() => {
      stubedFetch = sinon.stub(global, 'fetch');
      stubedFetch.resolves({});
    });
  
    afterEach(() => {
      stubedFetch.restore();
    });

    it('should have request method', () => {
      let spotify = new SpotifyWrapper({});
      expect(spotify.request).to.exist;
    });

    it('should call fetch when request', () => {
      let spotify = new SpotifyWrapper({token: 'foo'});
      spotify.request('url');

      expect(stubedFetch).to.have.been.calledOnce;
    });
    
    it('should call fetch with right URL passed', () => {
      let spotify = new SpotifyWrapper({token: 'foo'});
      spotify.request('url');

      expect(stubedFetch).to.have.been.calledWith('url');
    });

    it('should call fetch with right headers passed', () => {
      let spotify = new SpotifyWrapper({token: 'foo'});
      
      const headers = {
        headers: {
          Authorization: `'Bearer foo'`
        }
      };

      spotify.request('url');
      
      expect(stubedFetch).to.have.been.calledWith('url', headers);
    });
  })
});
