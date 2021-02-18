import * as types from './types';

export const getSurveysRequest = ({
    state, ups, area, status, situation, teamLeader, pollster, skip = 0
}) => ({
    type: types.GET_SURVEYS_REQUEST,
    state,
    ups,
    area,
    status,
    situation,
    teamLeader,
    pollster,
    skip
});
export const getSurveysSuccess = (surveys, count) => ({
    type: types.GET_SURVEYS_SUCCESS,
    surveys,
    count
});
export const getSurveysError = error => ({
    type: types.GET_SURVEYS_ERROR,
    error
});

export const getSurveyRequest = id => ({
    type: types.GET_SURVEY_REQUEST,
    id
});
export const getSurveySuccess = survey => ({
    type: types.GET_SURVEY_SUCCESS,
    survey
});
export const getSurveyError = error => ({
    type: types.GET_SURVEY_ERROR,
    error
});

export const getAddressRequest = id => ({type: types.GET_ADDRESS_REQUEST, id});
export const getAddressSuccess = address => ({type: types.GET_ADDRESS_SUCCESS, address});
export const getAddressError = error => ({type: types.GET_ADDRESS_ERROR, error});

export const finishSurveyRequest = (id, addressId) => ({
    type: types.FINISH_SURVEY_REQUEST,
    id,
    addressId
});
export const finishSurveySuccess = () => ({type: types.FINISH_SURVEY_SUCCESS});
export const finishSurveyError = error => ({
    type: types.FINISH_SURVEY_ERROR,
    error
});

export const reassignSurveyRequest = (id, addressId, user) => ({
    type: types.REASSIGN_SURVEY_REQUEST,
    id,
    addressId,
    user
});
export const reassignSurveySuccess = () => ({type: types.REASSIGN_SURVEY_SUCCESS});
export const reassignSurveyError = error => ({
    type: types.REASSIGN_SURVEY_ERROR,
    error
});

export const approveSurveyRequest = (id, addressId) => ({
    type: types.APPROVE_SURVEY_REQUEST,
    id,
    addressId
});
export const approveSurveySuccess = () => ({type: types.APPROVE_SURVEY_SUCCESS});
export const approveSurveyError = error => ({
    type: types.APPROVE_SURVEY_ERROR,
    error
});

export const reopenSurveyRequest = (id, addressId) => ({
    type: types.REOPEN_SURVEY_REQUEST,
    id,
    addressId
});
export const reopenSurveySuccess = () => ({type: types.REOPEN_SURVEY_SUCCESS});
export const reopenSurveyError = error => ({
    type: types.REOPEN_SURVEY_ERROR,
    error
});

export const superviseSurveyRequest = (id, addressId, user) => ({
    type: types.SUPERVISE_SURVEY_REQUEST,
    id,
    addressId,
    user
});
export const superviseSurveySuccess = () => ({type: types.SUPERVISE_SURVEY_SUCCESS});
export const superviseSurveyError = error => ({
    type: types.SUPERVISE_SURVEY_ERROR,
    error
});

export const recoverSurveyRequest = (id, addressId) => ({
    type: types.RECOVER_SURVEY_REQUEST,
    id,
    addressId
});
export const recoverSurveySuccess = () => ({type: types.RECOVER_SURVEY_SUCCESS});
export const recoverSurveyError = error => ({
    type: types.RECOVER_SURVEY_ERROR,
    error
});
