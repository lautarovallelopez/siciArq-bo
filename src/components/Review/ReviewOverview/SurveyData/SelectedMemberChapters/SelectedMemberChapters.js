import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {UncontrolledCollapse} from 'reactstrap';

import timeUseIntroduction from '@config/member/timeUseIntroduction';
import rescueQuestions from '@config/member/rescueQuestions';
import income from '@config/member/income';

import memberPropTypes from '@util/propTypes/member';

import ActivityDiary from './ActivityDiary';
import ChapterCard from '../ChapterCard';

import {StyledEntityCardTitle, TitleContainer} from '../styled';

const SelectedMemberChapters = ({householdId, member, index}) => (
    <>
        <StyledEntityCardTitle
            key={member.id}
            id={`member-${member.id}-${householdId}`}
            marginTop="5px"
        >
            <TitleContainer>
                <div>
                    Miembro seleccionado -
                    {' '}
                    {`${member.characteristics.name} ${member.characteristics.quantity}`}
                </div>
                <div>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
            </TitleContainer>
        </StyledEntityCardTitle>
        <UncontrolledCollapse toggler={`#member-${member.id}-${householdId}`}>
            {member.timeUseIntroduction && (
                <ChapterCard
                    id={`time-use-introduction-${householdId}-${index}`}
                    model={timeUseIntroduction}
                    chapters={[member.timeUseIntroduction]}
                />
            )}
            {member.activityDiary && <ActivityDiary activityDiary={member.activityDiary}/>}
            {member.rescueQuestions && (
                <ChapterCard
                    id={`rescue-questions-${householdId}-${index}`}
                    model={rescueQuestions}
                    chapters={[member.rescueQuestions]}
                />
            )}
            {member.income && (
                <ChapterCard
                    id={`income-${householdId}-${index}`}
                    model={income}
                    chapters={[member.income]}
                />
            )}
        </UncontrolledCollapse>
    </>
);

SelectedMemberChapters.propTypes = {
    member: memberPropTypes.isRequired,
    householdId: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
};

export default SelectedMemberChapters;
