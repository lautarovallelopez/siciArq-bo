import {connect} from 'react-redux';

import {getAssignmentsData} from '@state/Assignment/selectors';
import {updateAssignment} from '@state/Assignment/actions';
import {getPollsters, getTeamLeaders} from '@state/User/selectors';
import roles from '@constants/roles';

import AssignmentsTableByAddress from './AssignmentsTableByAddress';

const mapStateToProps = state => ({
    assignments: getAssignmentsData(state),
    teamLeaders: getTeamLeaders(state, roles.TEAM_LEADER),
    pollsters: getPollsters(state, roles.POLLSTER)
});

const mapDispatchToProps = dispatch => ({
    updateAssignment: assignment => dispatch(updateAssignment(assignment))
});

const AssignmentsTableByAddressContainer = connect(mapStateToProps, mapDispatchToProps)(AssignmentsTableByAddress);

export default AssignmentsTableByAddressContainer;
