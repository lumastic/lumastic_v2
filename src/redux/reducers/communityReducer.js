import {COMMUNITY_ACTIONS} from '../types';

const initialState = {
    name: "",
    communityImage: "",
};

export default function (state = initialState, action) {
    switch (action.type) {
        case COMMUNITY_ACTIONS.SHOW:
            return{
                ...action.payload
            };
        default:
            return state;
    }
}