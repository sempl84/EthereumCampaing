import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xEB578de988C3B3a9564E64901f4BEe4F32752fD2'
);

export default instance;