import {call, put} from 'redux-saga/effects';

import {setNotification} from '@state/Common/actions';
import types from '@constants/notificationTypes';
import TypeService from '@services/type';

import * as actions from '../actions';
import * as sagas from '../sagas';

describe('getUpsDropdown', () => {
    it('handles successful attempts', () => {
        const state = '02';
        const action = actions.getUpsDropdownRequest(state);
        const saga = sagas.getUpsDropdown(action);
        const ups = [
            {
                ups: 1
            }
        ];
        expect(saga.next()).toEqual({
            done: false,
            value: call(TypeService.getUps, state)
        });
        expect(saga.next(ups)).toEqual({
            done: false,
            value: put(actions.getUpsDropdownSuccess(ups))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const state = '02';
        const action = actions.getUpsDropdownRequest(state);
        const saga = sagas.getUpsDropdown(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(TypeService.getUps, state)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.getUpsDropdownError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido traer la lista de ups, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('getAreasDropdown', () => {
    it('handles successful attempts', () => {
        const state = '02';
        const ups = 1;
        const action = actions.getAreasDropdownRequest(state, ups);
        const saga = sagas.getAreasDropdown(action);
        const areas = [
            {
                area: 1
            }
        ];
        expect(saga.next()).toEqual({
            done: false,
            value: call(TypeService.getAreas, state, ups)
        });
        expect(saga.next(areas)).toEqual({
            done: false,
            value: put(actions.getAreasDropdownSuccess(areas))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const state = '02';
        const ups = 1;
        const action = actions.getAreasDropdownRequest(state, ups);
        const saga = sagas.getAreasDropdown(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(TypeService.getAreas, state, ups)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.getAreasDropdownError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido traer la lista de areas, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('getSegmentsDropdown', () => {
    it('handles successful attempts', () => {
        const state = '02';
        const ups = 1;
        const area = 8;
        const action = actions.getSegmentsDropdownRequest(state, ups, area);
        const saga = sagas.getSegmentsDropdown(action);
        const segments = [
            {
                segment: 1
            }
        ];
        expect(saga.next()).toEqual({
            done: false,
            value: call(TypeService.getSegments, state, ups, area)
        });
        expect(saga.next(segments)).toEqual({
            done: false,
            value: put(actions.getSegmentsDropdownSuccess(segments))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const state = '02';
        const ups = 1;
        const area = 8;
        const action = actions.getSegmentsDropdownRequest(state, ups, area);
        const saga = sagas.getSegmentsDropdown(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(TypeService.getSegments, state, ups, area)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.getSegmentsDropdownError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido traer la lista de segmentos, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('getFiles', () => {
    it('handles successful attempts', () => {
        const action = actions.getFilesRequest();
        const saga = sagas.getFiles(action);
        const files = [
            {
                description: 'archivo 4',
                link: 'http://',
                id: 7
            }
        ];
        expect(saga.next()).toEqual({
            done: false,
            value: call(TypeService.getFiles)
        });
        expect(saga.next(files)).toEqual({
            done: false,
            value: put(actions.getFilesSuccess(files))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const action = actions.getFilesRequest();
        const saga = sagas.getFiles(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(TypeService.getFiles)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.getFilesError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido traer la lista de archivos, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('getStatuses', () => {
    it('handles successful attempts', () => {
        const saga = sagas.getStatuses();
        const statuses = [
            {
                id: 7,
                label: 'En campo'
            }
        ];
        expect(saga.next()).toEqual({
            done: false,
            value: call(TypeService.getStatuses)
        });
        expect(saga.next(statuses)).toEqual({
            done: false,
            value: put(actions.getStatusesSuccess(statuses))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const saga = sagas.getStatuses();
        expect(saga.next()).toEqual({
            done: false,
            value: call(TypeService.getStatuses)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.getStatusesError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido traer la lista de estados, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('getSituations', () => {
    it('handles successful attempts', () => {
        const status = 1;
        const action = actions.getSituationsRequest(status);
        const saga = sagas.getSituations(action);
        const situations = [{
            id: 1,
            label: 'Encuestándose'
        }];
        expect(saga.next()).toEqual({
            done: false,
            value: call(TypeService.getSituations, status)
        });
        expect(saga.next(situations)).toEqual({
            done: false,
            value: put(actions.getSituationsSuccess(situations))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const status = 1;
        const action = actions.getSituationsRequest(status);
        const saga = sagas.getSituations(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(TypeService.getSituations, status)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.getSituationsError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido traer la lista de situaciones, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('getAssignmentsTypes', () => {
    it('handles successful attempts', () => {
        const saga = sagas.getAssignmentsTypes();
        const assignmentsTypes = [
            {
                id: 1,
                label: 'Area'
            },
            {
                id: 2,
                label: 'UPS'
            }
        ];
        expect(saga.next()).toEqual({
            done: false,
            value: call(TypeService.getAssignmentsTypes)
        });
        expect(saga.next(assignmentsTypes)).toEqual({
            done: false,
            value: put(actions.getAssignmentsTypesSuccess(assignmentsTypes))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const saga = sagas.getAssignmentsTypes();
        expect(saga.next()).toEqual({
            done: false,
            value: call(TypeService.getAssignmentsTypes)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.getAssignmentsTypesError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se han podido traer los tipos de asignaciones, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('getAllTypes', () => {
    it('handles successful attempts', () => {
        const saga = sagas.getAllTypes();
        expect(saga.next()).toEqual({
            done: false,
            value: put(actions.getStatusesRequest())
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(actions.getFilesRequest())
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(actions.getAssignmentsTypesRequest())
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});
