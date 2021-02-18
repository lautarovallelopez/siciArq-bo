import {combineReducers} from 'redux';

import {
    GET_SURVEYS_REQUEST,
    GET_SURVEYS_SUCCESS,
    GET_SURVEYS_ERROR,
    GET_SURVEY_REQUEST,
    GET_SURVEY_SUCCESS,
    GET_SURVEY_ERROR,
    GET_ADDRESS_REQUEST,
    GET_ADDRESS_SUCCESS,
    GET_ADDRESS_ERROR,
    FINISH_SURVEY_REQUEST,
    FINISH_SURVEY_SUCCESS,
    FINISH_SURVEY_ERROR,
    REASSIGN_SURVEY_REQUEST,
    REASSIGN_SURVEY_SUCCESS,
    REASSIGN_SURVEY_ERROR,
    APPROVE_SURVEY_REQUEST,
    APPROVE_SURVEY_SUCCESS,
    APPROVE_SURVEY_ERROR,
    REOPEN_SURVEY_REQUEST,
    REOPEN_SURVEY_SUCCESS,
    REOPEN_SURVEY_ERROR,
    SUPERVISE_SURVEY_REQUEST,
    SUPERVISE_SURVEY_SUCCESS,
    SUPERVISE_SURVEY_ERROR,
    RECOVER_SURVEY_REQUEST,
    RECOVER_SURVEY_SUCCESS,
    RECOVER_SURVEY_ERROR
} from '@state/Review/types';

import {requestError, requestStart, requestSuccess} from '../../util/state';

export const getSurveys = (state = {
    surveys: [], count: undefined, loading: false, requested: false
}, action) => {
    switch (action.type) {
        case GET_SURVEYS_REQUEST:
            return requestStart(undefined, {surveys: [], count: undefined});
        case GET_SURVEYS_SUCCESS: {
            return requestSuccess(undefined, {surveys: action.surveys, count: action.count});
        }
        case GET_SURVEYS_ERROR:
            return requestError(action, {surveys: [], count: undefined});
        default:
            return state;
    }
};

export const getSurvey = (state = {
    survey: undefined, loading: false, requested: false
}, action) => {
    switch (action.type) {
        case GET_SURVEY_REQUEST:
            return requestStart(undefined, {survey: undefined});
        case GET_SURVEY_SUCCESS:
            return requestSuccess(undefined, {survey: action.survey});
        case GET_SURVEY_ERROR:
            return requestError(action, {survey: undefined});
        default:
            return state;
    }
};

export const getAddress = (state = {
    address: undefined, loading: false, requested: false
}, action) => {
    switch (action.type) {
        case GET_ADDRESS_REQUEST:
            return requestStart(undefined, {address: undefined});
        case GET_ADDRESS_SUCCESS:
            return requestSuccess(undefined, {address: action.address});
        case GET_ADDRESS_ERROR:
            return requestError(action, {address: undefined});
        default:
            return state;
    }
};

export const finishSurvey = (state = {
    loading: false, requested: false
}, action) => {
    switch (action.type) {
        case FINISH_SURVEY_REQUEST:
            return requestStart();
        case FINISH_SURVEY_SUCCESS:
            return requestSuccess();
        case FINISH_SURVEY_ERROR:
            return requestError(action);
        default:
            return state;
    }
};

export const approveSurvey = (state = {
    loading: false, requested: false
}, action) => {
    switch (action.type) {
        case APPROVE_SURVEY_REQUEST:
            return requestStart();
        case APPROVE_SURVEY_SUCCESS:
            return requestSuccess();
        case APPROVE_SURVEY_ERROR:
            return requestError(action);
        default:
            return state;
    }
};

export const reassignSurvey = (state = {
    loading: false, requested: false
}, action) => {
    switch (action.type) {
        case REASSIGN_SURVEY_REQUEST:
            return requestStart();
        case REASSIGN_SURVEY_SUCCESS:
            return requestSuccess();
        case REASSIGN_SURVEY_ERROR:
            return requestError(action);
        default:
            return state;
    }
};

export const reopenSurvey = (state = {
    loading: false, requested: false
}, action) => {
    switch (action.type) {
        case REOPEN_SURVEY_REQUEST:
            return requestStart();
        case REOPEN_SURVEY_SUCCESS:
            return requestSuccess();
        case REOPEN_SURVEY_ERROR:
            return requestError(action);
        default:
            return state;
    }
};

export const superviseSurvey = (state = {
    loading: false, requested: false
}, action) => {
    switch (action.type) {
        case SUPERVISE_SURVEY_REQUEST:
            return requestStart();
        case SUPERVISE_SURVEY_SUCCESS:
            return requestSuccess();
        case SUPERVISE_SURVEY_ERROR:
            return requestError(action);
        default:
            return state;
    }
};

export const recoverSurvey = (state = {
    loading: false, requested: false
}, action) => {
    switch (action.type) {
        case RECOVER_SURVEY_REQUEST:
            return requestStart();
        case RECOVER_SURVEY_SUCCESS:
            return requestSuccess();
        case RECOVER_SURVEY_ERROR:
            return requestError(action);
        default:
            return state;
    }
};

const surveyReducer = combineReducers({
    approveSurvey, finishSurvey, getSurveys, getSurvey, getAddress, reassignSurvey, reopenSurvey, superviseSurvey, recoverSurvey
});

export default surveyReducer;
