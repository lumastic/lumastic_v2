import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import EditIcon from '@material-ui/icons/Edit';
import HelpIcon from '@material-ui/icons/Help';

const styles = {
    header: {
        marginTop: 10,
    },
};

class NewGuidelines extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Typography variant={"h4"} gutterBottom className={classes.header}>
                    Starting a new community?
                </Typography>
                <Typography variant={"h5"} color={"textSecondary"} gutterBottom className={classes.header}>
                    Here's what you need to know...
                </Typography>
                <Grid container spacing={16} className={classes.header}>
                    <Grid item>
                        <GroupAddIcon/>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Typography variant={"body1"}>
                            Communities are open groups. Anyone can join your community, create guides, and partake in discussions.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={16}>
                    <Grid item>
                        <EditIcon/>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Typography variant={"body1"}>
                            By creating the community, you become its first curator. Curators are in charge of encouraging participation amongst members, creating a culture of growth within the community, and approving guide contributions.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={16}>
                    <Grid item>
                        <HelpIcon/>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Typography variant={"body1"}>
                            You have an opportunity to make an everlasting, positive impact in the lives of people who love what you love. Remember, everyone here wants you to succeed. Be kind, be honest, and ask for help if you need it.
                        </Typography>
                    </Grid>
                </Grid>

            </div>
        )
    }
}

export default withStyles(styles)(NewGuidelines);