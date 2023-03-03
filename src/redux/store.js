import createSagaMiddleware from  'redux-saga';
import  userReducer from './Reducers';
import teaReducer from "./teaReducer";
import rootSaga from '../saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {applyMiddleware, combineReducers, createStore} from "redux";

const sagaMiddleware=createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  blacklist:['userReducer']
}
const reducer=combineReducers({
  userReducer,
  teaReducer
});
const persistedReducer = persistReducer(persistConfig,reducer);
const store=createStore(persistedReducer,applyMiddleware(sagaMiddleware));
export let persistor = persistStore(store)

sagaMiddleware.run(rootSaga);

export default store;