import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from './../reducers'

const middlewares = [thunk]

export default createStore(
  RootReducer,
  applyMiddleware(...middlewares)
)