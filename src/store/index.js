import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer, { REDUCER_NAME as USER_REDUCER_NAME } from './userReducer';
import listOrderReducer, {
  REDUCER_NAME as LISTORDER_REDUCE_NAME,
} from './listOrderReducer/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const rootReducers = combineReducers({
  [USER_REDUCER_NAME]: userReducer,
  [LISTORDER_REDUCE_NAME]: listOrderReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  enhancers: (defaultEnhancers) => {
    return [...defaultEnhancers];
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
