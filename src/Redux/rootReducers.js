import cardlistReducer from './cardlistReducer'
import dataModalReducer from './dataModalReducer'
import filterReducer from './filterReducer'
import modeReducer from './modeReducer'
import showReducer from './showReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'


const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    cardlist: cardlistReducer,
    datamodal: dataModalReducer,
    filter: filterReducer,
    mode: modeReducer,
    show: showReducer
})

export const persistedReducer = persistReducer(persistConfig, reducers)
