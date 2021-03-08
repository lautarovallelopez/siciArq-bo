import { takeLatest, call, put } from 'redux-saga/effects';
import DiccionarioLinguisticoCreator, {
  diccionarioLinguisticoTypes,
} from 'store/diccionario-linguistico/actions';
import fetch from 'services/diccionario-linguistico';

const { diccionarioLinguisticoFetchSuccess } = DiccionarioLinguisticoCreator;
const { DICCIONARIO_LINGUISTICO_FETCH_REQUEST } = diccionarioLinguisticoTypes;
function* fetchDiccionariosLinguisticos({ page }) {
  const { diccionarios } = yield call(fetch, page);
  yield put(diccionarioLinguisticoFetchSuccess(diccionarios));
}

export function* diccionarioLinguisticoSaga() {
  yield takeLatest(DICCIONARIO_LINGUISTICO_FETCH_REQUEST, fetchDiccionariosLinguisticos);
}
