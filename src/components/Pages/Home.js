import React, {Component} from 'react';
import axios from 'axios'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import CommunityCard from '../Community/CommunityCard';

const styles = theme => ({
    progress: {
        display: "flex",
        justifyContent: "center",
    },
});

class Home extends Component {
    state = {
        communities: null
    };
    componentDidMount() {
        axios.get('/communities')
            .then(resp => {
                console.log(resp.data);
                this.setState({
                    communities: resp.data
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        //const {classes} = this.props;
        let activityFeedMarkup = this.state.communities ? (
            this.state.communities.map((community) => {
                return(
                    <Grid item md={6} sm={12} xs={12} key={community.communityId}>
                        <CommunityCard community={community} />
                    </Grid>
                )
            })
        ) : ( <Grid container justify={"center"} > <CircularProgress/> </Grid>);

        return (
            <Grid container spacing={16}>
                <Grid item sm={8} xs={12}>
                    <Typography>From your communities</Typography>
                    <Grid container spacing={8}>
                        {activityFeedMarkup}
                    </Grid>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Typography>Recommendations</Typography>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Home);