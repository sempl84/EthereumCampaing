import React, {Component} from 'react';
import {Card, Button} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layouts'

class CampaignIndex extends Component {

    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };

    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>link</a>,
                fluid: true
            }
        });
        return <Card.Group items={items} />;
    }

    render() {
        return (<Layout><div>
            <h3>Open Campaings</h3>
            <Button floated="right" content='Next' icon='add' primary labelPosition='right' />
            {this.renderCampaigns()}
        </div></Layout>);
    }

}

export default CampaignIndex;