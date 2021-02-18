import PropTypes from 'prop-types';
import values from 'lodash/values';

import {statuses} from '@constants/review';

export default PropTypes.shape({
    takeCareOfChildrenFromZeroToThirteen: PropTypes.number,
    mentionTakeCareOfChildrenFromZeroToThirteen: PropTypes.number,
    takeCareOfPeopleOverSixtyFive: PropTypes.number,
    mentionTakeCareOfPeopleOverSixtyFive: PropTypes.number,
    takeCareOfPeopleWithDisabilities: PropTypes.number,
    mentionTakeCareOfPeopleWithDisabilities: PropTypes.number,
    status: PropTypes.oneOf(values(statuses))
});
