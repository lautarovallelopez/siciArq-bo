import {connect} from 'react-redux';

import {
    getSurveysData, getSurveysLoading, getSurveysRequested, getSurveysCount
} from '@state/Review/selectors';
import {getSurveysRequest} from '@state/Review/actions';
import {getSearchParams} from '@state/Common/selectors';

import ReviewTable from './ReviewTable';

const mapStateToProps = state => ({
    surveys: getSurveysData(state),
    loading: getSurveysLoading(state),
    requested: getSurveysRequested(state),
    searchParams: getSearchParams(state),
    count: getSurveysCount(state)
});

const mapDispatchToProps = dispatch => ({
    getSurveys: params => dispatch(getSurveysRequest(params))
});

const ReviewTableContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewTable);

export default ReviewTableContainer;
