import React, {Component} from 'react';
// MUI Imports
import withStyles from "@material-ui/core/styles/withStyles";
import theme from '../Layout/Theme';
import Paper from "@material-ui/core/es/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import NewGuidelines from "./NewComponents/NewGuidelines";
import NewForm from "./NewComponents/NewForm";

const styles = {
    root: {
        flexGrow: 1,
    },
    container: {
        padding: "20px 30px 20px",
    },
    paper: {
        width: 500,
        transition: theme.transitions.create("all", {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard,
        }),
    },
    stepper: {
        width: "100%",
        padding: "8px 0px 8px 0px",
    },

};

class NewCommunity extends Component {
    state = {
        activeStep: 0,
    };
    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };
    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    render() {
        const {classes} = this.props;
        const { activeStep } = this.state;
        const maxSteps = 2;
        return (
            <Grid container justify={"center"} className={[classes.root, "container"]}>
                <Paper className={classes.paper}>
                    <Grid container justify={"center"} className={classes.container}>
                        {activeStep === 0 ? <NewGuidelines /> : <NewForm history={this.props.history}/>}
                    </Grid>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        className={classes.stepper}
                        nextButton={
                            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                                Next
                                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                Back
                            </Button>
                        }
                    />
                </Paper>
            </Grid>
        )
    }
}


export default withStyles(styles)(NewCommunity);