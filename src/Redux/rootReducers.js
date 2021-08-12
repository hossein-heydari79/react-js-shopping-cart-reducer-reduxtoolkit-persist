import cardlistReducer from './cardlistReducer'
import dataModalReducer from './dataModalReducer'
import filterReducer from './filterReducer'
import modeReducer from './modeReducer'
import showReducer from './showReducer'

import { combineReducers } from '@reduxjs/toolkit'

export const reducers = combineReducers({
    cardlist: cardlistReducer,
    datamodal: dataModalReducer,
    filter: filterReducer,
    mode: modeReducer,
    show: showReducer
})