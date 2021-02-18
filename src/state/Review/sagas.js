import {
    all, call, put, takeEvery
} from 'redux-saga/effects';

import types from '@constants/notificationTypes';
import {
    approveSurveySuccess,
    approveSurveyError,
    finishSurveySuccess,
    finishSurveyError,
    getSurveysSuccess,
    getSurveysError,
    getSurveySuccess,
    getSurveyError,
    getAddressSuccess,
    getAddressError,
    reassignSurveySuccess,
    reassignSurveyError,
    reopenSurveySuccess,
    reopenSurveyError,
    superviseSurveySuccess,
    superviseSurveyError,
    recoverSurveySuccess,
    recoverSurveyError
} from '@state/Review/actions';
import {
    APPROVE_SURVEY_REQUEST,
    FINISH_SURVEY_REQUEST,
    GET_SURVEYS_REQUEST,
    GET_SURVEY_REQUEST,
    GET_ADDRESS_REQUEST,
    REASSIGN_SURVEY_REQUEST,
    REOPEN_SURVEY_REQUEST,
    SUPERVISE_SURVEY_REQUEST,
    RECOVER_SURVEY_REQUEST
} from '@state/Review/types';
import SurveyService from '@services/survey';
import {setNotification} from '@state/Common/actions';

export function* getSurveys({
    state, ups, area, status, situation, teamLeader, pollster, skip
}) {
    try {
        const {surveys, count} = yield call(SurveyService.getSurveys, state, ups, area, status, situation, teamLeader, pollster, skip);
        yield put(getSurveysSuccess(surveys, count || 0));
    } catch (error) {
        yield put(getSurveysError(error));
        yield put(setNotification({
            message: 'No se ha podido traer la lista de encuestas, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

export function* getSurvey({id}) {
    try {
        const survey = yield call(SurveyService.getSurvey, id);
        yield put(getSurveySuccess(survey));
    } catch (error) {
        yield put(getSurveyError(error));
        yield put(setNotification({
            message: 'No se ha podido traer la encuesta, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

export function* getAddress({id}) {
    try {
        const address = yield call(SurveyService.getAddress, id);
        yield put(getAddressSuccess(address));
    } catch (error) {
        yield put(getAddressError(error));
        yield put(setNotification({
            message: 'No se ha podido traer la encuesta, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

export function* finishSurvey({id, addressId}) {
    try {
        yield call(SurveyService.finishSurvey, addressId);
        yield put(finishSurveySuccess());
        const survey = yield call(SurveyService.getSurvey, id);
        yield put(getSurveySuccess(survey));
        yield put(setNotification({
            message: 'La encuesta fue finalizada correctamente.',
            notificationType: types.SUCCESS
        }));
    } catch (error) {
        yield put(finishSurveyError(error));
        yield put(setNotification({
            message: 'No se ha podido finalizar la encuesta, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

export function* reassignSurvey({id, addressId, user}) {
    try {
        yield call(SurveyService.reassignSurvey, addressId, user);
        yield put(reassignSurveySuccess());
        const survey = yield call(SurveyService.getSurvey, id);
        yield put(getSurveySuccess(survey));
        yield put(setNotification({
            message: 'La encuesta fue reasignada correctamente.',
            notificationType: types.SUCCESS
        }));
    } catch (error) {
        yield put(reassignSurveyError(error));
        yield put(setNotification({
            message: 'No se ha podido reasignar la encuesta, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

export function* approveSurvey({id, addressId}) {
    try {
        yield call(SurveyService.approveSurvey, addressId);
        yield put(approveSurveySuccess());
        const survey = yield call(SurveyService.getSurvey, id);
        yield put(getSurveySuccess(survey));
        yield put(setNotification({
            message: 'La encuesta fue aprobada correctamente.',
            notificationType: types.SUCCESS
        }));
    } catch (error) {
        yield put(approveSurveyError(error));
        yield put(setNotification({
            message: 'No se ha podido aprobar la encuesta, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

export function* reopenSurvey({id, addressId}) {
    try {
        yield call(SurveyService.reopenSurvey, addressId);
        yield put(reopenSurveySuccess());
        const survey = yield call(SurveyService.getSurvey, id);
        yield put(getSurveySuccess(survey));
        yield put(setNotification({
            message: 'La encuesta fue reabierta correctamente.',
            notificationType: types.SUCCESS
        }));
    } catch (error) {
        yield put(reopenSurveyError(error));
        yield put(setNotification({
            message: 'No se ha podido reabrir la encuesta, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

export function* superviseSurvey({id, addressId, user}) {
    try {
        yield call(SurveyService.superviseSurvey, addressId, user);
        yield put(superviseSurveySuccess());
        const survey = yield call(SurveyService.getSurvey, id);
        yield put(getSurveySuccess(survey));
        yield put(setNotification({
            message: 'La encuesta fue enviada a supervisión correctamente.',
            notificationType: types.SUCCESS
        }));
    } catch (error) {
        yield put(superviseSurveyError(error));
        yield put(setNotification({
            message: 'No se ha podido enviar la encuesta a supervisión, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

export function* recoverSurvey({id, addressId}) {
    try {
        yield call(SurveyService.recoverSurvey, addressId);
        yield put(recoverSurveySuccess());
        const survey = yield call(SurveyService.getSurvey, id);
        yield put(getSurveySuccess(survey));
        yield put(setNotification({
            message: 'La encuesta fue recuperada correctamente.',
            notificationType: types.SUCCESS
        }));
    } catch (error) {
        yield put(recoverSurveyError(error));
        yield put(setNotification({
            message: 'No se ha podido recuperar la encuesta, intente más tarde.',
            notificationType: types.ERROR
        }));
    }
}

function* surveySaga() {
    yield all([
        takeEvery(FINISH_SURVEY_REQUEST, finishSurvey),
        takeEvery(GET_SURVEYS_REQUEST, getSurveys),
        takeEvery(GET_SURVEY_REQUEST, getSurvey),
        takeEvery(GET_ADDRESS_REQUEST, getAddress),
        takeEvery(FINISH_SURVEY_REQUEST, finishSurvey),
        takeEvery(REASSIGN_SURVEY_REQUEST, reassignSurvey),
        takeEvery(APPROVE_SURVEY_REQUEST, approveSurvey),
        takeEvery(REOPEN_SURVEY_REQUEST, reopenSurvey),
        takeEvery(SUPERVISE_SURVEY_REQUEST, superviseSurvey),
        takeEvery(RECOVER_SURVEY_REQUEST, recoverSurvey)
    ]);
}

export default surveySaga;
