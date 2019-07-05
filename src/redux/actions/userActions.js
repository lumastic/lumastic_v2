import {SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED} from "../types";
import axios from "axios";

const setAuthorizationHeader = (token) => {
    const firebaseIdToken = `Bearer ${token}`;
    localStorage.setItem('firebaseIdToken', firebaseIdToken);
    axios.defaults.headers.common['Authorization'] = firebaseIdToken;
};

export const signupUser = (newUser, history) => (dispatch) => {
    dispatch({ type: LOADING_UI, });
    axios.post('/signup', newUser)
        .then(resp => {
            setAuthorizationHeader(resp.data.token);
            dispatch(getUserData());
            dispatch({ type: CLEAR_ERRORS });
            history.push('/');
            console.log(resp.data);
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data })
        });
};

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI, });
    axios.post('/login', userData)
        .then(resp => {
            setAuthorizationHeader(resp.data.token);
            dispatch(getUserData());
            dispatch({ type: CLEAR_ERRORS });
            history.push('/');
            console.log(resp.data);
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data })
        });
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem("firebaseIdToken");
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
};

export const getUserData = () => dispatch => {
    axios.get('/user')
        .then(resp => {
            dispatch({
                type: SET_USER,
                payload: resp.data,
            })
        })
};