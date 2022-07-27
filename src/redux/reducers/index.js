import { combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';
import postReducer from './postReducer';
import homeFeedReducer from './homeFeedReducer';
import { joinReducer } from './joinReducer';
import { joinFinalReducer } from './joinReducer';
import searchReducer from './searchReducer';
import profileReducer from './profileReducer';
import commentReducer from './commentReducer';
import commentListReducer from './commentListReducer';
import productReducer from './productReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    // 새로운 persist config를 선언해준다.
    key: 'root',
    // reducer 객체의 어느 지점에서 부터 데이터를 저장할 것인지 설정해주는것이 key이다.
    // root부터 시작한다고 지정해준다.
    storage: storage,
    // 위에 import 한 성격의 storage를 지정해준다.
    whitelist: 'authenticateReducer',
    // 유지 및 보존하고 싶은 데이터를 배열안에 지정해준다.
    // string 형태이고 아래 combineReducers에 지정된 값들을 사용해주면 된다.
};

const rootReducer = combineReducers({
    auth: authenticateReducer,
    join: joinReducer,
    joinfinal: joinFinalReducer,
    search: searchReducer,
    profile: profileReducer,
    post: postReducer,
    product: productReducer,
    homefeed: homeFeedReducer,
    comment: commentReducer,
    commentList: commentListReducer,
});

export default persistReducer(persistConfig, rootReducer);
