import {put, takeLatest, call} from 'redux-saga/effects'
import {signUpSuccess, signUpFailure} from "../actions/authAction";
import {SIGN_UP_REQUEST} from "../constants";
import {api} from '../../service/auth';
import errorHandler from '../../service/apiErrorHandler'

export function* authSaga(action) {
  try{
    const response = yield call(api.auth, action.payload);
    yield put(signUpSuccess(response))
  } catch (e) {
    const error = errorHandler(e);
    yield put(signUpFailure(error))
  }
}

export function* watchFetchData() {
  yield takeLatest(SIGN_UP_REQUEST, authSaga)
}