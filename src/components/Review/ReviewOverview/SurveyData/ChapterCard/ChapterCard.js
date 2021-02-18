import React from 'react';
import PropTypes from 'prop-types';
import compact from 'lodash/compact';

import {
    carePeopleOutsideHome,
    careSeekers,
    characteristics,
    domesticWorkActivities,
    dwellingCharacteristics,
    householdCharacteristics,
    householdComments,
    householdDetection,
    householdIncome,
    income,
    laborSituation,
    rescueQuestions,
    timeUseIntroduction,
    voluntaryWork
} from '@util/propTypes/chapters';

import {
    StyledUncontrolledCollapse, CardContainer, ChapterLabel, StyledChapterTitle
} from '@util/ui';

import questionPropTypes from '@util/propTypes/question';

import Questions from './Questions';

import {MemberContainer} from './styled';

const ChapterCard = ({
    id, model, chapters, showMemberData
}) => (
    <CardContainer data-testid={id}>
        <StyledChapterTitle id={id}>
            <ChapterLabel>{model.label}</ChapterLabel>
        </StyledChapterTitle>
        <StyledUncontrolledCollapse toggler={id}>
            {compact(chapters).map((chapter, chapterIndex) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={`chapter-${chapterIndex}`}>
                    {showMemberData
                        ? (
                            <MemberContainer>
                                <StyledChapterTitle id={`chapter-${chapterIndex}`}>
                                    <ChapterLabel>{`${chapter.memberName} - ${chapter.memberAge}`}</ChapterLabel>
                                </StyledChapterTitle>
                                <StyledUncontrolledCollapse toggler={`#chapter-${chapterIndex}`}>
                                    <Questions questions={model.questions} chapter={chapter}/>
                                </StyledUncontrolledCollapse>
                            </MemberContainer>
                        )
                        : <Questions questions={model.questions} chapter={chapter}/>}
                </div>
            ))}
        </StyledUncontrolledCollapse>
    </CardContainer>
);

ChapterCard.propTypes = {
    id: PropTypes.string.isRequired,
    model: PropTypes.shape({
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        questions: PropTypes.arrayOf(questionPropTypes.isRequired).isRequired
    }).isRequired,
    chapters: PropTypes.arrayOf(
        PropTypes.oneOfType([
            carePeopleOutsideHome,
            careSeekers,
            characteristics,
            domesticWorkActivities,
            dwellingCharacteristics,
            householdCharacteristics,
            householdComments,
            householdDetection,
            householdIncome,
            income,
            laborSituation,
            rescueQuestions,
            timeUseIntroduction,
            voluntaryWork
        ])
    ).isRequired,
    showMemberData: PropTypes.bool
};

ChapterCard.defaultProps = {
    showMemberData: false
};

export default ChapterCard;
