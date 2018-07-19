import { expect } from 'chai';

import SpotifyWrapper from '../src/index';

describe('SporityWrapper library', () => {
  it('should create an instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceOf(SpotifyWrapper);
  });

  it('should receive API_URL as a option', () => {});
});
