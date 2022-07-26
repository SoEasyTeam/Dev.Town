import { combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';
import postReducer from './postReducer';
import homeFeedReducer from './homeFeedReducer';
import { joinReducer } from './joinReducer';
import { joinFinalReducer } from './joinReducer';
import searchReducer from './searchReducer';
import profileReducer from './profileReducer';
import commentReducer from './commentReducer'
import commentListReducer from './commentListReducer'
import productReducer from './productReducer';

export default combineReducers({
    auth: authenticateReducer,
    join: joinReducer,
    joinfinal: joinFinalReducer,
    search: searchReducer,
    profile: profileReducer,
    post: postReducer,
    product: productReducer,
    homefeed: homeFeedReducer,
    comment:commentReducer,
    commentList:commentListReducer,
});
