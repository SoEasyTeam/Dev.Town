import { combineReducers } from 'redux';
import productReducer from './productReducer';
import authenticateReducer from './authenticateReducer';
import postReducer from './postReducer';
import homeFeedReducer from './homeFeedReducer';
import { joinReducer } from './joinReducer';
import { joinFinalReducer } from './joinReducer';
import searchReducer from './searchReducer';
import profileReducer from './profileReducer';


export default combineReducers({
    auth: authenticateReducer,
    join: joinReducer,
    joinfinal: joinFinalReducer,
    search: searchReducer,
    profile: profileReducer,
    post: postReducer,
    addproduct: addProductReducer,
    product: productReducer,
    homefeed: homeFeedReducer,
});
