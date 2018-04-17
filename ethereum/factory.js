import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x3fEd977Fb138aA5adba9C8A94D8ceA54a9ae1E77'
);

export default instance;