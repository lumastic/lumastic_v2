import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_DRAWER, MOBILE } from "../types";

const initialState = {
    loading: false,
    errors: {},
    mobile: false,
    drawerOpen: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                loading: false,
                errors: {}
            };
        case LOADING_UI:
            return {
                ...state,
                loading: true,
            };
        case SET_DRAWER:
            return {
                ...state,
                drawerOpen: action.payload,
            };
        case MOBILE:
            return {
                ...state,
                mobile: true,
            };
        default:
            return state;
    }
}