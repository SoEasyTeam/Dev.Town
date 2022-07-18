import { combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';
import joinReducer from './joinReducer';
import searchReducer from './searchReducer'
import profileReducer from './profileReducer';


export default combineReducers({
    auth: authenticateReducer,
    join: joinReducer,
    search: searchReducer,
    profile: profileReducer,

});
