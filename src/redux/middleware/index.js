import {all} from 'redux-saga/effects';
import {watchFetchData} from './authSaga'

export default function* (){
  yield all([
    watchFetchData()
  ])
}