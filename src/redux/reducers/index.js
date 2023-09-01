import { combineReducers } from 'redux';
import { authenticateReducer, tokenValidReducer } from './authenticateReducer';
import {
    postReducer,
    getPostReducer,
    getMyPostReducer,
    deletePostReducer,
} from './postReducer';
import homeFeedReducer from './homeFeedReducer';
import { joinReducer } from './joinReducer';
import { joinFinalReducer } from './joinReducer';
import searchReducer from './searchReducer';
import profileReducer from './profileReducer';
import { writeCommentReducer, commentListReducer } from './commentListReducer';
import productReducer from './productReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    auth: authenticateReducer,
    token: tokenValidReducer,
    join: joinReducer,
    joinfinal: joinFinalReducer,
    search: searchReducer,
    profile: profileReducer,
    post: postReducer,
    getPost: getPostReducer,
    getMyPost: getMyPostReducer,
    deletePost: deletePostReducer,
    product: productReducer,
    homefeed: homeFeedReducer,
    writeComment: writeCommentReducer,
    commentList: commentListReducer,
});

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export { persistedReducer, rootReducer };
