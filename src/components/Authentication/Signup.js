import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// REDUX STUFF
import { connect } from 'react-redux';
import { signupUser } from "../../redux/actions/userActions";
// MUI COMPONENTS
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import Link from "@material-ui/core/es/Link/Link";
import Symbol from '../../images/Symbol.svg';
import Button from '@material-ui/core/Button'
import CircularProgress from "@material-ui/core/es/CircularProgress/CircularProgress";

const styles = {
    symbol: {
        width: 60,
        marginBottom: 5,
    },
    formContainer: {
        marginTop: 20,
        width: "100%",
    },
    paper: {
        width: 400,
        padding: "20px 30px 40px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    link: {
        margin: 5,
    },
    spinner: {

    },
    submit: {
        marginTop: "2rem",
    },
};

class Signup extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        errors: {},
    };
    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.UI.errors) {
            this.setState({ errors: nextProps.UI.errors })
        }
    }
    handleChange = fieldName => event => {
        this.setState({
            [fieldName]: event.target.value,
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        const newUser = {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        };
        this.props.signupUser(newUser, this.props.history);
        console.log(this.state);
    };
    render() {
        const { classes, UI: { loading } } = this.props;
        const { errors } = this.state;
        return (
            <Grid container justify={"center"} >
                <Paper className={classes.paper}>
                    <img src={Symbol} alt={"The Lumastic Symbol"} className={classes.symbol}/>
                    <Typography variant={"h4"} gutterBottom className={classes.header}>Sign Up</Typography>
                    <Typography color={"textSecondary"} gutterBottom>
                        Already have an account?
                        <Link component={RouterLink} to={"/login"} className={classes.link}>Login</Link>
                    </Typography>
                    <form className={classes.formContainer} onSubmit={this.handleSubmit}>
                        <Grid container spacing={8}>
                            <Grid item xs={6}>
                                <TextField
                                    id="firstName"
                                    label="First Name"
                                    placeholder={"Harry"}
                                    fullWidth
                                    onChange={this.handleChange('firstName')}
                                    className={classes.textField}
                                    margin="dense"
                                    variant="outlined"
                                    helperText={errors.firstName}
                                    error={errors.firstName}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="lastName"
                                    label="Last Name"
                                    placeholder={"Potter"}
                                    fullWidth
                                    onChange={this.handleChange('lastName')}
                                    className={classes.textField}
                                    margin="dense"
                                    variant="outlined"
                                    helperText={errors.lastName}
                                    error={errors.lastName}
                                />
                            </Grid>
                        </Grid>
                        <TextField
                            id="email"
                            label="Email"
                            placeholder={"harry@hogwarts.edu"}
                            fullWidth
                            onChange={this.handleChange('email')}
                            className={classes.textField}
                            margin="dense"
                            variant="outlined"
                            helperText={errors.email}
                            error={errors.email}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            placeholder={"I l0v3 G1nny !!"}
                            fullWidth
                            onChange={this.handleChange('password')}
                            className={classes.textField}
                            margin="dense"
                            type={"password"}
                            variant="outlined"
                            helperText={errors.password}
                            error={errors.password}
                        />
                        {errors.general && (
                            <Typography color={"error"}>
                                {errors.general}
                            </Typography>
                        )}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={loading}
                        >
                            {loading ? (
                                <CircularProgress size={25} className={classes.spinner} color={"secondary"}/>
                            ) : "Create Account"}
                        </Button>
                    </form>
                </Paper>
            </Grid>

        )
    }
}

Signup.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    signupUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI,
});

export default connect(mapStateToProps, { signupUser })(withStyles(styles)(Signup));