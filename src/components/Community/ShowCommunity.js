import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCommunity } from "../../redux/actions/communityActions";
// MUI Components
import Tabs from  '@material-ui/core/Tabs';
import Tab from  '@material-ui/core/Tab';
import withStyles from "@material-ui/core/styles/withStyles";
// Community Show Components
import CommunityCommonRoom from "./ShowComponents/CommunityCommonRoom";
import CommunityGuidesList from "./ShowComponents/CommunityGuidesList";
import CommunityHeader from "./ShowComponents/CommunityHeader";
import CommunityChallengeList from "./ShowComponents/CommunityChallengeList";

const styles = {

};

class ShowCommunity extends Component {
    state = {
        value: 'commonRoom',
        community: {
            name: "",
            communityImage: "",
        },
        errors: {},
    };
    componentDidMount() {
        this.props.getCommunity(this.props.match.params.id);
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.UI.errors) {
            this.setState({ errors: nextProps.UI.errors })
        }
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const { value, errors, community } = this.state;
        const { classes, UI: { loading } } = this.props;
        return (
            <div>
                <CommunityHeader />
                <Tabs centered value={value} onChange={this.handleChange}>
                    <Tab value="commonRoom" label="Common Room" />
                    <Tab value="guides" label="Guides" />
                    <Tab value="challenges" label="Challenges" />
                </Tabs>
                <div className={"container"}>
                    {value === 'commonRoom' && <CommunityCommonRoom active={value === 'commonRoom'}/>}
                    {value === 'guides' && <CommunityGuidesList active={value === 'guides'}/>}
                    {value === 'challenges' && <CommunityChallengeList active={value === 'challenges'}/>}
                </div>
            </div>
        )
    }
}

ShowCommunity.propTypes = {
    classes: PropTypes.object.isRequired,
    getCommunity: PropTypes.func.isRequired,
    community: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    community: state.community,
    UI: state.UI,
});

const mapActionsToProps = {
    getCommunity
};

export default connect(
    mapStateToProps,
    mapActionsToProps,
)(withStyles(styles)(ShowCommunity));