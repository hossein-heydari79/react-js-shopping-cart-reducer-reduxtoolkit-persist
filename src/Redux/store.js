import { persistedReducer } from './rootReducers'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'

export const store = configureStore({
    reducer: persistedReducer
})

export let persistor = persistStore(store)

