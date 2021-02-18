import PropTypes from 'prop-types';
import values from 'lodash/values';

import {statuses} from '@constants/review';

import householdPropTypes from './household';

export default PropTypes.shape({
    survey: PropTypes.number.isRequired,
    dwellingResponse: PropTypes.shape({
        response: PropTypes.number.isRequired,
        noResponseReason: PropTypes.number,
        status: PropTypes.oneOf(values(statuses))
    }),
    dwellingComments: PropTypes.shape({
        comments: PropTypes.string
    }),
    metadata: PropTypes.shape({
        entity: PropTypes.string.isRequired
    }).isRequired,
    households: PropTypes.arrayOf(householdPropTypes)
});
