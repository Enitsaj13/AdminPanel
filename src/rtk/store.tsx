import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';

import storage from '@/utils/createWebStorage';
import themeReducer from '@/rtk/features/themeSlice';
import authReducer from './features/authSlice';
import navReducer from '@/rtk/features/navSlice';
import testReducer from '@/rtk/features/testSlice';
import buyReducer from '@/rtk/features/buySlice';
import sellReducer from '@/rtk/features/sellSlice';
import repairReducer from '@/rtk/features/repairSlice';
import adminReducer from '@/rtk/features/admin/adminSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['test'], // include slice name to persist
};

const reducers = combineReducers({
  test: testReducer,
  theme: themeReducer,
  nav: navReducer,
  buy: buyReducer,
  sell: sellReducer,
  repair: repairReducer,
  auth: authReducer,
  admin: adminReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
