import isEmpty from 'lodash/isEmpty';

import {
    getTeamLeaders, getPollsters, getLoading, getSubCoordinators
} from '@state/User/selectors';
import {getSearchParams, getAssignmentType} from '@state/Common/selectors';
import assignmentTypes from '@constants/assignmentTypes';
import {getFullName} from '@util/ui';

export const getAssignments = state => state?.assignment?.getAssignments;
export const getAssignmentsData = state => getAssignments(state)?.assignments;
export const getAssignmentsLoading = state => getAssignments(state)?.loading;
export const getAssignmentsRequested = state => getAssignments(state)?.requested;
export const getAssignmentsCount = state => getAssignments(state)?.count;

export const getAssignmentsPending = state => {
    const assignments = getAssignmentsData(state);
    if (!isEmpty(assignments)) {
        return assignments.filter(assignment => assignment.toAssign);
    }
    return assignments;
};

export const getAssignmentsPendingWithUserName = state => {
    const assignmentsPending = getAssignmentsPending(state);
    const teamLeaders = getTeamLeaders(state);
    const pollsters = getPollsters(state);
    const subCoordinators = getSubCoordinators(state);
    return assignmentsPending.map(assignment => {
        const teamLeader = teamLeaders.find(user => user.id === assignment?.teamLeader);
        const pollster = pollsters.find(user => user.id === assignment?.pollster);
        const subCoordinator = subCoordinators.find(user => user.id === assignment?.subCoordinator);
        return ({
            ...assignment,
            teamLeader: teamLeader ? getFullName(teamLeader) : 'Sin definir',
            pollster: pollster ? getFullName(pollster) : 'Sin definir',
            subCoordinator: subCoordinator ? getFullName(subCoordinator) : 'Sin definir'
        });
    });
};

export const getAssignmentsToUpdate = state => state?.assignment?.updateAssignments?.assignments;
export const getAssignmentsToUpdateLoading = state => state?.assignment?.updateAssignments?.loading;

export const validateAddressAssignmentType = state => {
    const assignmentType = getAssignmentType(state);
    return [assignmentTypes.ADDRESS, assignmentTypes.REASSIGNMENT].includes(assignmentType);
};

export const displayAssignmentsTable = state => {
    const searchParams = getSearchParams(state);
    const commonConditions = getAssignmentsRequested(state)
      && !getAssignmentsLoading(state)
      && !getLoading(state)
      && (!!searchParams?.ups || assignmentTypes.UPS === searchParams?.assignmentType);
    if (validateAddressAssignmentType(state)) {
        return commonConditions && !!searchParams?.area;
    }
    return commonConditions;
};

export const isValidGetAssignments = state => {
    const searchParams = getSearchParams(state);
    return !!searchParams?.state && (!!searchParams?.ups || assignmentTypes.UPS === searchParams?.assignmentType) && (
        ![assignmentTypes.ADDRESS, assignmentTypes.REASSIGNMENT].includes(searchParams?.assignmentType) || (
            [assignmentTypes.ADDRESS, assignmentTypes.REASSIGNMENT].includes(searchParams?.assignmentType) && !!searchParams?.area
        )
    );
};
