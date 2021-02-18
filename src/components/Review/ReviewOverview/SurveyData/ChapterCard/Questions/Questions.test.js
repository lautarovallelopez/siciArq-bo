import {getByTestId, getByText} from '@testing-library/react';

import Questions from './Questions';

describe('<Questions>', () => {
    let props;
    const getComponent = () => render(Questions, props);
    beforeEach(() => {
        props = {
            questions: [
                {
                    id: 1,
                    label: '1.',
                    question: 'Question one?',
                    name: 'firstQuestion',
                    type: 'radio',
                    options: [
                        {
                            id: 1,
                            label: 'Yes'
                        },
                        {
                            id: 2,
                            label: 'No'
                        },
                        {
                            id: 99,
                            label: 'Don`t know'
                        }
                    ]
                },
                {
                    id: 2,
                    label: '2.',
                    question: 'Question two?',
                    subTitle: 'question two subTitle',
                    name: 'secondQuestion',
                    type: 'input'
                },
                {
                    id: 3,
                    label: '3.',
                    question: 'Question three?',
                    name: 'thirdQuestion',
                    type: 'radio_table',
                    subQuestions: [
                        {
                            name: 'subQuestion',
                            label: 'is it a sub question?',
                            options: [
                                {
                                    id: 1,
                                    label: 'Yes'
                                },
                                {
                                    id: 2,
                                    label: 'No'
                                }
                            ]
                        },
                        {
                            name: 'subQuestionOption',
                            id: 99,
                            inputName: 'subQuestionInput',
                            label: 'Write a message',
                            isInput: true
                        }
                    ]
                },
                {
                    id: 2,
                    label: '4.',
                    question: 'Question four',
                    name: 'fourthQuestion',
                    type: 'time'
                }
            ],
            chapter: {
                firstQuestion: 99,
                secondQuestion: 'this is a text provided from an input',
                thirdQuestion: {
                    subQuestion: 99,
                    subQuestionInput: 'test'
                },
                fourthQuestion: {
                    hour: 4,
                    minute: 15
                }
            }
        };
    });
    afterEach(tearDown);

    it('should display questions and answers', () => {
        const {container} = getComponent();
        props.questions.forEach((question, index) => {
            const label = getByTestId(container, `question-label-${index}`);
            expect(getByText(label, `${question.label} ${question.question}`))
                .toBeInTheDocument();

            if (question.subTitle) {
                const subTitle = getByTestId(container, `question-sub-title-${index}`);
                expect(getByText(subTitle, question.subTitle))
                    .toBeInTheDocument();
            }

            if (question.type === 'radio') {
                const questionId = getByTestId(container, `question-radio-${index}`);
                expect(getByText(questionId, 'Don`t know'))
                    .toBeInTheDocument();
            }
            if (question.type === 'input') {
                const questionId = getByTestId(container, `question-input-${index}`);
                expect(getByText(questionId, 'this is a text provided from an input'))
                    .toBeInTheDocument();
            }
            if (question.type === 'radioTable') {
                question.subQuestions.forEach((subQuestion, subQuestionIndex) => {
                    const subQuestionLabel = getByTestId(container, `sub-question-label-${subQuestionIndex}`);
                    expect(
                        getByText(subQuestionLabel, subQuestion.label)
                    )
                        .toBeInTheDocument();
                    if (subQuestion.isInput) {
                        const input = getByTestId(container, `sub-question-input-${subQuestionIndex}`);
                        expect(getByText(input, 'test'))
                            .toBeInTheDocument();
                    } else {
                        const subQuestionAnswer = getByTestId(container, `sub-question-${subQuestionIndex}`);
                        expect(getByText(subQuestionAnswer, 'No'))
                            .toBeInTheDocument();
                    }
                });
            }
            if (question.type === 'time') {
                const questionId = getByTestId(container, `question-time-${index}`);
                expect(getByText(questionId, '4:15'))
                    .toBeInTheDocument();
            }
        });
    });
});
