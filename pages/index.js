import React, {Component} from 'react';
import {Card, Button} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layouts';
import {Link} from '../routes';

class CampaignIndex extends Component {

    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };

    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (<Link route={`/campaings/${address}`}><a>View</a></Link>),
                fluid: true
            }
        });
        return <Card.Group items={items} />;
    }

    render() {
        return (<Layout><div>
            <h3>Open Campaings</h3>
            <Link route="/campaings/new">
                <a>
                    <Button floated="right" content='Create Campaing' icon='add' primary labelPosition='right' />
                </a>
            </Link>
            {this.renderCampaigns()}
        </div></Layout>);
    }

}

export default CampaignIndex;