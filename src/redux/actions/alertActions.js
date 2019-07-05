import { ALERT_TYPES } from '../types';

export const success = (message) => (dispatch) => {
    dispatch( { type: ALERT_TYPES.SUCCESS, message } );
};

export const error = (message) => (dispatch) => {
    dispatch( { type: ALERT_TYPES.ERROR, message } );
};

export const clear = (message) => (dispatch) => {
    dispatch( { type: ALERT_TYPES.CLEAR, message } );
};