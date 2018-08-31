const nock = require('nock');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const expect = chai.expect;
const converterBTC = require('../src/ConverterBTC');

chai.use(sinonChai);

describe('ConverterBTC', () => {

    let consoleStub;

    const responseMock = {
        "success": true,
        "time": "2017-07-02 18:51:29",
        "price": 2490.78
    };

    beforeEach(() =>{
        consoleStub = sinon.stub(console, 'info');
    });

    afterEach( () => {
        consoleStub.restore();
    });
    
    it('should use currency USD and 1 as amount default', async () => {
        nock('https://apiv2.bitcoinaverage.com')
          .get('/convert/global')
          .query({ from: 'BTC', to: 'USD', amount: 1})
          .reply(200, responseMock);
    
        await converterBTC();
      
        expect(consoleStub).to.have.been.calledWith('1 BTC to USD = 2490.78');
    });
    
    it('should use currency USD and 10 as amount', async () => {
        nock('https://apiv2.bitcoinaverage.com')
          .get('/convert/global')
          .query({ from: 'BTC', to: 'USD', amount: 10})
          .reply(200, responseMock);
    
        await converterBTC('USD', 10);
    
        expect(consoleStub).to.have.been.calledWith('10 BTC to USD = 2490.78');
    });

    it('should use currency BRL and 1 as amount default', async () => {
        nock('https://apiv2.bitcoinaverage.com')
          .get('/convert/global')
          .query({ from: 'BTC', to: 'BRL', amount: 1})
          .reply(200, responseMock);
    
        await converterBTC('BRL');
    
        expect(consoleStub).to.have.been.calledWith('1 BTC to BRL = 2490.78');
    });

    it('should message user when API reply with error', async () => {
        nock('https://apiv2.bitcoinaverage.com')
          .get('/convert/global')
          .query({ from: 'BTC', to: 'BRL', amount: 1})
          .replyWithError('Error')
    
        await converterBTC('BRL');
    
        expect(consoleStub).to.have.been.calledWith('Something went wrong. Try again in a few minutes.');
    });
});