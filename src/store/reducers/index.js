import { combineReducers } from 'redux'
import waiterReducer from './waiterReducer'
import orderReducer from './orderReducer'
import tableReducer from './tableReducer'
import dishReducer from './dishReducer'

export const rootReducer = combineReducers({
    waiter: waiterReducer,
    order: orderReducer,
    table: tableReducer,
    dish: dishReducer,
  })