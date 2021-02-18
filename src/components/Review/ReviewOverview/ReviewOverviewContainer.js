import {connect} from 'react-redux';

import {getSurveyRequest, getAddressRequest} from '@state/Review/actions';
import {
    getAddressData, getDwelling, getSurveyLoading, getSurveyRequested
} from '@state/Review/selectors';

import ReviewOverview from './ReviewOverview';

const mapStateToProps = state => ({
    address: getAddressData(state),
    survey: getDwelling(state),
    loading: getSurveyLoading(state),
    requested: getSurveyRequested(state)
});

const mapDispatchToProps = dispatch => ({
    getSurvey: id => dispatch(getSurveyRequest(id)),
    getAddress: id => dispatch(getAddressRequest(id))
});

const ReviewOverviewContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewOverview);

export default ReviewOverviewContainer;
