import {connect} from 'react-redux';

import {reassignSurveyRequest, superviseSurveyRequest} from '@state/Review/actions';
import {getUsersRequest} from '@state/User/actions';
import {getUsersList, getLoading} from '@state/User/selectors';

import ReviewOperationsModal from './ReviewOperationsModal';

const mapStateToProps = (state, ownProps) => ({
    users: getUsersList(state, ownProps.context?.user),
    loading: getLoading(state)
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: filters => dispatch(getUsersRequest(filters)),
    reassignSurvey: (id, addressId, user) => dispatch(reassignSurveyRequest(id, addressId, user)),
    superviseSurvey: (id, addressId, user) => dispatch(superviseSurveyRequest(id, addressId, user))
});

const ReviewOperationsModalContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewOperationsModal);

export default ReviewOperationsModalContainer;
