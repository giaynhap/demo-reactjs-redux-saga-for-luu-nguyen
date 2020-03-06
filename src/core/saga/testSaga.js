import { put, takeEvery } from 'redux-saga/effects'
//test
const delay = (ms) => new Promise(res => setTimeout(res, ms))


export function *testAsync()
{
    
    yield put({ type: 'INCREMENT' })
}

export function* watchTestAsync() {
    yield takeEvery('INCREMENT_ASYNC', testAsync)
  }