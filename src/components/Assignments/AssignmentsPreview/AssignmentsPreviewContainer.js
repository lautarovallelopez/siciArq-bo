import {connect} from 'react-redux';

import {getAssignmentsPendingWithUserName, validateAddressAssignmentType} from '@state/Assignment/selectors';
import {getAssignmentType} from '@state/Common/selectors';

import AssignmentsPreview from './AssignmentsPreview';

const mapStateToProps = state => ({
    assignments: getAssignmentsPendingWithUserName(state),
    assignmentType: getAssignmentType(state),
    isAddressOrReassignment: validateAddressAssignmentType(state)
});

const AssignmentsPreviewContainer = connect(mapStateToProps)(AssignmentsPreview);

export default AssignmentsPreviewContainer;
