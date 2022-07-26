import { combineReducers } from 'redux';
import productReducer from './productReducer';
import authenticateReducer from './authenticateReducer';
import homeFeedReducer from './homeFeedReducer';
import { joinReducer } from './joinReducer';
import { joinFinalReducer } from './joinReducer';
import searchReducer from './searchReducer';
import profileReducer from './profileReducer';
import commentReducer from './commentReducer'

export default combineReducers({
    auth: authenticateReducer,
    join: joinReducer,
    joinfinal: joinFinalReducer,
    search: searchReducer,
    profile: profileReducer,
    product: productReducer,
    homefeed: homeFeedReducer,
    comment:commentReducer,
});
