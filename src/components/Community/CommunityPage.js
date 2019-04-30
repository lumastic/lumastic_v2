import React, {Component} from 'react';
import CommunityCommonRoom from "./CommunityPageComponents/CommunityCommonRoom";
import CommunityGuidesList from "./CommunityPageComponents/CommunityGuidesList";
import {Route, Switch} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Tabs from  '@material-ui/core/Tabs';
import Tab from  '@material-ui/core/Tab';
import CommunityHeader from "./CommunityPageComponents/CommunityHeader";
import {Typography} from "@material-ui/core";
import CommunityChallengeList from "./CommunityPageComponents/CommunityChallengeList";
const Link = require("react-router-dom").Link;

class CommunityPage extends Component {
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

export default CommunityPage;