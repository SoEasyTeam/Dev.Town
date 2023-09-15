import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistedReducer } from '@redux/reducers';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore } from 'redux-persist';

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export { store, persistor };
