import { ALERT_TYPES } from '../types';

export default function (state = {}, action) {
    switch (action.type) {
        case ALERT_TYPES.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            };
        case ALERT_TYPES.ERROR:
            return {
                type: 'alert-danger',
                message: action.message
            };
        case ALERT_TYPES.CLEAR:
            return {};
        default:
            return state
    }
}