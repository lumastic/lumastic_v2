import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
// REDUX COMPONENTS
import { Provider } from 'react-redux';
import store from './redux/store';
import {SET_AUTHENTICATED, MOBILE, SET_DRAWER} from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";
// MUI COMPONENTS
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Home from "./components/Pages/Home";
import Navigation from "./components/Layout/Navigation";
import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";
import theme from "./components/Layout/Theme";
import AuthRoute from "./components/Authentication/AuthRoute"
import CommunityPage from "./components/Community/CommunityPage";

// SET TOKEN AUTHENTICATION
const token = localStorage.firebaseIdToken;
if(token) {
    const decodedToken = jwtDecode(token);
    if(decodedToken.exp * 1000 < Date.now()){
        store.dispatch(logoutUser());
        window.location.href = '/login';
    } else {
        store.dispatch({ type: SET_AUTHENTICATED });
        axios.defaults.headers.common['Authorization'] = token;
        store.dispatch(getUserData());
    }
}
// SET INITIAL UI SETTINGS
const screenWidth = window.innerWidth;
if(screenWidth){
    if(screenWidth < theme.breakpoints.width("md")) {
        store.dispatch({ type: MOBILE });
    } else {
        store.dispatch({ type: SET_DRAWER, payload: true });
    }
}

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <Router>
                    <Navigation>
                        <Switch>
                            <div className={"container"} >
                                <Route exact path="/" component={Home}/>
                                <AuthRoute exact path="/signup" component={Signup}/>
                                <AuthRoute exact path="/login" component={Login}/>
                            </div>
                            <Route path="/community/:id" component={CommunityPage}/>
                        </Switch>
                    </Navigation>
                </Router>
            </Provider>
        </MuiThemeProvider>
    );
}

export default App;
