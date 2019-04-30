import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/es/Card/Card";
import Typography from "@material-ui/core/es/Typography/Typography";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import CardActionArea from "@material-ui/core/es/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
const Link = require("react-router-dom").Link;


const styles = {
    onImageText: {
        color: '#fff',
        textShadow: "0px 0px 5px black",
    },
    onImageHeader: {
        color: '#fff',
        textShadow: "0px 0px 5px black",
        marginTop: 10,
    },
    overlay: {
        backgroundImage: "linear-gradient(to right, rgba(29, 81, 138, 0.75), rgba(32, 82, 136, 0))"
        //backgroundColor: "rgba(29, 81, 138, 0.1)"
    },
};

class CommunityCard extends Component {
    render() {
        const { classes, community : { name, communityImage, communityId, memberCount } } = this.props;
        console.log(communityImage);
        return (
            <Card>
                <CardActionArea component={Link} to={`/community/${communityId}`}>
                    <CardMedia image={communityImage}>
                        <CardContent className={classes.overlay}>
                            <Typography className={classes.onImageHeader} variant={"h5"} component={"h2"} >
                                { name }
                            </Typography>
                            <Typography className={classes.onImageText} variant={"subtitle2"} component={"p"}>
                                {memberCount} {(memberCount > 1 || memberCount === 0) ? "Members" : "Member"}
                            </Typography>
                        </CardContent>
                    </CardMedia>
                </CardActionArea>
            </Card>
        )
    }
}

export default withStyles(styles)(CommunityCard);