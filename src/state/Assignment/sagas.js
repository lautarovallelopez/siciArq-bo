import {
    all, call, put, takeEvery, select
} from 'redux-saga/effects';
import pluralize from 'pluralize';

import {
    getAssignmentsSuccess,
    getAssignmentsError,
    updateAssignmentsSuccess,
    updateAssignmentsError,
    unsetToAssign
} from '@state/Assignment/actions';
import {
    GET_ASSIGNMENTS_REQUEST,
    UPDATE_ASSIGNMENTS_REQUEST
} from '@state/Assignment/types';
import {getAssignmentsToUpdate} from '@state/Assignment/selectors';
import AssignmentService from '@services/assignment';
import {setNotification} from '@state/Common/actions';
import types from '@constants/notificationTypes';

export function* getAssignments({
    state, ups, area, segment, skip, assignmentType
}) {
    try {
        const {results, count} = yield call(AssignmentService.getAssignments, state, ups, area, segment, skip, assignmentType);
        yield put(getAssignmentsSuccess(results, count));
    } catch (error) {
        yield put(getAssignmentsError(error));
        yield put(setNotification({
            message: 'No se ha podido traer la lista de asignaciones, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

export function* updateAssignments({assignmentType}) {
    const assignments = yield select(getAssignmentsToUpdate);
    try {
        yield call(AssignmentService.updateAssignments, assignments, assignmentType);
        yield put(updateAssignmentsSuccess());
        yield put(unsetToAssign());
        yield put(setNotification({
            message: `${pluralize('La', assignments.length)} 
            ${pluralize('asignación', assignments.length)} 
            se ${pluralize('ha', assignments.length)} realizado de forma correcta.`,
            notificationType: types.SUCCESS
        }));
    } catch (error) {
        yield put(updateAssignmentsError(error));
        yield put(setNotification({
            message: `No se ha podido realizar ${pluralize('la', assignments.length)} 
            ${pluralize('asignacion', assignments.length)}, intente más tarde.`,
            notificationType: types.ERROR
        }));
    }
}

function* assignmentSaga() {
    yield all([
        takeEvery(GET_ASSIGNMENTS_REQUEST, getAssignments),
        takeEvery(UPDATE_ASSIGNMENTS_REQUEST, updateAssignments)
    ]);
}

export default assignmentSaga;
