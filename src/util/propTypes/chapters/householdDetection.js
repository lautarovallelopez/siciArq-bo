import PropTypes from 'prop-types';
import values from 'lodash/values';

import {statuses} from '@constants/review';

export default PropTypes.shape({
    existsOtherDwellingsInTheSameAddress: PropTypes.number,
    shareFoodExpenses: PropTypes.number,
    inThisHouseholdThereAre: PropTypes.shape({
        domesticService: PropTypes.number,
        pensioners: PropTypes.number
    }),
    householdsQuantity: PropTypes.string,
    status: PropTypes.oneOf(values(statuses))
});
