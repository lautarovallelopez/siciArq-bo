import PropTypes from 'prop-types';
import values from 'lodash/values';

import {statuses} from '@constants/review';

import activityDiaryPropTypes from './chapters/activityDiary';
import careSeekersPropTypes from './chapters/careSeekers';
import characteristicsPropTypes from './chapters/characteristics';
import incomePropTypes from './chapters/income';
import laborSituationPropTypes from './chapters/laborSituation';
import rescueQuestionsPropTypes from './chapters/rescueQuestions';
import timeUseIntroductionPropTypes from './chapters/timeUseIntroduction';
import voluntaryWorkPropTypes from './chapters/voluntaryWork';

export default PropTypes.shape({
    id: PropTypes.string.isRequired,
    survey: PropTypes.number.isRequired,
    metadata: PropTypes.shape({
        entity: PropTypes.string.isRequired
    }).isRequired,
    household: PropTypes.number.isRequired,
    characteristics: characteristicsPropTypes,
    laborSituation: laborSituationPropTypes,
    careSeekers: careSeekersPropTypes,
    voluntaryWork: voluntaryWorkPropTypes,
    timeUseIntroduction: timeUseIntroductionPropTypes,
    rescueQuestions: rescueQuestionsPropTypes,
    memberResponse: PropTypes.shape({
        response: PropTypes.number,
        noResponseReason: PropTypes.number,
        otherMotives: PropTypes.string,
        noResponseCause: PropTypes.number
    }),
    activityDiary: PropTypes.shape({
        status: PropTypes.oneOf(values(statuses)),
        activities: PropTypes.arrayOf(activityDiaryPropTypes),
        date: PropTypes.string
    }),
    income: incomePropTypes,
    selectedMember: PropTypes.bool,
    isCareSeeker: PropTypes.bool,
    isRespondent: PropTypes.bool
});
