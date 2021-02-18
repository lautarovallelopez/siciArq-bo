import PropTypes from 'prop-types';
import values from 'lodash/values';

import {statuses} from '@constants/review';

export default PropTypes.shape({
    income: PropTypes.number,
    mount: PropTypes.string,
    incomeRange: PropTypes.number,
    status: PropTypes.oneOf(values(statuses))
});
