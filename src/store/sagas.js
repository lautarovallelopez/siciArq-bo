import { all } from 'redux-saga/effects';
import { sessionSaga } from 'store/session/saga';
import { diccionarioLinguisticoSaga } from 'store/diccionario-linguistico/saga';

export default function* rootSaga() {
  yield all([sessionSaga(), diccionarioLinguisticoSaga()]);
}
