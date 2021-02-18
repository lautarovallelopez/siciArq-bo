import dwellingResponse from '@config/dwelling/dwellingResponse';
import householdResponse from '@config/household/householdResponse';
import memberResponse from '@config/member/memberResponse';

import {answers, entities} from '@constants/review';

export const getQuestion = (questionName, entity) => {
    const model = {
        [entities.DWELLING]: dwellingResponse,
        [entities.HOUSEHOLD]: householdResponse,
        [entities.MEMBER]: memberResponse
    };

    return model[entity]?.questions.find(question => question.name === questionName);
};

export const getOption = (questionName, entity, value) => {
    const question = getQuestion(questionName, entity);
    return question?.options?.find(option => option.id === value);
};

export const getOptionLabel = (questionName, entity, value) => getOption(questionName, entity, value)?.label || '';

export const getResponseLabel = (entityResponse = {}, entity) => {
    const response = getOptionLabel('response', entity, entityResponse.response);
    const noResponseReason = getOptionLabel('noResponseReason', entity, entityResponse.noResponseReason);
    const causeLabel = {
        [entities.HOUSEHOLD]: 'noResponseReasonCause',
        [entities.MEMBER]: 'noResponseCause'
    };
    const noResponseReasonCause = causeLabel[entity]
        ? `. ${getOptionLabel(causeLabel[entity], entity, entityResponse[causeLabel[entity]])}`
        : '';

    if (entity === entities.DWELLING) {
        return entityResponse.response === answers.YES
            ? response
            : `${response} - ${noResponseReason}${noResponseReasonCause}`;
    }

    const section = {
        [entities.HOUSEHOLD]: 'BH',
        [entities.MEMBER]: 'BI'
    };

    if (!entityResponse.response) {
        return 'Sin respuesta';
    }

    return entityResponse.response === answers.YES
        ? `${response} - Respuesta del ${section[entity]}`
        : `${response} - ${noResponseReason}${noResponseReasonCause}`;
};

export const getRadioTableResponseValue = (chapter, question = {}, subQuestion = {}) => {
    let responseOption;
    if (chapter?.[question.name]?.[subQuestion.name]) {
        responseOption = subQuestion.options?.find(
            option => option?.id === chapter[question.name][subQuestion.name]
        );
    }

    return responseOption?.label || '';
};

export const getRadioResponseValue = (chapter, question) => {
    const selectedOption = question.options.find(option => option.id === chapter[question.name]);
    if (selectedOption) {
        return selectedOption.isInput ? chapter[selectedOption.name] : selectedOption.label;
    }
    return '';
};

export const getTimeValue = value => {
    if (value.hour && value.minute) {
        return `${value.hour}:${value.minute}`;
    }
    return 'Ns/Nc';
};
