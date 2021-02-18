import PropTypes from 'prop-types';
import values from 'lodash/values';

import {statuses} from '@constants/review';

export default PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    quantity: PropTypes.string,
    relationshipWithHouseholdHead: PropTypes.number,
    gender: PropTypes.number,
    genderConsideration: PropTypes.number,
    genderSpecification: PropTypes.string,
    maritalStatus: PropTypes.number,
    educationalAttendance: PropTypes.number,
    educationalType: PropTypes.number,
    educationalTime: PropTypes.shape({
        hour: PropTypes.number,
        minute: PropTypes.number,
        dontKnow: PropTypes.number
    }),
    maxEducationalAttendance: PropTypes.number,
    finishedLevel: PropTypes.number,
    lastApprovedLevel: PropTypes.number,
    isAssociatedWith: PropTypes.shape({
        socialWork: PropTypes.number,
        pami: PropTypes.number,
        prepaidThroughSocialWork: PropTypes.number,
        prepaidForVoluntaryWork: PropTypes.number,
        medicalEmergencyService: PropTypes.number,
        stateHealthPlan: PropTypes.number,
        noneOfTheAbove: PropTypes.number,
        dontKnow: PropTypes.number
    }),
    needHelpToMakeActivities: PropTypes.number,
    status: PropTypes.oneOf(values(statuses))
});
