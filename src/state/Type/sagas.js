import {
    all, call, put, takeEvery, takeLeading
} from 'redux-saga/effects';

import {
    getUpsDropdownSuccess,
    getUpsDropdownError,
    getAreasDropdownSuccess,
    getAreasDropdownError,
    getSegmentsDropdownSuccess,
    getSegmentsDropdownError,
    getFilesSuccess,
    getFilesError,
    getStatusesSuccess,
    getStatusesError,
    getSituationsSuccess,
    getSituationsError,
    getFilesRequest,
    getStatusesRequest,
    getAssignmentsTypesRequest,
    getAssignmentsTypesSuccess,
    getAssignmentsTypesError
} from '@state/Type/actions';
import {
    GET_AREAS_DROPDOWN_REQUEST,
    GET_UPS_DROPDOWN_REQUEST,
    GET_SEGMENTS_DROPDOWN_REQUEST,
    GET_FILES_REQUEST,
    GET_ASSIGNMENTS_TYPES_REQUEST,
    GET_STATUSES_REQUEST,
    GET_SITUATIONS_REQUEST
} from '@state/Type/types';
import {VALIDATE_SESSION_SUCCESS} from '@state/Session/types';
import {setNotification} from '@state/Common/actions';
import types from '@constants/notificationTypes';
import TypeService from '@services/type';

export function* getAllTypes() {
    yield put(getStatusesRequest());
    yield put(getFilesRequest());
    yield put(getAssignmentsTypesRequest());
}

export function* getUpsDropdown({state}) {
    try {
        const ups = yield call(TypeService.getUps, state);
        yield put(getUpsDropdownSuccess(ups));
    } catch (error) {
        yield put(getUpsDropdownError(error));
        yield put(setNotification({
            message: 'No se ha podido traer la lista de ups, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

export function* getAreasDropdown({state, ups}) {
    try {
        const areas = yield call(TypeService.getAreas, state, ups);
        yield put(getAreasDropdownSuccess(areas));
    } catch (error) {
        yield put(getAreasDropdownError(error));
        yield put(setNotification({
            message: 'No se ha podido traer la lista de areas, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

export function* getSegmentsDropdown({state, ups, area}) {
    try {
        const segments = yield call(TypeService.getSegments, state, ups, area);
        yield put(getSegmentsDropdownSuccess(segments));
    } catch (error) {
        yield put(getSegmentsDropdownError(error));
        yield put(setNotification({
            message: 'No se ha podido traer la lista de segmentos, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

export function* getFiles() {
    try {
        const files = yield call(TypeService.getFiles);
        yield put(getFilesSuccess(files));
    } catch (error) {
        yield put(getFilesError(error));
        yield put(setNotification({
            message: 'No se ha podido traer la lista de archivos, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

export function* getStatuses() {
    try {
        const statuses = yield call(TypeService.getStatuses);
        yield put(getStatusesSuccess(statuses));
    } catch (error) {
        yield put(getStatusesError(error));
        yield put(setNotification({
            message: 'No se ha podido traer la lista de estados, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

export function* getSituations({status}) {
    try {
        const situations = yield call(TypeService.getSituations, status);
        yield put(getSituationsSuccess(situations));
    } catch (error) {
        yield put(getSituationsError(error));
        yield put(setNotification({
            message: 'No se ha podido traer la lista de situaciones, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

export function* getAssignmentsTypes() {
    try {
        const assignmentsTypes = yield call(TypeService.getAssignmentsTypes);
        yield put(getAssignmentsTypesSuccess(assignmentsTypes));
    } catch (error) {
        yield put(getAssignmentsTypesError(error));
        yield put(setNotification({
            message: 'No se han podido traer los tipos de asignaciones, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

function* typeSaga() {
    yield all([
        takeEvery(GET_AREAS_DROPDOWN_REQUEST, getAreasDropdown),
        takeEvery(GET_UPS_DROPDOWN_REQUEST, getUpsDropdown),
        takeEvery(GET_SEGMENTS_DROPDOWN_REQUEST, getSegmentsDropdown),
        takeEvery(GET_FILES_REQUEST, getFiles),
        takeEvery(GET_STATUSES_REQUEST, getStatuses),
        takeEvery(GET_SITUATIONS_REQUEST, getSituations),
        takeLeading(VALIDATE_SESSION_SUCCESS, getAllTypes),
        takeEvery(GET_ASSIGNMENTS_TYPES_REQUEST, getAssignmentsTypes)
    ]);
}

export default typeSaga;
