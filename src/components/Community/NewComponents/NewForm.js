import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/es/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/es/CircularProgress";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createCommunity} from "../../../redux/actions/communityActions";

const styles = {
    symbol: {
        width: 60,
        marginBottom: 5,
    },
    formContainer: {
        width: "100%",
    },
    header: {
        marginTop: 10,
    },
    submit: {
        marginTop: "1rem",
    },
};

class NewForm extends Component {
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
        const newCommunity = {
            name: this.state.name,
            description: this.state.description,
        };
        this.props.createCommunity(newCommunity, this.props.history);
        console.log(this.state);
    };
    render() {
        const {classes} = this.props;
        const errors = false;
        const loading = false;
        return (
            <div>
                <Typography variant={"h4"} gutterBottom className={classes.header}>Let's get started!</Typography>
                <form className={classes.formContainer} onSubmit={this.handleSubmit}>
                    <TextField
                        id="name"
                        label="Community Name"
                        placeholder={"Baking"}
                        fullWidth
                        onChange={this.handleChange('name')}
                        className={classes.textField}
                        margin="dense"
                        variant="outlined"
                        helperText={errors.name}
                        error={errors.name}
                    />
                    <TextField
                        id="description"
                        label="Description"
                        placeholder={"Are you a friend of flour, water, salt, and yeast?  Then this community is for you!  Join and let's grow as bakers together!"}
                        fullWidth
                        onChange={this.handleChange('description')}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        multiline
                        rows={"4"}
                        helperText={errors.description}
                        error={errors.description}
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
                        ) : "Create Community"}
                    </Button>
                </form>
            </div>
        )
    }
}

NewForm.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    createCommunity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI,
});

export default connect(mapStateToProps, { createCommunity })(withStyles(styles)(NewForm));