import PropTypes from 'prop-types';
import values from 'lodash/values';

import {statuses} from '@constants/review';

export default PropTypes.shape({
    day: PropTypes.number,
    yesterdayWasALaborDay: PropTypes.number,
    laborDayType: PropTypes.number,
    noLaborDayType: PropTypes.number,
    status: PropTypes.oneOf(values(statuses))
});
