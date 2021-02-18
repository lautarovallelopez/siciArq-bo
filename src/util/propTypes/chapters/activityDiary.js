import PropTypes from 'prop-types';
import values from 'lodash/values';

import {statuses} from '@constants/review';

export default PropTypes.shape({
    activities: PropTypes.arrayOf(
        PropTypes.shape({
            hour: PropTypes.string.isRequired,
            minute: PropTypes.string.isRequired,
            comment: PropTypes.string,
            data: PropTypes.arrayOf(
                PropTypes.shape({
                    tab: PropTypes.number.isRequired,
                    group: PropTypes.number,
                    activity: PropTypes.number.isRequired,
                    column: PropTypes.number.isRequired,
                    startTime: PropTypes.shape({
                        hour: PropTypes.number.isRequired,
                        minute: PropTypes.number.isRequired
                    }).isRequired,
                    endTime: PropTypes.shape({
                        hour: PropTypes.number.isRequired,
                        minute: PropTypes.number.isRequired
                    }).isRequired,
                    subQuestions: PropTypes.shape({
                        whoCared: PropTypes.number,
                        ageOrCondition: PropTypes.number,
                        whoDidThisActivityFor: PropTypes.number,
                        whoDidThisVoluntaryWorkFor: PropTypes.number,
                        whoDidThisSupportToOtherHouseholdsFor: PropTypes.number
                    })
                })
            )
        })
    ),
    date: PropTypes.string,
    status: PropTypes.oneOf(values(statuses))
});
