import PropTypes from 'prop-types';
import values from 'lodash/values';

import {statuses} from '@constants/review';

export default PropTypes.shape({
    isExclusiveBathroom: PropTypes.number,
    exclusiveRoomsQuantity: PropTypes.string,
    roomsToSleep: PropTypes.string,
    status: PropTypes.oneOf(values(statuses))
});
