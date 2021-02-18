import {
    all, call, put, takeEvery
} from 'redux-saga/effects';

import {
    getFieldMaterialsSuccess,
    getFieldMaterialsError,
    getFieldMaterialsByStateSuccess,
    getFieldMaterialsByStateError,
    getFieldMaterialsByUpsSuccess,
    getFieldMaterialsByUpsError,
    getFieldMaterialsByAreaSuccess,
    getFieldMaterialsByAreaError
} from '@state/FieldMaterial/actions';
import {
    GET_FIELD_MATERIALS_REQUEST,
    GET_FIELD_MATERIALS_BY_STATE_REQUEST,
    GET_FIELD_MATERIALS_BY_UPS_REQUEST,
    GET_FIELD_MATERIALS_BY_AREA_REQUEST
} from '@state/FieldMaterial/types';

import {setNotification} from '@state/Common/actions';
import types from '@constants/notificationTypes';
import FieldMaterialService from '@services/fieldMaterial';

export function* getFieldMaterials() {
    try {
        const fieldMaterials = yield call(FieldMaterialService.getFieldMaterials);
        yield put(getFieldMaterialsSuccess(fieldMaterials));
    } catch (error) {
        yield put(getFieldMaterialsError(error));
        yield put(setNotification({
            message: 'No se ha podido traer la muestra, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

export function* getFieldMaterialsByState({state}) {
    try {
        const fieldMaterials = yield call(FieldMaterialService.getByState, state);
        yield put(getFieldMaterialsByStateSuccess(fieldMaterials));
    } catch (error) {
        yield put(getFieldMaterialsByStateError(error));
        yield put(setNotification({
            message: 'No se ha podido traer la muestra de ups, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

export function* getFieldMaterialsByUps({state, ups}) {
    try {
        const fieldMaterials = yield call(FieldMaterialService.getByUps, state, ups);
        yield put(getFieldMaterialsByUpsSuccess(fieldMaterials));
    } catch (error) {
        yield put(getFieldMaterialsByUpsError(error));
        yield put(setNotification({
            message: 'No se ha podido traer la muestra de areas, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

export function* getFieldMaterialsByArea({state, ups, area}) {
    try {
        const fieldMaterials = yield call(FieldMaterialService.getByArea, state, ups, area);
        yield put(getFieldMaterialsByAreaSuccess(fieldMaterials));
    } catch (error) {
        yield put(getFieldMaterialsByAreaError(error));
        yield put(setNotification({
            message: 'No se han podido traer la muestra de viviendas, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

function* fieldMaterialSaga() {
    yield all([
        takeEvery(GET_FIELD_MATERIALS_REQUEST, getFieldMaterials),
        takeEvery(GET_FIELD_MATERIALS_BY_STATE_REQUEST, getFieldMaterialsByState),
        takeEvery(GET_FIELD_MATERIALS_BY_UPS_REQUEST, getFieldMaterialsByUps),
        takeEvery(GET_FIELD_MATERIALS_BY_AREA_REQUEST, getFieldMaterialsByArea)
    ]);
}

export default fieldMaterialSaga;
