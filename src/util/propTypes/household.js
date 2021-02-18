import PropTypes from 'prop-types';
import values from 'lodash/values';

import {statuses} from '@constants/review';

import carePeopleOutsideHomePropTypes from './chapters/carePeopleOutsideHome';
import dwellingCharacteristicsPropTypes from './chapters/dwellingCharacteristics';
import domesticWorkActivitiesPropTypes from './chapters/domesticWorkActivities';
import householdCharacteristicsPropTypes from './chapters/householdCharacteristics';
import householdDetectionPropTypes from './chapters/householdDetection';
import householdIncomePropTypes from './chapters/householdIncome';

import memberPropTypes from './member';

export default PropTypes.shape({
    status: PropTypes.oneOf(values(statuses)).isRequired,
    survey: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    householdResponse: PropTypes.shape({
        response: PropTypes.number,
        noResponseReason: PropTypes.number,
        noResponseReasonCause: PropTypes.number,
        status: PropTypes.oneOf(values(statuses))
    }),
    dwellingCharacteristics: dwellingCharacteristicsPropTypes,
    householdCharacteristics: householdCharacteristicsPropTypes,
    householdDetection: householdDetectionPropTypes,
    householdIncome: householdIncomePropTypes,
    metadata: PropTypes.shape({
        entity: PropTypes.string.isRequired
    }).isRequired,
    members: PropTypes.arrayOf(memberPropTypes),
    householdComments: PropTypes.shape({
        telephone: PropTypes.number,
        telephoneNumber: PropTypes.string,
        mobilePhone: PropTypes.number,
        mobilePhoneNumber: PropTypes.string,
        comments: PropTypes.string
    }),
    carePeopleOutsideHome: carePeopleOutsideHomePropTypes,
    domesticWorkActivities: domesticWorkActivitiesPropTypes,
    hasMemberResponse: PropTypes.bool
});
