import {call, put, select} from 'redux-saga/effects';
import pluralize from 'pluralize';

import AssignmentService from '@services/assignment';
import {setNotification} from '@state/Common/actions';
import types from '@constants/notificationTypes';
import {getAssignmentsToUpdate} from '@state/Assignment/selectors';

import * as actions from '../actions';
import * as sagas from '../sagas';

describe('getAssignments', () => {
    it('handles successful attempts', () => {
        const state = '02';
        const ups = 1;
        const area = 2;
        const segment = 5;
        const skip = 0;
        const assignmentType = 1;
        const action = actions.getAssignmentsRequest({
            state, ups, area, segment, skip, assignmentType
        });
        const saga = sagas.getAssignments(action);
        const response = {
            results: [
                {
                    state: '02',
                    ups: 1,
                    area: 2,
                    segment: 5,
                    dwellings: 5
                }
            ],
            count: 1
        };
        expect(saga.next()).toEqual({
            done: false,
            value: call(AssignmentService.getAssignments, state, ups, area, segment, skip, assignmentType)
        });
        expect(saga.next(response)).toEqual({
            done: false,
            value: put(actions.getAssignmentsSuccess(response.results, response.count))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const state = '02';
        const ups = 1;
        const area = 2;
        const segment = 5;
        const skip = 0;
        const assignmentType = 1;
        const action = actions.getAssignmentsRequest({
            state, ups, area, segment, skip, assignmentType
        });
        const saga = sagas.getAssignments(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(AssignmentService.getAssignments, state, ups, area, segment, skip, assignmentType)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.getAssignmentsError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido traer la lista de asignaciones, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('updateAssignments', () => {
    it('handles successful attempts', async () => {
        const assignments = [
            {
                state: 2,
                ups: 1,
                area: 92
            },
            {
                state: 2,
                ups: 1,
                area: 23,
                teamLeader: '123e4567-e89b-12d3-a456-426614174000',
                toAssign: true
            }
        ];
        const assignmentType = 1;
        const action = actions.updateAssignmentsRequest(assignments, assignmentType);
        const saga = sagas.updateAssignments(action);
        expect(saga.next()).toEqual({
            done: false,
            value: select(getAssignmentsToUpdate)
        });
        expect(saga.next(assignments)).toEqual({
            done: false,
            value: call(AssignmentService.updateAssignments, assignments, assignmentType)
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(actions.updateAssignmentsSuccess())
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(actions.unsetToAssign())
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: `${pluralize('La', assignments.length)} 
            ${pluralize('asignación', assignments.length)} 
            se ${pluralize('ha', assignments.length)} realizado de forma correcta.`,
                notificationType: types.SUCCESS
            }))
        });
    });

    it('handles unsuccessful attempts', async () => {
        const assignments = [
            {
                state: 2,
                ups: 1,
                area: 92
            },
            {
                state: 2,
                ups: 1,
                area: 23,
                teamLeader: '123e4567-e89b-12d3-a456-426614174000',
                toAssign: true
            }
        ];
        const assignmentType = 1;
        const action = actions.updateAssignmentsRequest(assignments, assignmentType);
        const saga = sagas.updateAssignments(action);
        expect(saga.next()).toEqual({
            done: false,
            value: select(getAssignmentsToUpdate)
        });
        expect(saga.next(assignments)).toEqual({
            done: false,
            value: call(AssignmentService.updateAssignments, assignments, assignmentType)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.updateAssignmentsError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: `No se ha podido realizar ${pluralize('la', assignments.length)} 
            ${pluralize('asignacion', assignments.length)}, intente más tarde.`,
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});
