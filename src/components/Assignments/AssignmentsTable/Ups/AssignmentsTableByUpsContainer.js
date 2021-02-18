import {connect} from 'react-redux';

import {getAssignmentsData} from '@state/Assignment/selectors';
import {updateAssignment} from '@state/Assignment/actions';
import {getSubCoordinators} from '@state/User/selectors';

import AssignmentsTableByUps from './AssignmentsTableByUps';

const mapStateToProps = state => ({
    assignments: getAssignmentsData(state),
    subCoordinators: getSubCoordinators(state)
});

const mapDispatchToProps = dispatch => ({
    updateAssignment: assignment => dispatch(updateAssignment(assignment))
});

const AssignmentsTableByUpsContainer = connect(mapStateToProps, mapDispatchToProps)(AssignmentsTableByUps);

export default AssignmentsTableByUpsContainer;
