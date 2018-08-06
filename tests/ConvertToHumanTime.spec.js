import {expect} from 'chai';
import convertToHumanTime from '../src/ConvertToHumanTime';

describe('ConvertToHumanTime', () => {
    it('should receive 0 and convert to 0:00', () => {
        expect(convertToHumanTime(0)).to.eql('0:00');
    });

    it('should receive 1000ms and convert to 0:01', () => {
        expect(convertToHumanTime(1000)).to.eql('0:01');
    });

    it('should receive 11000ms and convert to 0:01', () => {
        expect(convertToHumanTime(11000)).to.eql('0:11');
    });

    it('should receive 60000ms and convert to 1:00', () => {
        expect(convertToHumanTime(60000)).to.eql('1:00');
    });
})