import { SET_DRAWER } from "../types";

export const drawerAction = (term = null) => {
    return {
        type: SET_DRAWER,
        payload: term,
    }
};