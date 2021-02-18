import PropTypes from 'prop-types';
import values from 'lodash/values';

import {statuses} from '@constants/review';

export default PropTypes.shape({
    lastWeekWorkOneHour: PropTypes.number,
    isAPaidWork: PropTypes.number,
    noWorkLastWeekReason: PropTypes.number,
    firstReasonForNotWorking: PropTypes.number,
    noWorkReason: PropTypes.number,
    lastThirtyDaysSearchWork: PropTypes.number,
    noSearchWorkReason: PropTypes.number,
    noSearchWorkReasonSpecification: PropTypes.string,
    weekHours: PropTypes.number,
    wayOfWorking: PropTypes.number,
    salariedPeopleAreEmployed: PropTypes.number,
    haveRetirementDiscount: PropTypes.number,
    contributesToARetirementSystem: PropTypes.number,
    status: PropTypes.oneOf(values(statuses))
});
