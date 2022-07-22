import { combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';
import joinReducer from './joinReducer';
import postReducer from './postReducer';
import profileReducer from './profileReducer';
import uploadFilesReducer from './uploadFilesReducer';

export default combineReducers({
    auth: authenticateReducer,
    join: joinReducer,
    profile: profileReducer,
    post: postReducer,
    upload: uploadFilesReducer
});
