import { combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';
import joinReducer from './joinReducer';

export default combineReducers({
    auth: authenticateReducer,
    join: joinReducer,
});
