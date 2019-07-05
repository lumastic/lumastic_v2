import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
// MUI COMPONENTS
import {drawerAction} from "../../../redux/actions/uiActions";
import withStyles from "@material-ui/core/styles/withStyles";
import theme from '../Theme';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';


const Link = require("react-router-dom").Link;

const drawerWidth = 240;
const styles = {
    drawerPaper: {
        width: drawerWidth,
        zIndex: 0,
    },
    toolbar: theme.mixins.toolbar,
};

class Sidebar extends Component {
    toggleSidenav = () => {
        console.log("I Go here!");
        this.props.drawerAction(!this.props.UI.drawerOpen);
    };
    render() {
        const { classes, UI: { drawerOpen, mobile } } = this.props;
        const drawerContent = (
            <div>
                <List>
                    <ListItem button component={Link} to="/">
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText primary={"Home"}/>
                    </ListItem>
                    <ListItem button component={Link} to="/communities/create">
                        <ListItemIcon><AddIcon/></ListItemIcon>
                        <ListItemText primary={"New Community"}/>
                    </ListItem>
                </List>
            </div>
        );
        const drawer = (
            <div>
                <div className={classes.toolbar}></div>
                {drawerContent}
            </div>
        );
        const mobileDrawer = (
            <div> {drawerContent} </div>
        );
        return (
            <div>
                <Hidden smUp implementation="css">
                    <SwipeableDrawer
                        container={this.props.container}
                        variant="temporary"
                        open={drawerOpen && mobile}
                        onClose={this.toggleSidenav}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {mobileDrawer}
                    </SwipeableDrawer>
                </Hidden>
                <Drawer
                    container={this.props.container}
                    variant="persistent"
                    open={drawerOpen}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    {drawer}
                </Drawer>
            </div>
        )
    }
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    drawerAction: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    UI: state.UI,
});

const mapActionsToProps = {
    drawerAction
};

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Sidebar));