import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
// MUI Imports
import Navbar from "./NavigationComponents/Navbar";
import Sidebar from "./NavigationComponents/Sidebar";
import theme from './Theme';

const styles = ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 240,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
});

class Navigation extends Component {
    render() {
        const { classes, UI: { drawerOpen, mobile } } = this.props;
        const { children } = this.props;
        return (
            <div>
                <Navbar/>
                <Sidebar/>
                <div className={classes.toolbar}/>
                <main className={[classes.content, (drawerOpen && !mobile ? '' : classes.contentShift)].join(' ')}>
                    {children}
                </main>
            </div>
        )
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    UI: state.UI,
});

export default connect(mapStateToProps)(withStyles(styles)(Navigation));