import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducer } from './reducer';

const persistConfig = {
    key: 'todoS',
    storage,
    blackList: ['counter'],
    whiteList: ['']
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(store)

// console.log('store', store)

