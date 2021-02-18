import assignmentTypes from '@constants/assignmentTypes';
import API from '@constants/apiRoutes';
import buildQueryString from '@util/buildQueryString';

import Http from './http';

class AssignmentService {
    static getAssignments(state, ups, area, segment, skip = 0, assignmentType) {
        const assignmentRoute = {
            [assignmentTypes.AREA]: API.assignmentsByArea,
            [assignmentTypes.ADDRESS]: API.assignmentsByAddress,
            [assignmentTypes.REASSIGNMENT]: API.addressesToReassign,
            [assignmentTypes.SEGMENT]: API.assignmentsBySegment,
            [assignmentTypes.UPS]: API.assignmentsByUps
        };
        return Http.get(`${assignmentRoute[assignmentType]}${buildQueryString({
            state, ups, area, segment, skip
        })}`);
    }

    static updateAssignments(assignments, assignmentType) {
        const assignmentRoute = {
            [assignmentTypes.AREA]: API.assignments,
            [assignmentTypes.ADDRESS]: API.address,
            [assignmentTypes.REASSIGNMENT]: API.addressesToReassign,
            [assignmentTypes.SEGMENT]: API.segment,
            [assignmentTypes.UPS]: API.subCoordinator
        };
        return Http.put(assignmentRoute[assignmentType], {assignments});
    }
}

export default AssignmentService;
