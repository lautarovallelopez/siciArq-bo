import PropTypes from 'prop-types';
import values from 'lodash/values';

import {statuses} from '@constants/review';

export default PropTypes.shape({
    personGreaterThanSixtyFiveNeedsCare: PropTypes.number,
    personGreaterThanSixtyFiveLives: PropTypes.shape({
        nursingHome: PropTypes.number,
        anotherHousehold: PropTypes.number,
        other: PropTypes.number,
        specification: PropTypes.string
    }),
    nursingHomePaidIsMadeFor: PropTypes.shape({
        personThatLivesInTheNursingHome: PropTypes.number,
        thisHousehold: PropTypes.number,
        relativeFromAnotherHousehold: PropTypes.number,
        socialWork: PropTypes.number,
        preapid: PropTypes.number,
        pami: PropTypes.number,
        other: PropTypes.number,
        specification: PropTypes.string
    }),
    status: PropTypes.oneOf(values(statuses))
});
