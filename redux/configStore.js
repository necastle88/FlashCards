import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './reducers/index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [thunkMiddleware]

export const store = createStore(persistedReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)

