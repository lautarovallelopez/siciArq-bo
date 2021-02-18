import rootReducer, {
    approveSurvey, finishSurvey, getSurveys, getSurvey, reassignSurvey, reopenSurvey, superviseSurvey, recoverSurvey
} from '../reducer';
import * as actions from '../actions';

describe('root reducer', () => {
    it('return the initial state', () => {
        expect(rootReducer(undefined, {})).toEqual({
            getSurveys: {
                loading: false,
                surveys: [],
                count: undefined,
                requested: false
            },
            getSurvey: {
                loading: false,
                survey: undefined,
                requested: false
            },
            getAddress: {
                loading: false,
                address: undefined,
                requested: false
            },
            finishSurvey: {
                loading: false,
                requested: false
            },
            reassignSurvey: {
                loading: false,
                requested: false
            },
            approveSurvey: {
                loading: false,
                requested: false
            },
            reopenSurvey: {
                loading: false,
                requested: false
            },
            superviseSurvey: {
                loading: false,
                requested: false
            },
            recoverSurvey: {
                loading: false,
                requested: false
            }
        });
    });
});

describe('getSurveys', () => {
    it('should return the initial state', () => {
        expect(getSurveys(undefined, {})).toEqual({
            loading: false,
            surveys: [],
            count: undefined,
            requested: false
        });
    });

    it('should handle `GET_SURVEYS_REQUEST`', () => {
        const state = 2;
        const ups = 1;
        const area = 5;
        const status = 1;
        const teamLeader = 'teamLeader A';
        const pollster = 'pollster A';
        expect(getSurveys(undefined, actions.getSurveysRequest({
            state, ups, area, status, teamLeader, pollster
        }))).toEqual({
            loading: true,
            requested: true,
            surveys: [],
            count: undefined,
            error: null
        });
    });

    it('should handle `GET_SURVEYS_SUCCESS`', () => {
        const surveys = [{
            id: 1,
            address: 2,
            status: 1
        }];
        const count = 1;
        expect(getSurveys(undefined, actions.getSurveysSuccess(surveys, count))).toEqual({
            loading: false,
            requested: true,
            surveys,
            count,
            error: null
        });
    });

    it('should handle `GET_SURVEYS_ERROR`', () => {
        const error = new Error('Oops!');
        expect(getSurveys(undefined, actions.getSurveysError(error))).toEqual({
            loading: false,
            requested: true,
            surveys: [],
            count: undefined,
            error
        });
    });
});

describe('getSurvey', () => {
    it('should return the initial state', () => {
        expect(getSurvey(undefined, {})).toEqual({
            loading: false,
            requested: false,
            survey: undefined
        });
    });

    it('should handle `GET_SURVEY_REQUEST`', () => {
        const id = 1;
        expect(getSurvey(undefined, actions.getSurveyRequest(id))).toEqual({
            loading: true,
            survey: undefined,
            requested: true,
            error: null
        });
    });

    it('should handle `GET_SURVEY_SUCCESS`', () => {
        const survey = {
            id: 1,
            address: 2,
            status: 1
        };
        expect(getSurvey(undefined, actions.getSurveySuccess(survey))).toEqual({
            loading: false,
            survey,
            requested: true,
            error: null
        });
    });

    it('should handle `GET_SURVEY_ERROR`', () => {
        const error = new Error('Oops!');
        expect(getSurvey(undefined, actions.getSurveyError(error))).toEqual({
            loading: false,
            survey: undefined,
            requested: true,
            error
        });
    });
});

describe('finishSurvey', () => {
    it('should return the initial state', () => {
        expect(finishSurvey(undefined, {})).toEqual({
            loading: false,
            requested: false
        });
    });

    it('should handle `FINISH_SURVEY_REQUEST`', () => {
        const id = 275;
        expect(finishSurvey(undefined, actions.finishSurveyRequest(id))).toEqual({
            loading: true,
            requested: true,
            error: null
        });
    });

    it('should handle `FINISH_SURVEY_SUCCESS`', () => {
        expect(finishSurvey(undefined, actions.finishSurveySuccess())).toEqual({
            loading: false,
            requested: true,
            error: null
        });
    });

    it('should handle `FINISH_SURVEY_ERROR`', () => {
        const error = new Error('Oops!');
        expect(finishSurvey(undefined, actions.finishSurveyError(error))).toEqual({
            loading: false,
            requested: true,
            error
        });
    });
});

describe('reassignSurvey', () => {
    it('should return the initial state', () => {
        expect(reassignSurvey(undefined, {})).toEqual({
            loading: false,
            requested: false
        });
    });

    it('should handle `REASSIGN_SURVEY_REQUEST`', () => {
        const id = 275;
        const user = '4970136c-a20f-424b-be0f-11db8b6ce183';
        expect(reassignSurvey(undefined, actions.reassignSurveyRequest(id, user))).toEqual({
            loading: true,
            requested: true,
            error: null
        });
    });

    it('should handle `REASSIGN_SURVEY_SUCCESS`', () => {
        expect(reassignSurvey(undefined, actions.reassignSurveySuccess())).toEqual({
            loading: false,
            requested: true,
            error: null
        });
    });

    it('should handle `REASSIGN_SURVEY_ERROR`', () => {
        const error = new Error('Oops!');
        expect(reassignSurvey(undefined, actions.reassignSurveyError(error))).toEqual({
            loading: false,
            requested: true,
            error
        });
    });
});

describe('approveSurvey', () => {
    it('should return the initial state', () => {
        expect(approveSurvey(undefined, {})).toEqual({
            loading: false,
            requested: false
        });
    });

    it('should handle `APPROVE_SURVEY_REQUEST`', () => {
        const id = 275;
        expect(approveSurvey(undefined, actions.approveSurveyRequest(id))).toEqual({
            loading: true,
            requested: true,
            error: null
        });
    });

    it('should handle `APPROVE_SURVEY_SUCCESS`', () => {
        expect(approveSurvey(undefined, actions.approveSurveySuccess())).toEqual({
            loading: false,
            requested: true,
            error: null
        });
    });

    it('should handle `APPROVE_SURVEY_ERROR`', () => {
        const error = new Error('Oops!');
        expect(approveSurvey(undefined, actions.approveSurveyError(error))).toEqual({
            loading: false,
            requested: true,
            error
        });
    });
});

describe('reopenSurvey', () => {
    it('should return the initial state', () => {
        expect(reopenSurvey(undefined, {})).toEqual({
            loading: false,
            requested: false
        });
    });

    it('should handle `REOPEN_SURVEY_REQUEST`', () => {
        const id = 275;
        expect(reopenSurvey(undefined, actions.reopenSurveyRequest(id))).toEqual({
            loading: true,
            requested: true,
            error: null
        });
    });

    it('should handle `REOPEN_SURVEY_SUCCESS`', () => {
        expect(reopenSurvey(undefined, actions.reopenSurveySuccess())).toEqual({
            loading: false,
            requested: true,
            error: null
        });
    });

    it('should handle `REOPEN_SURVEY_ERROR`', () => {
        const error = new Error('Oops!');
        expect(reopenSurvey(undefined, actions.reopenSurveyError(error))).toEqual({
            loading: false,
            requested: true,
            error
        });
    });
});

describe('superviseSurvey', () => {
    it('should return the initial state', () => {
        expect(superviseSurvey(undefined, {})).toEqual({
            loading: false,
            requested: false
        });
    });

    it('should handle `SUPERVISE_SURVEY_REQUEST`', () => {
        const id = 275;
        const user = '4970136c-a20f-424b-be0f-11db8b6ce183';
        expect(superviseSurvey(undefined, actions.superviseSurveyRequest(id, user))).toEqual({
            loading: true,
            requested: true,
            error: null
        });
    });

    it('should handle `SUPERVISE_SURVEY_SUCCESS`', () => {
        expect(superviseSurvey(undefined, actions.superviseSurveySuccess())).toEqual({
            loading: false,
            requested: true,
            error: null
        });
    });

    it('should handle `SUPERVISE_SURVEY_ERROR`', () => {
        const error = new Error('Oops!');
        expect(superviseSurvey(undefined, actions.superviseSurveyError(error))).toEqual({
            loading: false,
            requested: true,
            error
        });
    });
});

describe('recoverSurvey', () => {
    it('should return the initial state', () => {
        expect(recoverSurvey(undefined, {})).toEqual({
            loading: false,
            requested: false
        });
    });

    it('should handle `RECOVER_SURVEY_REQUEST`', () => {
        const id = 275;
        expect(recoverSurvey(undefined, actions.recoverSurveyRequest(id))).toEqual({
            loading: true,
            requested: true,
            error: null
        });
    });

    it('should handle `RECOVER_SURVEY_SUCCESS`', () => {
        expect(recoverSurvey(undefined, actions.recoverSurveySuccess())).toEqual({
            loading: false,
            requested: true,
            error: null
        });
    });

    it('should handle `RECOVER_SURVEY_ERROR`', () => {
        const error = new Error('Oops!');
        expect(recoverSurvey(undefined, actions.recoverSurveyError(error))).toEqual({
            loading: false,
            requested: true,
            error
        });
    });
});
