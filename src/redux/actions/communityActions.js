import {COMMUNITY_ACTIONS, CLEAR_ERRORS, LOADING_UI, SET_ERRORS} from "../types";
import axios from "axios";
import { COMMUNITY } from "../../constants/links";

export const createCommunity = (newCommunity, history) => (dispatch) => {
    dispatch({ type: LOADING_UI, });
    axios.post('/communities/create', newCommunity)
        .then(resp => {
            dispatch({ type: CLEAR_ERRORS });
            history.push(`${COMMUNITY}+${resp.data.id}`);
            console.log(resp.data);
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data,
            })
        });
};

export const getCommunity = (communityId) => (dispatch) => {
    console.log("Testing 1234");
    dispatch({ type: LOADING_UI, });
    axios.get(`/community/${communityId}`)
        .then(resp => {
            dispatch({ type: CLEAR_ERRORS });
            console.log(resp.data);
            dispatch({
                type: COMMUNITY_ACTIONS.SHOW,
                payload: resp.data,
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data,
            })
        });
};