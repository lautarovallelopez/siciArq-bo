import {queryByText, getByText} from '@testing-library/react';

import ChapterCard from './ChapterCard';

describe('<ChapterCard>', () => {
    let props;
    const getComponent = () => render(ChapterCard, props);
    beforeEach(() => {
        props = {
            model: {
                label: 'First chapter',
                name: 'first-chapter',
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
                                name: 'subQuestionInput',
                                label: 'Write a message',
                                isInput: true
                            }
                        ]
                    }
                ]
            },
            chapters: [{
                firstQuestion: 99,
                secondQuestion: 'this is a text provided from an input',
                thirdQuestion: {
                    subQuestion: 1,
                    subQuestionInput: 'test'
                },
                memberName: 'user test',
                memberAge: 21
            }],
            id: 'test'
        };
    });
    afterEach(tearDown);

    it('should display `props.model.label`', () => {
        const {container} = getComponent();
        expect(
            getByText(container, props.model.label)
        )
            .toBeInTheDocument();
    });

    describe('when `props.showMemberData` is `true`', () => {
        beforeEach(() => {
            props.showMemberData = true;
        });

        it('should display `props.memberName` and `props.memberAge`', () => {
            const {container} = getComponent();
            props.chapters.forEach(() => {
                expect(getByText(container, 'user test - 21')).toBeInTheDocument();
            });
        });
    });

    describe('when `props.showMemberData` is `false`', () => {
        beforeEach(() => {
            props.showMemberData = false;
        });

        it('should not display `props.memberName` and `props.memberAge`', () => {
            const {container} = getComponent();
            props.chapters.forEach(() => {
                expect(queryByText(container, 'user test - 21')).toBeNull();
            });
        });
    });
});
