import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

import {componentTypes} from '@constants/review';

import {getRadioTableResponseValue, getRadioResponseValue, getTimeValue} from '@util/chaptersData';

import questionPropTypes from '@util/propTypes/question';

import {
    carePeopleOutsideHome,
    careSeekers,
    characteristics,
    domesticWorkActivities,
    dwellingCharacteristics,
    householdCharacteristics,
    householdDetection,
    householdIncome,
    income,
    laborSituation,
    rescueQuestions,
    timeUseIntroduction,
    voluntaryWork
} from '@util/propTypes/chapters';

import {
    QuestionContainer,
    QuestionLabel,
    Answer,
    StyledCardSubtitle,
    StyledResponseTitle,
    SubQuestionContainer,
    SubQuestionLabel
} from './styled';

const Questions = ({questions, chapter}) => questions.map((question, index) => (
    <div key={question.name}>
        {chapter[question.name] && (
            <QuestionContainer key={question.id}>
                <StyledResponseTitle>
                    <QuestionLabel data-testid={`question-label-${index}`}>
                        {question.label ? `${question.label} ${question.question}` : `${question.question}`}
                    </QuestionLabel>
                </StyledResponseTitle>
                {question.subTitle && (
                    <StyledCardSubtitle data-testid={`question-sub-title-${index}`}>
                        {question.subTitle}
                    </StyledCardSubtitle>
                )}
                {question.type === componentTypes.RADIO && (
                    <Answer data-testid={`question-radio-${index}`}>
                        {getRadioResponseValue(chapter, question)}
                    </Answer>
                )}
                {question.type === componentTypes.RADIO_TABLE && question.subQuestions.map(
                    (subQuestion, subQuestionIndex) => (
                        <SubQuestionContainer key={subQuestion.name}>
                            <SubQuestionLabel data-testid={`sub-question-label-${subQuestionIndex}`}>
                                {subQuestion.label}
                            </SubQuestionLabel>
                            {subQuestion.isInput ? (
                                <Answer data-testid={`sub-question-input-${subQuestionIndex}`} className="ml-3">
                                    {chapter[question.name][subQuestion.inputName]}
                                </Answer>
                            ) : (
                                <Answer data-testid={`sub-question-${subQuestionIndex}`} className="ml-3">
                                    {
                                        subQuestion.exclusive && chapter[question.name][subQuestion.name] === subQuestion.id
                                            ? <FontAwesomeIcon icon={faCheckCircle}/>
                                            : getRadioTableResponseValue(chapter, question, subQuestion)
                                    }
                                </Answer>
                            )}
                        </SubQuestionContainer>
                    )
                )}
                {question.type === componentTypes.INPUT && (
                    <Answer data-testid={`question-input-${index}`}>{chapter[question.name]}</Answer>
                )}
                {question.type === componentTypes.TIME && (
                    <Answer data-testid={`question-time-${index}`}>{getTimeValue(chapter[question.name])}</Answer>
                )}
            </QuestionContainer>
        )}
    </div>
));

Questions.propTypes = {
    chapter: PropTypes.oneOfType([
        carePeopleOutsideHome,
        careSeekers,
        characteristics,
        domesticWorkActivities,
        dwellingCharacteristics,
        householdCharacteristics,
        householdDetection,
        householdIncome,
        income,
        laborSituation,
        rescueQuestions,
        timeUseIntroduction,
        voluntaryWork
    ]).isRequired,
    questions: PropTypes.arrayOf(questionPropTypes).isRequired
};

export default Questions;
