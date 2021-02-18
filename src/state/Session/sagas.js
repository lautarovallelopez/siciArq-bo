import {
    call, put, takeEvery, all
} from 'redux-saga/effects';

import SessionService from '@services/session';
import {
    getSessionUserSuccess, validateSessionSuccess, validateSessionError, getSessionUserError
} from '@state/Session/actions';
import {User} from '@model';
import {
    GET_SESSION_USER_REQUEST, SIGN_OUT_REQUESTED, VALIDATE_SESSION
} from '@state/Session/types';

export function* signOut() {
    yield call(SessionService.signOut);
}

export function* getSessionUser() {
    try {
        const {user} = yield call(SessionService.fetchCurrent);
        yield put(getSessionUserSuccess(new User(user)));
    } catch (error) {
        yield put(getSessionUserError(error));
    }
}

export function* validateSession({queryParams}) {
    try {
        yield call(SessionService.validateSession, queryParams);
        const profile = yield call(SessionService.getSession);
        yield put(getSessionUserSuccess(profile));
        yield put(validateSessionSuccess());
    } catch (error) {
        yield put(validateSessionError(error));
    }
}

function* sessionSaga() {
    yield all([
        takeEvery(GET_SESSION_USER_REQUEST, getSessionUser),
        takeEvery(SIGN_OUT_REQUESTED, signOut),
        takeEvery(VALIDATE_SESSION, validateSession)
    ]);
}

export default sessionSaga;
