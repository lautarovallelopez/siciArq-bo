import chapters from '@constants/chapters';
import {componentTypes} from '@constants/review';

const dwellingComments = {
    label: 'Observaciones de la vivienda (OV)',
    name: chapters.DWELLING_COMMENTS,
    questions: [
        {
            id: 1,
            question: 'Observaciones',
            type: componentTypes.INPUT,
            multiline: true,
            numberOfLines: 10,
            name: 'observations',
            optional: true
        }
    ]
};

export default dwellingComments;
