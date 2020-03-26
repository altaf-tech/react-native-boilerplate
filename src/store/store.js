import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import {uiReducer} from '../reducers/index';
import {logger} from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  whitelist: [],
  storage: AsyncStorage,
};

const middleware = [thunk];

if (__DEV__) {
  middleware.push(logger);
}

let composeEnhancers = composeWithDevTools({
  // Options: https://github.com/jhen0409/react-native-debugger#options
})(applyMiddleware(...middleware));

const reducers = combineReducers({ui: uiReducer});
const appReducer = persistReducer(persistConfig, reducers);
const store = createStore(appReducer, composeEnhancers);
persistStore(store);

export default store;
