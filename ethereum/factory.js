import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xAB3cD6Fa864Becd0829538910fe892Bf961F92d4'
);

export default instance;