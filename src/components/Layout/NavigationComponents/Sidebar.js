import React, {Component} from 'react';
// MUI COMPONENTS
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import PropTypes from "prop-types";
import {drawerAction} from "../../../redux/actions/uiActions";
import {connect} from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";


const drawerWidth = 240;
const styles = {
    drawerPaper: {
        width: drawerWidth,
        zIndex: 0,
    },
};

class Sidebar extends Component {
    toggleSidenav = () => {
        console.log("I Go here!");
        this.props.drawerAction(!this.props.UI.drawerOpen);
    };
    render() {
        const { classes, UI: { drawerOpen, mobile } } = this.props;
        const drawer = (
            <div> This is some test content </div>
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
                        {drawer}
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