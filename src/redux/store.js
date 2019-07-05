import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import communityReducer from './reducers/communityReducer';
import uiReducer from './reducers/uiReducer';

const initialState = {};
const middleware = [thunk];

const reducers = combineReducers({
    user: userReducer,
    community: communityReducer,
    UI: uiReducer,
});


const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.navigator.userAgent.includes('Chrome') ?
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose
    )
);

export default store;