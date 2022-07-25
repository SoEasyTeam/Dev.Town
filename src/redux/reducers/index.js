import { combineReducers } from 'redux';
import addProductReducer from './addProductReducer';
import authenticateReducer from './authenticateReducer';
import homeFeedReducer from './homeFeedReducer';
import joinReducer from './joinReducer';
import searchReducer from './searchReducer'
import profileReducer from './profileReducer';


export default combineReducers({
    auth: authenticateReducer,
    join: joinReducer,
    search: searchReducer,
    profile: profileReducer,
    addproduct: addProductReducer,
    homefeed: homeFeedReducer,

});
