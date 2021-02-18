import PropTypes from 'prop-types';
import values from 'lodash/values';

import {statuses} from '@constants/review';

export default PropTypes.shape({
    takeCare: PropTypes.shape({
        aRelativeCaresForHim: PropTypes.number,
        personWhoDoesNotReceivePayment: PropTypes.number,
        communityOrganization: PropTypes.number,
        stateInstitution: PropTypes.number,
        householdMember: PropTypes.number,
        personOrInstitution: PropTypes.number,
        other: PropTypes.number,
        specification: PropTypes.string,
        nobody: PropTypes.number
    }),
    thePaidIsMake: PropTypes.shape({
        youOrAnotherMember: PropTypes.number,
        relative: PropTypes.number,
        medicalCare: PropTypes.number,
        prepaid: PropTypes.number,
        pami: PropTypes.number,
        other: PropTypes.number,
        specification: PropTypes.string
    }),
    status: PropTypes.oneOf(values(statuses))
});
