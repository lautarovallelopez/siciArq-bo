import chapters from '@constants/chapters';
import {componentTypes} from '@constants/review';

const householdComments = {
    label: 'Teléfonos del hogar y observaciones (TH)',
    name: chapters.HOUSEHOLD_COMMENTS,
    questions: [
        {
            id: 1,
            question: 'Teléfono fijo',
            name: 'telephone',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'Tiene teléfono',
                    isInput: true,
                    name: 'telephoneNumber'
                },
                {
                    id: 2,
                    label: 'No tiene'
                },
                {
                    id: 3,
                    label: 'No lo quiso dar'
                }
            ]
        },
        {
            id: 2,
            question: 'Teléfono celular',
            name: 'mobilePhone',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'Tiene teléfono',
                    isInput: true,
                    name: 'mobilePhoneNumber'
                },
                {
                    id: 2,
                    label: 'No tiene'
                },
                {
                    id: 3,
                    label: 'No lo quiso dar'
                }
            ]
        },
        {
            id: 3,
            question: 'Observaciones',
            type: componentTypes.INPUT,
            multiline: true,
            numberOfLines: 10,
            name: 'comments',
            optional: true
        },
        {
            id: 4,
            question: 'Cierre de visita',
            subTitle: 'Usted esta por cerrar la visita',
            placeholder: 'Comentario',
            name: 'visitComment',
            type: componentTypes.INPUT,
            optional: true
        }
    ]
};

export default householdComments;
