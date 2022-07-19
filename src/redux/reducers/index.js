import { combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';
import joinReducer from './joinReducer';
import profileReducer from './profileReducer';

export default combineReducers({
    auth: authenticateReducer,
    join: joinReducer,
    profile: profileReducer,
});
