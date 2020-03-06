
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga'
import reducer from "../reducers"
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)

export default store;