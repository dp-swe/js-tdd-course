import 'jsdom-global/register';
import { expect } from 'chai';
import renderTracks from '../src/AlbumTracks';
import convertToHumanTime from '../src/ConvertToHumanTime';

describe('AlbumTracks ', () => {
    it('should exist ', () => {
        expect(renderTracks).to.exist;
    });

    const data = [
        {
          "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
          "track_number": 1,
          "name": "Around The World",
          "duration_ms": 238733
        }
    ];

    const markup = `
        <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
            <p class="music-number">1</p>
            <p class="music-title">"Around The World"</p>
            <p class="music-duration">${convertToHumanTime(238733)}</p>
        </div>`;

    const data2 = [
        {
            "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
            "track_number": 1,
            "name": "Around The World",
            "duration_ms": 238733
        },
        {
            "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
            "track_number": 1,
            "name": "Around The World",
            "duration_ms": 238733
        }
    ];

    const markup2 = `
        <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
            <p class="music-number">1</p>
            <p class="music-title">"Around The World"</p>
            <p class="music-duration">${convertToHumanTime(238733)}</p>
        </div>
        <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
            <p class="music-number">1</p>
            <p class="music-title">"Around The World"</p>
            <p class="music-duration">${convertToHumanTime(238733)}</p>
        </div>`;

    it('should create markup given correct data ', () => {
        const element = document.createElement('div');

        renderTracks(data, element);
        expect(element.innerHTML).to.be.eql(markup);
    });

    it('should create and append markup given more than 1 data ', () => {
        const element2 = document.createElement('div');

        renderTracks(data2, element2);
        expect(element2.innerHTML).to.eql(markup2);
    })
})