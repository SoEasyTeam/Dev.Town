import { combineReducers } from 'redux';
import addProductReducer from './addProductReducer';
import authenticateReducer from './authenticateReducer';
import homeFeedReducer from './homeFeedReducer';
import joinReducer from './joinReducer';
import profileReducer from './profileReducer';

export default combineReducers({
    auth: authenticateReducer,
    join: joinReducer,
    profile: profileReducer,
    addproduct: addProductReducer,
    homefeed: homeFeedReducer,
});
