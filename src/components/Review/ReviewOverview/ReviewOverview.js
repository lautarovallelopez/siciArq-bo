import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {Container} from 'reactstrap';

import Spinner from '@components/common/Spinner';
import {addressPropTypes, surveyPropTypes} from '@util/propTypes';

import AddressData from './AddressData';
import DwellingSummary from './DwellingSummary';
import OverviewHeader from './OverviewHeader';
import SurveyData from './SurveyData';

const ReviewOverview = ({
    getAddress, getSurvey, address, loading, requested, survey
}) => {
    const {id} = useParams();

    useEffect(() => {
        getAddress(id);
        getSurvey(id);
    }, []);

    return (
        <Container fluid data-testid="review-overview">
            <Spinner loading={loading && requested}>
                {address && (
                    <>
                        <OverviewHeader address={address}/>
                        <AddressData address={address}/>
                    </>
                )}
                {survey && (
                    <>
                        <DwellingSummary dwelling={survey.dwelling}/>
                        <SurveyData dwelling={survey.dwelling} visits={survey.visits}/>
                    </>
                )}
            </Spinner>
        </Container>
    );
};

ReviewOverview.propTypes = {
    getSurvey: PropTypes.func.isRequired,
    getAddress: PropTypes.func.isRequired,
    address: addressPropTypes,
    survey: surveyPropTypes,
    loading: PropTypes.bool.isRequired,
    requested: PropTypes.bool.isRequired
};

ReviewOverview.defaultProps = {
    address: undefined,
    survey: undefined
};

export default ReviewOverview;
