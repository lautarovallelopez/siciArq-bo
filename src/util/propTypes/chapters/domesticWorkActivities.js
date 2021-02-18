import PropTypes from 'prop-types';
import values from 'lodash/values';

import {statuses} from '@constants/review';

export default PropTypes.shape({
    whoDoesTheHousework: PropTypes.shape({
        relativeWithoutPaid: PropTypes.number,
        anotherPersonWithoutPaid: PropTypes.number,
        personWithPaid: PropTypes.number,
        householdMembers: PropTypes.number,
        other: PropTypes.number,
        specification: PropTypes.string
    }),
    status: PropTypes.oneOf(values(statuses))
});
