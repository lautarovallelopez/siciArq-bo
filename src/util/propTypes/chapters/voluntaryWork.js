import PropTypes from 'prop-types';
import values from 'lodash/values';

import {statuses} from '@constants/review';

export default PropTypes.shape({
    didVolunteerWork: PropTypes.number,
    status: PropTypes.oneOf(values(statuses))
});
