import PropTypes from 'prop-types';
import values from 'lodash/values';

import {entities} from '@constants/review';

export default PropTypes.shape({
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired
    }).isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    survey: PropTypes.number.isRequired,
    entity: PropTypes.oneOf(values(entities)).isRequired,
    id: PropTypes.string.isRequired,
    dwellingVisit: PropTypes.number.isRequired,
    comments: PropTypes.string,
    observations: PropTypes.string,
    household: PropTypes.number,
    interrupt: PropTypes.number,
    member: PropTypes.string,
    response: PropTypes.number.isRequired
});
