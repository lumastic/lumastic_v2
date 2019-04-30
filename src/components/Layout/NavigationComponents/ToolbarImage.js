import React from 'react';
import {withStyles, createStyles} from '@material-ui/core/styles/index';
import theme from '../Theme';

// define these styles once, if changes are needed because of a change
// to the material-ui beta branch, the impact is minimal
const styles = createStyles({
    root: {
        display: 'none',
        [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
            display: 'block',
            height: 55,
        },
    },
});

// a reusable component for any image you'd need in a toolbar/appbar
const ToolbarImage = (props) => {
    return (
        <img src={props.src} className={[props.classes.root, 'PrimarySearchAppBar-title-4'].join(' ')} alt={props.alt} />
    );
};

// this higher order component uses styleSheet to add
// a classes prop that contains the name of the classes
export default withStyles(styles)(ToolbarImage);