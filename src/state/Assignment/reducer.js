import {combineReducers} from 'redux';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import omit from 'lodash/omit';

import {
    GET_ASSIGNMENTS_REQUEST,
    GET_ASSIGNMENTS_SUCCESS,
    GET_ASSIGNMENTS_ERROR,
    UPDATE_ASSIGNMENT,
    UPDATE_ASSIGNMENTS_REQUEST,
    UPDATE_ASSIGNMENTS_SUCCESS,
    UPDATE_ASSIGNMENTS_ERROR,
    UNSET_TO_ASSIGN
} from '@state/Assignment/types';
import roles from '@constants/roles';

import {requestError, requestStart, requestSuccess} from '../../util/state';

export const getAssignments = (state = {
    assignments: [], loading: false, requested: false
}, action) => {
    switch (action.type) {
        case GET_ASSIGNMENTS_REQUEST:
            return requestStart(undefined, {assignments: [], count: undefined});
        case GET_ASSIGNMENTS_SUCCESS: {
            return requestSuccess(undefined, {assignments: action.assignments, count: action.count});
        }
        case GET_ASSIGNMENTS_ERROR:
            return requestError(action, {assignments: [], count: undefined});
        case UPDATE_ASSIGNMENT: {
            const assignments = state.assignments.slice();
            const {
                teamLeader, pollster, subCoordinator, id, role
            } = action.assignment;
            const assignment = assignments.find(assign => assign.id === id);
            if (!assignment.originalData) {
                assignment.originalData = {...assignment};
            }
            assignment.teamLeader = teamLeader;
            assignment.pollster = pollster;
            assignment.subCoordinator = subCoordinator;
            assignment.toAssign = (
                !!assignment.teamLeader || !!assignment.subCoordinator
            ) && !isEqual(assignment.originalData, {
                ...omit(assignment, ['originalData', 'toAssign']),
                id,
                teamLeader,
                pollster,
                subCoordinator,
                role
            });
            if (role) {
                assignment.role = role;
            }
            return {...state, assignments};
        }
        case UNSET_TO_ASSIGN:
            return {
                ...state,
                assignments: map(state.assignments, assignment => ({
                    ...assignment,
                    toAssign: false,
                    originalData: null
                }))
            };
        default:
            return state;
    }
};

export const updateAssignments = (state = {loading: false, requested: false}, action) => {
    switch (action.type) {
        case UPDATE_ASSIGNMENTS_REQUEST:
            return {
                ...state,
                loading: true,
                requested: true,
                assignments: action.assignments.map(assign => ({
                    state: assign.state,
                    ups: assign.ups,
                    area: assign.area,
                    id: assign.id,
                    ...(assign.segment && {segment: assign.segment}),
                    ...(assign.role && {user: assign.role === roles.TEAM_LEADER ? assign.teamLeader : assign.pollster}),
                    teamLeader: isEmpty(assign.teamLeader) ? null : assign.teamLeader,
                    pollster: isEmpty(assign.pollster) ? null : assign.pollster,
                    subCoordinator: isEmpty(assign.subCoordinator) ? null : assign.subCoordinator
                }))
            };
        case UPDATE_ASSIGNMENTS_SUCCESS:
            return {
                ...state, loading: false, requested: true, assignments: null
            };
        case UPDATE_ASSIGNMENTS_ERROR:
            return {
                ...state, loading: false, requested: true, error: action.error
            };
        default:
            return state;
    }
};

const assignmentReducer = combineReducers({
    getAssignments, updateAssignments
});

export default assignmentReducer;
