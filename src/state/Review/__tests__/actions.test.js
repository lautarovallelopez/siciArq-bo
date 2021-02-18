import * as actions from '../actions';
import * as types from '../types';

describe('getSurveysRequest', () => {
    it('should create an action to get the list of surveys', () => {
        const state = 2;
        const ups = 1;
        const area = 5;
        const status = 1;
        const teamLeader = 'teamLeader A';
        const pollster = 'pollster A';
        const skip = 0;
        expect(actions.getSurveysRequest({
            state, ups, area, status, teamLeader, pollster, skip
        })).toEqual({
            type: types.GET_SURVEYS_REQUEST,
            state,
            ups,
            area,
            status,
            teamLeader,
            pollster,
            skip
        });
    });
});

describe('getSurveysSuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        const surveys = [
            {
                id: 1,
                address: 2,
                status: 1
            }
        ];
        const count = 1;
        expect(actions.getSurveysSuccess(surveys, count)).toEqual({
            type: types.GET_SURVEYS_SUCCESS,
            surveys,
            count
        });
    });
});

describe('getSurveysError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getSurveysError(error)).toEqual({
            type: types.GET_SURVEYS_ERROR,
            error
        });
    });
});

describe('getSurveyRequest', () => {
    it('should create an action to get a survey', () => {
        const id = 1;
        expect(actions.getSurveyRequest(id)).toEqual({
            type: types.GET_SURVEY_REQUEST,
            id
        });
    });
});

describe('getSurveySuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        const survey = {
            id: 1,
            address: 2,
            status: 1
        };
        expect(actions.getSurveySuccess(survey)).toEqual({
            type: types.GET_SURVEY_SUCCESS,
            survey
        });
    });
});

describe('getSurveyError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getSurveyError(error)).toEqual({
            type: types.GET_SURVEY_ERROR,
            error
        });
    });
});

describe('finishSurveyRequest', () => {
    it('should create an action to finish a survey', () => {
        const id = 1;
        expect(actions.finishSurveyRequest(id)).toEqual({
            type: types.FINISH_SURVEY_REQUEST,
            id
        });
    });
});

describe('finishSurveySuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        expect(actions.finishSurveySuccess()).toEqual({
            type: types.FINISH_SURVEY_SUCCESS
        });
    });
});

describe('finishSurveyError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.finishSurveyError(error)).toEqual({
            type: types.FINISH_SURVEY_ERROR,
            error
        });
    });
});

describe('reassignSurveyRequest', () => {
    it('should create an action to reassign a survey', () => {
        const id = 1;
        const addressId = 6;
        const user = '4970136c-a20f-424b-be0f-11db8b6ce183';
        expect(actions.reassignSurveyRequest(id, addressId, user)).toEqual({
            type: types.REASSIGN_SURVEY_REQUEST,
            id,
            addressId,
            user
        });
    });
});

describe('reassignSurveySuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        expect(actions.reassignSurveySuccess()).toEqual({
            type: types.REASSIGN_SURVEY_SUCCESS
        });
    });
});

describe('reassignSurveyError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.reassignSurveyError(error)).toEqual({
            type: types.REASSIGN_SURVEY_ERROR,
            error
        });
    });
});

describe('approveSurveyRequest', () => {
    it('should create an action to approve a survey', () => {
        const id = 1;
        const addressId = 3;
        expect(actions.approveSurveyRequest(id, addressId)).toEqual({
            type: types.APPROVE_SURVEY_REQUEST,
            id,
            addressId
        });
    });
});

describe('approveSurveySuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        expect(actions.approveSurveySuccess()).toEqual({
            type: types.APPROVE_SURVEY_SUCCESS
        });
    });
});

describe('approveSurveyError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.approveSurveyError(error)).toEqual({
            type: types.APPROVE_SURVEY_ERROR,
            error
        });
    });
});

describe('reopenSurveyRequest', () => {
    it('should create an action to reopen a survey', () => {
        const id = 1;
        const addressId = 3;
        expect(actions.reopenSurveyRequest(id, addressId)).toEqual({
            type: types.REOPEN_SURVEY_REQUEST,
            id,
            addressId
        });
    });
});

describe('reopenSurveySuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        expect(actions.reopenSurveySuccess()).toEqual({
            type: types.REOPEN_SURVEY_SUCCESS
        });
    });
});

describe('reopenSurveyError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.reopenSurveyError(error)).toEqual({
            type: types.REOPEN_SURVEY_ERROR,
            error
        });
    });
});

describe('superviseSurveyRequest', () => {
    it('should create an action to supervise a survey', () => {
        const id = 1;
        const addressId = 3;
        const user = '4970136c-a20f-424b-be0f-11db8b6ce183';
        expect(actions.superviseSurveyRequest(id, addressId, user)).toEqual({
            type: types.SUPERVISE_SURVEY_REQUEST,
            id,
            addressId,
            user
        });
    });
});

describe('superviseSurveySuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        expect(actions.superviseSurveySuccess()).toEqual({
            type: types.SUPERVISE_SURVEY_SUCCESS
        });
    });
});

describe('superviseSurveyError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.superviseSurveyError(error)).toEqual({
            type: types.SUPERVISE_SURVEY_ERROR,
            error
        });
    });
});

describe('recoverSurveyRequest', () => {
    it('should create an action to recover a survey', () => {
        const id = 1;
        const addressId = 3;
        expect(actions.recoverSurveyRequest(id, addressId)).toEqual({
            type: types.RECOVER_SURVEY_REQUEST,
            id,
            addressId
        });
    });
});

describe('recoverSurveySuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        expect(actions.recoverSurveySuccess()).toEqual({
            type: types.RECOVER_SURVEY_SUCCESS
        });
    });
});

describe('recoverSurveyError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.recoverSurveyError(error)).toEqual({
            type: types.RECOVER_SURVEY_ERROR,
            error
        });
    });
});
