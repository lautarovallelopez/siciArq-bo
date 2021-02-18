import {connect} from 'react-redux';

import {
    getAssignmentsLoading, getAssignmentsRequested, displayAssignmentsTable, getAssignmentsCount, validateAddressAssignmentType, isValidGetAssignments
} from '@state/Assignment/selectors';
import {updateAssignment, getAssignmentsRequest} from '@state/Assignment/actions';
import {getUsersByStateAndRoleRequest} from '@state/User/actions';
import {getLoading} from '@state/User/selectors';
import {getSearchParams, getAssignmentType} from '@state/Common/selectors';

import AssignmentsTable from './AssignmentsTable';

const mapStateToProps = state => ({
    loading: getAssignmentsLoading(state),
    requested: getAssignmentsRequested(state),
    displayAssignmentsTable: displayAssignmentsTable(state),
    searchParams: getSearchParams(state),
    loadingUsers: getLoading(state),
    assignmentType: getAssignmentType(state),
    count: getAssignmentsCount(state),
    isAddressOrReassignment: validateAddressAssignmentType(state),
    isValidGetAssignments: isValidGetAssignments(state)
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: (stateId, role) => dispatch(getUsersByStateAndRoleRequest(stateId, role)),
    updateAssignment: assignment => dispatch(updateAssignment(assignment)),
    getAssignments: (params, assignmentType) => dispatch(getAssignmentsRequest(params, assignmentType))
});

const AssignmentsContainer = connect(mapStateToProps, mapDispatchToProps)(AssignmentsTable);

export default AssignmentsContainer;
