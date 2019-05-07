import React, {Component} from 'react';
import CommunityCommonRoom from "./ShowComponents/CommunityCommonRoom";
import CommunityGuidesList from "./ShowComponents/CommunityGuidesList";
import Tabs from  '@material-ui/core/Tabs';
import Tab from  '@material-ui/core/Tab';
import CommunityHeader from "./ShowComponents/CommunityHeader";
import CommunityChallengeList from "./ShowComponents/CommunityChallengeList";

class ShowCommunity extends Component {
    state = {
        value: 'commonRoom'
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const { value } = this.state;
        return (
            <div>
                <CommunityHeader />
                <Tabs value={value} onChange={this.handleChange}>
                    <Tab value="commonRoom" label="Common Room" />
                    <Tab value="guides" label="Guides" />
                    <Tab value="challenges" label="Challenges" />
                </Tabs>
                {value === 'commonRoom' && <CommunityCommonRoom active={value === 'commonRoom'}/>}
                {value === 'guides' && <CommunityGuidesList active={value === 'guides'}/>}
                {value === 'challenges' && <CommunityChallengeList active={value === 'challenges'}/>}
            </div>
        )
    }
}

export default ShowCommunity;