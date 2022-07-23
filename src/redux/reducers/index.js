import { combineReducers } from 'redux';
import addProductReducer from './addProductReducer';
import authenticateReducer from './authenticateReducer';
import homeFeedReducer from './homeFeedReducer';
import { joinReducer } from './joinReducer';
import { joinFinalReducer } from './joinReducer';
import profileReducer from './profileReducer';

export default combineReducers({
    auth: authenticateReducer,
    join: joinReducer,
    joinfianl: joinFinalReducer,
    profile: profileReducer,
    addproduct: addProductReducer,
    homefeed: homeFeedReducer,
});
