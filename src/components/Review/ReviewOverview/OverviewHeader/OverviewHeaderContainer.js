import {connect} from 'react-redux';

import {
    approveSurveyRequest, finishSurveyRequest, reopenSurveyRequest, recoverSurveyRequest
} from '@state/Review/actions';
import {getUserRole} from '@state/Session/selectors';

import OverviewHeader from './OverviewHeader';

const mapStateToProps = state => ({
    role: getUserRole(state)
});

const mapDispatchToProps = dispatch => ({
    finishSurvey: (id, addressId) => dispatch(finishSurveyRequest(id, addressId)),
    approveSurvey: (id, addressId) => dispatch(approveSurveyRequest(id, addressId)),
    reopenSurvey: (id, addressId) => dispatch(reopenSurveyRequest(id, addressId)),
    recoverSurvey: (id, addressId) => dispatch(recoverSurveyRequest(id, addressId))
});

const OverviewHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(OverviewHeader);

export default OverviewHeaderContainer;
