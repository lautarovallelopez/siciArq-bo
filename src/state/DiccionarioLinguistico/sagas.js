import {
    all, select, call, put, takeEvery
} from 'redux-saga/effects';
import DiccionarioLinguisticoService from '@services/diccionarioLinguistico';
import {
    fetchDiccionariosLinguisticosSucceeded,
    fetchDiccionariosLinguisticosRequested,
    fetchOneDiccionarioLinguisticoSucceeded,
    submitDiccionarioLinguisticoSucceeded,
    deleteDiccionarioLinguisticoSucceeded
} from '@state/DiccionarioLinguistico/actions';
import {
    FETCH_DICCIONARIOS_LINGUISTICOS_REQUESTED,
    DELETE_DICCIONARIO_LINGUISTICO_REQUESTED,
    FETCH_ONE_DICCIONARIO_LINGUISTICO_REQUESTED,
    SUBMIT_DICCIONARIO_LINGUISTICO_REQUESTED
} from '@state/DiccionarioLinguistico/types';

function* fetchDiccionariosLinguisticos({page}) {
    const result = yield call(DiccionarioLinguisticoService.fetch, page);
    yield put(fetchDiccionariosLinguisticosSucceeded(result));
}

function* deleteDiccionarioLinguistico({ids}){
    const {page} = yield select(state=>state.diccionarioLinguistico);
    const result = yield call(DiccionarioLinguisticoService.delete, ids);
    yield put(deleteDiccionarioLinguisticoSucceeded(result))
    yield put(fetchDiccionariosLinguisticosRequested(page));
}

function* fetchOneDiccionario({ids}){
    const {diccionario} = yield call(DiccionarioLinguisticoService.fetchOne, ids);
    yield put(fetchOneDiccionarioLinguisticoSucceeded(diccionario));
}
function* submitDiccionarioLinguistico(){
    const {diccionarioActual} = yield select(state=>state.diccionarioLinguistico);
    console.lof
    const response = yield call(DiccionarioLinguisticoService.submit, diccionarioActual);
    yield put(submitDiccionarioLinguisticoSucceeded(response));
}

function* diccionarioLinguistico() {
    yield all([
        takeEvery(FETCH_DICCIONARIOS_LINGUISTICOS_REQUESTED, fetchDiccionariosLinguisticos),
        takeEvery(DELETE_DICCIONARIO_LINGUISTICO_REQUESTED, deleteDiccionarioLinguistico),
        takeEvery(FETCH_ONE_DICCIONARIO_LINGUISTICO_REQUESTED, fetchOneDiccionario),
        takeEvery(SUBMIT_DICCIONARIO_LINGUISTICO_REQUESTED, submitDiccionarioLinguistico)
    ]);
}

export default diccionarioLinguistico;
