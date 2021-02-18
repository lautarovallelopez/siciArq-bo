import {
    all, call, put, takeLeading
} from 'redux-saga/effects';

import {getStaticDataSuccess, getStaticDataError} from '@state/StaticData/actions';
import {VALIDATE_SESSION_SUCCESS} from '@state/Session/types';
import StaticDataService from '@services/staticData';

export function* getStaticData() {
    try {
        const staticData = yield call(StaticDataService.fetch);
        yield put(getStaticDataSuccess(staticData));
    } catch (error) {
        yield put(getStaticDataError(error));
    }
}

function* staticDataSaga() {
    yield all([
        takeLeading(VALIDATE_SESSION_SUCCESS, getStaticData)
    ]);
}

export default staticDataSaga;
