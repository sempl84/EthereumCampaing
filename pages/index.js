import React, {Component} from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
    async componentDidMount() {
        const campaigns = await factory.methods.getDeployedCampaign;
        console.log(campaigns);
    }

    render() {
        return <div>dddd</div>;
    }

}

export default CampaignIndex;