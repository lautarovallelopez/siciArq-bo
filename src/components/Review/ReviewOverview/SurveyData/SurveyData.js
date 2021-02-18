import React from 'react';
import Proptypes from 'prop-types';
import {CardHeader} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

import {answers} from '@constants/review';

import dwellingPropTypes from '@util/propTypes/dwelling';
import visitPropTypes from '@util/propTypes/visit';

import {StyledCard, StyledUncontrolledCollapse} from '@util/ui';

import ChapterCard from '@components/Review/ReviewOverview/SurveyData/ChapterCard';

import dwellingComments from '@config/dwelling/comments';

import HouseholdChapters from './HouseholdChapters';
import SelectedMemberChapters from './SelectedMemberChapters';
import Visits from './Visits';

import {StyledEntityCardTitle, StyledHouseholdCard, TitleContainer} from './styled';

const SurveyData = ({dwelling, visits}) => (
    <StyledCard>
        <CardHeader color="info">
            Contenido de la encuesta
        </CardHeader>
        {dwelling.dwellingResponse?.response === answers.NO && (
            <ChapterCard
                id="dwelling-comments"
                model={dwellingComments}
                chapters={[dwelling.dwellingComments]}
            />
        )}
        {dwelling.households && dwelling.households.map((household, index) => (
            <StyledHouseholdCard key={household.id}>
                <StyledEntityCardTitle id={`household-${household.id}-${index}`}>
                    <TitleContainer>
                        <div>
                            {`Hogar ${household.id}`}
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </div>
                    </TitleContainer>
                </StyledEntityCardTitle>
                <StyledUncontrolledCollapse toggler={`#household-${household.id}-${index}`}>
                    <HouseholdChapters household={household} index={index}/>
                    {household.members && household.members.map((member, memberIndex) => member.selectedMember && (
                        <div key={member.id}>
                            <SelectedMemberChapters member={member} householdId={household.id} index={memberIndex}/>
                        </div>
                    ))}
                    <Visits visits={visits.filter(visit => !visit.household || visit.household === household.id)} householdId={index}/>
                </StyledUncontrolledCollapse>
            </StyledHouseholdCard>
        ))}
    </StyledCard>
);

SurveyData.propTypes = {
    dwelling: dwellingPropTypes.isRequired,
    visits: Proptypes.arrayOf(visitPropTypes).isRequired
};

export default SurveyData;
