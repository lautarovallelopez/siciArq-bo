import * as actions from '../actions';
import * as types from '../types';

describe('getAssignmentsRequest', () => {
    it('should create an action to get the list of assignments', () => {
        const state = 2;
        const ups = 1;
        const area = 5;
        const segment = 1;
        expect(actions.getAssignmentsRequest({
            state, ups, area, segment
        })).toEqual({
            type: types.GET_ASSIGNMENTS_REQUEST,
            state,
            ups,
            area,
            segment
        });
    });
});

describe('getAssignmentsSuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        const assignments = [
            {
                state: 2,
                ups: 1,
                area: 5,
                segment: 1,
                dwellings: 5
            }
        ];
        expect(actions.getAssignmentsSuccess(assignments)).toEqual({
            type: types.GET_ASSIGNMENTS_SUCCESS,
            assignments
        });
    });
});

describe('getAssignmentsError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getAssignmentsError(error)).toEqual({
            type: types.GET_ASSIGNMENTS_ERROR,
            error
        });
    });
});

describe('updateAssignment', () => {
    it('creates an action to update an assignment', () => {
        const assignment = {
            state: 2,
            ups: 1,
            area: 4
        };
        expect(actions.updateAssignment(assignment)).toEqual({
            type: types.UPDATE_ASSIGNMENT,
            assignment
        });
    });
});

describe('unsetToAssign', () => {
    it('creates an action to update an assignment', () => {
        expect(actions.unsetToAssign()).toEqual({
            type: types.UNSET_TO_ASSIGN
        });
    });
});

describe('updateAssignmentsRequest', () => {
    it('should create an action to update assignments', () => {
        expect(actions.updateAssignmentsRequest()).toEqual({
            type: types.UPDATE_ASSIGNMENTS_REQUEST
        });
    });
});

describe('updateAssignmentsSuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        expect(actions.updateAssignmentsSuccess()).toEqual({
            type: types.UPDATE_ASSIGNMENTS_SUCCESS
        });
    });
});

describe('updateAssignmentsError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.updateAssignmentsError(error)).toEqual({
            type: types.UPDATE_ASSIGNMENTS_ERROR,
            error
        });
    });
});
