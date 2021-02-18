import {componentTypes, yesNoOptions} from '@constants/review';

import * as chaptersData from '../chaptersData';

describe('getQuestion', () => {
    let questionName;
    let entity;

    describe('when the `questionName` matches with a question`s name', () => {
        beforeEach(() => {
            questionName = 'response';
            entity = 'household';
        });

        it('should return the question that matched with the question name', () => {
            expect(chaptersData.getQuestion(questionName, entity))
                .toEqual({
                    id: 1,
                    label: '1.',
                    question: 'Indique si el hogar es respondente',
                    name: 'response',
                    type: componentTypes.RADIO,
                    options: yesNoOptions
                });
        });
    });

    describe('when the `questionName` doesn`t match with a question`s name', () => {
        beforeEach(() => {
            questionName = 'test';
            entity = 'household';
        });

        it('should return `undefined`', () => {
            expect(chaptersData.getQuestion(questionName, entity))
                .toBeUndefined();
        });
    });
});

describe('getOption', () => {
    let questionName;
    let entity;
    let value;

    describe('when a question`s option matches with the provided `questionName`', () => {
        beforeEach(() => {
            questionName = 'noResponseReason';
            entity = 'member';
            value = 7;
        });

        it('should return the option that matched with the `value`', () => {
            expect(
                chaptersData.getOption(questionName, entity, value)
            )
                .toEqual(
                    {
                        id: 7,
                        label: 'Ausencia'
                    }
                );
        });
    });

    describe('when the question`s option doesn`t match with the provided `questionName`', () => {
        beforeEach(() => {
            questionName = 'noResponseReason';
            entity = 'member';
            value = 32;
        });

        it('should return `undefined`', () => {
            expect(
                chaptersData.getOption(questionName, entity, value)
            )
                .toBeUndefined();
        });
    });
});

describe('getOptionLabel', () => {
    let questionName;
    let entity;
    let value;

    describe('when a question`s option matches with the provided `questionName`', () => {
        beforeEach(() => {
            questionName = 'noResponseReason';
            entity = 'member';
            value = 7;
        });

        it('should return the option`s label that matched with the `value`', () => {
            expect(
                chaptersData.getOptionLabel(questionName, entity, value)
            )
                .toBe('Ausencia');
        });
    });

    describe('when a question`s option doesn`t match with the provided `questionName`', () => {
        beforeEach(() => {
            questionName = 'noResponseReason';
            entity = 'member';
            value = 71;
        });

        it('should return an empty string', () => {
            expect(
                chaptersData.getOptionLabel(questionName, entity, value)
            )
                .toBe('');
        });
    });
});

describe('getResponseLabel', () => {
    let entityResponse;
    let entity;

    describe('when `entityResponse.response` is `1`', () => {
        beforeEach(() => {
            entity = 'household';
            entityResponse = {
                response: 1
            };
        });

        it('should return the value of response and the section', () => {
            expect(
                chaptersData.getResponseLabel(entityResponse, entity)
            )
                .toBe('Sí - Respuesta del BH');
        });

        describe('when the `entity` is `dwelling`', () => {
            beforeEach(() => {
                entity = 'dwelling';
            });

            it('should return `Encuestable`', () => {
                expect(chaptersData.getResponseLabel(entityResponse, entity))
                    .toBe('Encuestable');
            });
        });
    });

    describe('when `entityResponse.response` is `2`', () => {
        beforeEach(() => {
            entity = 'household';
            entityResponse = {
                response: 2,
                noResponseReason: 7,
                noResponseReasonCause: 71
            };
        });

        it('should return the value of response and the section', () => {
            expect(
                chaptersData.getResponseLabel(entityResponse, entity)
            )
                .toBe('No - Ausencia. No se pudo contactar en tres visitas');
        });

        describe('when the `entity` is `dwelling`', () => {
            beforeEach(() => {
                entity = 'dwelling';
            });

            it('should return the value of response and the section', () => {
                expect(
                    chaptersData.getResponseLabel(entityResponse, entity)
                )
                    .toBe('No encuestable - Dirección no existente');
            });
        });
    });

    describe('when `entityResponse.response` is not defined', () => {
        beforeEach(() => {
            entity = 'household';
            entityResponse = {};
        });

        it('should `Sin respuesta`', () => {
            expect(
                chaptersData.getResponseLabel(entityResponse, entity)
            )
                .toBe('Sin respuesta');
        });
    });
});

describe('getRadioTableResponseValue', () => {
    let chapter;
    let question;
    let subQuestion;

    describe('when the chapter has the `question.name` and the `subQuestion.name` as value', () => {
        beforeEach(() => {
            chapter = {
                questionTest: {
                    subQuestionTest: 2
                }
            };
            question = {
                name: 'questionTest'
            };
            subQuestion = {
                name: 'subQuestionTest',
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
            };
        });

        it('should return the label', () => {
            expect(
                chaptersData.getRadioTableResponseValue(chapter, question, subQuestion)
            )
                .toBe('No');
        });
    });

    describe('when the chapter has the `question.name` and the `subQuestion.name` as value', () => {
        beforeEach(() => {
            chapter = {
                questionTest: {
                    subQuestionTest: 3
                }
            };
            question = {
                name: 'questionTest'
            };
            subQuestion = {
                name: 'subQuestionTest',
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
            };
        });

        describe('when the `subQuestion.options` doesn`t match with the chapter`s value', () => {
            beforeEach(() => {
                chapter = {
                    questionTest: {
                        subQuestionTest: 3
                    }
                };
            });

            it('should return an empty string', () => {
                expect(
                    chaptersData.getRadioTableResponseValue(chapter, question, subQuestion)
                )
                    .toBe('');
            });
        });
    });

    describe('when the chapter has not the `question.name` and the `subQuestion.name` as value', () => {
        beforeEach(() => {
            chapter = {};
            question = {
                name: 'questionTest'
            };
            subQuestion = {
                name: 'subQuestionTest',
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
            };
        });

        it('should return an empty string', () => {
            expect(
                chaptersData.getRadioTableResponseValue(chapter, question, subQuestion)
            )
                .toBe('');
        });
    });
});

describe('getRadioResponseValue', () => {
    let chapter;
    let question;

    describe('when there is a selected option and it is an input', () => {
        beforeEach(() => {
            question = {
                name: 'hasPets',
                options: [
                    {
                        id: 1,
                        label: 'Yes'
                    },
                    {
                        id: 2,
                        label: 'Another option',
                        isInput: true,
                        name: 'anotherOption'
                    }
                ]
            };
            chapter = {
                hasPets: 2,
                anotherOption: 'this is a text input'
            };
        });

        it('should return input`s value', () => {
            expect(
                chaptersData.getRadioResponseValue(chapter, question)
            )
                .toBe('this is a text input');
        });
    });

    describe('when there is a selected option and it is not an input', () => {
        beforeEach(() => {
            question = {
                name: 'hasPets',
                options: [
                    {
                        id: 1,
                        label: 'Yes'
                    },
                    {
                        id: 2,
                        label: 'Another option',
                        isInput: true,
                        name: 'anotherOption'
                    }
                ]
            };
            chapter = {
                hasPets: 1,
                anotherOption: 'this is a text input'
            };
        });

        it('should return selectedOption`s label', () => {
            expect(
                chaptersData.getRadioResponseValue(chapter, question)
            )
                .toBe('Yes');
        });
    });

    describe('when there is not a selected option', () => {
        beforeEach(() => {
            question = {
                name: 'hasPets',
                options: [
                    {
                        id: 1,
                        label: 'Yes'
                    },
                    {
                        id: 2,
                        label: 'Another option',
                        isInput: true,
                        name: 'anotherOption'
                    }
                ]
            };
            chapter = {
                hasPets: 3,
                anotherOption: 'this is a text input'
            };
        });

        it('should return an empty string', () => {
            expect(
                chaptersData.getRadioResponseValue(chapter, question)
            )
                .toBe('');
        });
    });
});
