import { takeLatest, call, put } from 'redux-saga/effects';
import DiccionarioLinguisticoCreator, { diccionarioLinguisticoTypes } from 'store/diccionario-linguistico/actions';
import DiccionarioLinguisticoService from 'services/diccionario-linguistico';
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

export function* diccionarioLinguisticoSaga() {
  yield takeLatest(diccionarioLinguisticoTypes.DICCIONARIO_LINGUISTICO_FETCH_REQUEST, validate);
}
