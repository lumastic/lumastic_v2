import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { drawerAction } from "../../../redux/actions/uiActions";
import logo from '../../../images/logo.svg';
// MUI Imports
import withStyles from '@material-ui/core/styles/withStyles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import theme from '../Theme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BackIcon from '@material-ui/icons/ArrowBack';
import ToolbarImage from "./ToolbarImage";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const Link = require("react-router-dom").Link;

const styles = {
    appBar: {
        zIndex: theme.zIndex.drawer + 100,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    rightLinks: {
        display: 'flex',
        alignItems: 'center',
    },
};

class Navbar extends Component {
    toggleDrawer = () => {
        this.props.drawerAction(!this.props.UI.drawerOpen);
    };
    render() {
        const { classes, UI : { drawerOpen } } = this.props;
        return (
            <AppBar>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer" onClick={this.toggleDrawer}>
                        <MenuIcon/>
                    </IconButton>
                    <ToolbarImage mdUp src={logo} alt="Lumastic logo"/>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="What makes you curious?"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                    </div>
                    <Button color={"inherit"} component={Link} to={"/signup"}>Sign Up</Button>
                    <Button color={"inherit"} component={Link} to={"/login"}>Login</Button>
                    <Button color={"inherit"} component={Link} to={"/"}>Home</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

Navbar.propTypes = {
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

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Navbar));