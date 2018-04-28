import React, {Component} from 'react';
import Layout from '../../components/Layouts';
import Campaign from'../../ethereum/campaign';

class CampaingsShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();
        console.log(summary);

        return {
            minimumContribution: summary[0],
            balance: summary[1],
            request: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    render() {
        return (
            <Layout>
                <h3>Show</h3>
            </Layout>
        );
    }
}

export default CampaingsShow;