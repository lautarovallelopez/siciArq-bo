import * as types from './types';

export const getAssignmentsRequest = ({
    state, ups, area, segment, skip, assignmentType
}) => ({
    type: types.GET_ASSIGNMENTS_REQUEST, state, ups, area, segment, skip, assignmentType
});
export const getAssignmentsSuccess = (assignments, count) => ({type: types.GET_ASSIGNMENTS_SUCCESS, assignments, count});
export const getAssignmentsError = error => ({type: types.GET_ASSIGNMENTS_ERROR, error});
export const updateAssignment = assignment => ({type: types.UPDATE_ASSIGNMENT, assignment});
export const unsetToAssign = () => ({type: types.UNSET_TO_ASSIGN});

export const updateAssignmentsRequest = (assignments, assignmentType) => ({type: types.UPDATE_ASSIGNMENTS_REQUEST, assignments, assignmentType});
export const updateAssignmentsSuccess = () => ({type: types.UPDATE_ASSIGNMENTS_SUCCESS});
export const updateAssignmentsError = error => ({type: types.UPDATE_ASSIGNMENTS_ERROR, error});
