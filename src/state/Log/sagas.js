import {
    all, call, put, takeEvery
} from 'redux-saga/effects';

import {getLogsSuccess, getLogsError} from '@state/Log/actions';
import {GET_LOGS_REQUEST} from '@state/Log/types';
import LogService from '@services/log';
import {setNotification} from '@state/Common/actions';
import types from '@constants/notificationTypes';

export function* getLogs({
    state, term, role, fromDate, toDate, skip
}) {
    try {
        const {logs, count} = yield call(LogService.getLogs, state, term, role, fromDate, toDate, skip);
        yield put(getLogsSuccess(logs, count));
    } catch (error) {
        yield put(getLogsError(error));
        yield put(setNotification({
            message: 'No se ha podido traer la lista de sincronizaciones, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

function* logSaga() {
    yield all([
        takeEvery(GET_LOGS_REQUEST, getLogs)
    ]);
}

export default logSaga;
