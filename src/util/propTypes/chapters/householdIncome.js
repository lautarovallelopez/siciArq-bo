import PropTypes from 'prop-types';
import values from 'lodash/values';

import {statuses} from '@constants/review';

export default PropTypes.shape({
    income: PropTypes.number,
    mount: PropTypes.number,
    incomeRange: PropTypes.number,
    perceivedSomeIncome: PropTypes.shape({
        universalChildAllowance: PropTypes.number,
        socialPlans: PropTypes.number
    }),
    status: PropTypes.oneOf(values(statuses))
});
