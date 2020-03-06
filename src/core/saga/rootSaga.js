import {watchTestAsync} from './testSaga'
import { put, takeLatest, all } from 'redux-saga/effects';

export default function* () {

    yield all([
        watchTestAsync(),

    ])


  }