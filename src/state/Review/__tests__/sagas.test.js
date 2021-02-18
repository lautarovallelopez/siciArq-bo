import {call, put} from 'redux-saga/effects';

import SurveyService from '@services/survey';
import {setNotification} from '@state/Common/actions';
import types from '@constants/notificationTypes';

import * as actions from '../actions';
import * as sagas from '../sagas';

describe('getSurveys', () => {
    const state = 2;
    const ups = 1;
    const area = 5;
    const status = 1;
    const situation = 1;
    const teamLeader = 'teamLeader A';
    const pollster = 'pollster A';
    const skip = 0;

    it('handles unsuccessful attempts', () => {
        const action = actions.getSurveysRequest({
            state, ups, area, status, situation, teamLeader, pollster, skip
        });
        const saga = sagas.getSurveys(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.getSurveys, state, ups, area, status, situation, teamLeader, pollster, skip)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.getSurveysError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido traer la lista de encuestas, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    describe('when attempts are succesful', () => {
        let response;
        beforeEach(() => {
            response = {
                surveys: [{
                    id: 1,
                    address: 2,
                    status: 1
                }]
            };
        });
        afterEach(tearDown);

        describe('when response includes count', () => {
            beforeEach(() => {
                response.count = 1;
            });

            it('handles successful attempts with response count', () => {
                const action = actions.getSurveysRequest({
                    state, ups, area, status, situation, teamLeader, pollster, skip
                });
                const saga = sagas.getSurveys(action);
                expect(saga.next()).toEqual({
                    done: false,
                    value: call(SurveyService.getSurveys, state, ups, area, status, situation, teamLeader, pollster, skip)
                });
                expect(saga.next(response)).toEqual({
                    done: false,
                    value: put(actions.getSurveysSuccess(response.surveys, response.count))
                });
                expect(saga.next()).toEqual({
                    done: true,
                    value: undefined
                });
            });
        });

        describe('when response does not include count', () => {
            beforeEach(() => {
                response.count = undefined;
            });

            it('handles successful attempts replacing response count with zero', () => {
                const action = actions.getSurveysRequest({
                    state, ups, area, status, situation, teamLeader, pollster, skip
                });
                const saga = sagas.getSurveys(action);
                expect(saga.next()).toEqual({
                    done: false,
                    value: call(SurveyService.getSurveys, state, ups, area, status, situation, teamLeader, pollster, skip)
                });
                expect(saga.next(response)).toEqual({
                    done: false,
                    value: put(actions.getSurveysSuccess(response.surveys, 0))
                });
                expect(saga.next()).toEqual({
                    done: true,
                    value: undefined
                });
            });
        });
    });
});

describe('getSurvey', () => {
    it('handles successful attempts', () => {
        const id = 1;
        const action = actions.getSurveyRequest(id);
        const saga = sagas.getSurvey(action);
        const survey = {
            id: 1,
            address: 2,
            status: 1
        };
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.getSurvey, id)
        });
        expect(saga.next(survey)).toEqual({
            done: false,
            value: put(actions.getSurveySuccess(survey))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const id = 1;
        const action = actions.getSurveyRequest(id);
        const saga = sagas.getSurvey(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.getSurvey, id)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.getSurveyError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido traer la encuesta, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('finishSurvey', () => {
    it('handles successful attempts', () => {
        const id = 1;
        const addressId = 3;
        const action = actions.finishSurveyRequest(id, addressId);
        const saga = sagas.finishSurvey(action);
        const survey = {
            id: 1,
            address: 2,
            status: 1
        };
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.finishSurvey, addressId)
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(actions.finishSurveySuccess())
        });
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.getSurvey, id)
        });
        expect(saga.next(survey)).toEqual({
            done: false,
            value: put(actions.getSurveySuccess(survey))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'La encuesta fue finalizada correctamente.',
                notificationType: types.SUCCESS
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const id = 1;
        const addressId = 3;
        const action = actions.finishSurveyRequest(id, addressId);
        const saga = sagas.finishSurvey(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.finishSurvey, addressId)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.finishSurveyError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido finalizar la encuesta, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('reassignSurvey', () => {
    it('handles successful attempts', () => {
        const id = 1;
        const addressId = 3;
        const user = '4970136c-a20f-424b-be0f-11db8b6ce183';
        const action = actions.reassignSurveyRequest(id, addressId, user);
        const saga = sagas.reassignSurvey(action);
        const survey = {
            id: 1,
            address: 2,
            status: 1
        };
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.reassignSurvey, addressId, user)
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(actions.reassignSurveySuccess())
        });
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.getSurvey, id)
        });
        expect(saga.next(survey)).toEqual({
            done: false,
            value: put(actions.getSurveySuccess(survey))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'La encuesta fue reasignada correctamente.',
                notificationType: types.SUCCESS
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const id = 1;
        const addressId = 3;
        const user = '4970136c-a20f-424b-be0f-11db8b6ce183';
        const action = actions.reassignSurveyRequest(id, addressId, user);
        const saga = sagas.reassignSurvey(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.reassignSurvey, addressId, user)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.reassignSurveyError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido reasignar la encuesta, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('approveSurvey', () => {
    it('handles successful attempts', () => {
        const id = 1;
        const addressId = 3;
        const action = actions.approveSurveyRequest(id, addressId);
        const saga = sagas.approveSurvey(action);
        const survey = {
            id: 1,
            address: 2,
            status: 1
        };
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.approveSurvey, addressId)
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(actions.approveSurveySuccess())
        });
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.getSurvey, id)
        });
        expect(saga.next(survey)).toEqual({
            done: false,
            value: put(actions.getSurveySuccess(survey))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'La encuesta fue aprobada correctamente.',
                notificationType: types.SUCCESS
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const id = 1;
        const addressId = 3;
        const action = actions.approveSurveyRequest(id, addressId);
        const saga = sagas.approveSurvey(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.approveSurvey, addressId)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.approveSurveyError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido aprobar la encuesta, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('reopenSurvey', () => {
    it('handles successful attempts', () => {
        const id = 1;
        const addressId = 3;
        const action = actions.reopenSurveyRequest(id, addressId);
        const saga = sagas.reopenSurvey(action);
        const survey = {
            id: 1,
            address: 2,
            status: 1
        };
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.reopenSurvey, addressId)
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(actions.reopenSurveySuccess())
        });
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.getSurvey, id)
        });
        expect(saga.next(survey)).toEqual({
            done: false,
            value: put(actions.getSurveySuccess(survey))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'La encuesta fue reabierta correctamente.',
                notificationType: types.SUCCESS
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const id = 1;
        const addressId = 3;
        const action = actions.reopenSurveyRequest(id, addressId);
        const saga = sagas.reopenSurvey(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.reopenSurvey, addressId)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.reopenSurveyError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido reabrir la encuesta, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('superviseSurvey', () => {
    it('handles successful attempts', () => {
        const id = 1;
        const addressId = 3;
        const user = '4970136c-a20f-424b-be0f-11db8b6ce183';
        const action = actions.superviseSurveyRequest(id, addressId, user);
        const saga = sagas.superviseSurvey(action);
        const survey = {
            id: 1,
            address: 2,
            status: 1
        };
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.superviseSurvey, addressId, user)
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(actions.superviseSurveySuccess())
        });
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.getSurvey, id)
        });
        expect(saga.next(survey)).toEqual({
            done: false,
            value: put(actions.getSurveySuccess(survey))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'La encuesta fue enviada a supervisión correctamente.',
                notificationType: types.SUCCESS
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const id = 1;
        const addressId = 3;
        const user = '4970136c-a20f-424b-be0f-11db8b6ce183';
        const action = actions.superviseSurveyRequest(id, addressId, user);
        const saga = sagas.superviseSurvey(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.superviseSurvey, addressId, user)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.superviseSurveyError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido enviar la encuesta a supervisión, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('recoverSurvey', () => {
    it('handles successful attempts', () => {
        const id = 1;
        const addressId = 3;
        const action = actions.recoverSurveyRequest(id, addressId);
        const saga = sagas.recoverSurvey(action);
        const survey = {
            id: 1,
            address: 2,
            status: 1
        };
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.recoverSurvey, addressId)
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(actions.recoverSurveySuccess())
        });
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.getSurvey, id)
        });
        expect(saga.next(survey)).toEqual({
            done: false,
            value: put(actions.getSurveySuccess(survey))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'La encuesta fue recuperada correctamente.',
                notificationType: types.SUCCESS
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const id = 1;
        const addressId = 3;
        const action = actions.recoverSurveyRequest(id, addressId);
        const saga = sagas.recoverSurvey(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(SurveyService.recoverSurvey, addressId)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.recoverSurveyError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido recuperar la encuesta, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});
