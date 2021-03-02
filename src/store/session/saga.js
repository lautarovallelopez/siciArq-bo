import { takeLatest, call, put } from 'redux-saga/effects';
import sessionCreator, { sessionTypes } from 'store/session/actions';
import validateSession from 'services/session';
import { setSession, setToken } from 'services/storage';
import { push } from 'connected-react-router';

export function* validate({ queryParams }) {
  try {
    const { success, accessToken, user } = yield call(validateSession, queryParams);
    if (success) {
      setToken(accessToken);
      setSession(user);
      yield put(sessionCreator.sessionValidateSuccess(user));
      yield put(push('/'));
    } else {
      window.location = process.env.REACT_APP_AUTH_LOGIN;
    }
  } catch (error) {
    yield put(sessionCreator.sessionValidateError(error));
  }
}

export function* sessionSaga() {
  yield takeLatest(sessionTypes.SESSION_VALIDATE_REQUEST, validate);
}
