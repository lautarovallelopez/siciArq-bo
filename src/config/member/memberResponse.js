import chapters from '@constants/chapters';
import {componentTypes, yesNoOptions} from '@constants/review';

const memberResponse = {
    label: '1. Respuesta Individual (RI)',
    name: chapters.MEMBER_RESPONSE,
    questions: [
        {
            id: 1,
            label: '1.',
            question: 'Indique si el miembro seleccionado responde a la encuesta',
            name: 'response',
            type: componentTypes.RADIO,
            options: yesNoOptions
        },
        {
            id: 2,
            label: '2.',
            question: 'Razón de no respuesta',
            name: 'noResponseReason',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 7,
                    label: 'Ausencia'
                },
                {
                    id: 8,
                    label: 'Rechazo'
                },
                {
                    id: 9,
                    label: 'Otras causas',
                    name: 'otherMotives',
                    isInput: true,
                    placeholder: 'Especificar'
                }
            ]
        },
        {
            id: 3,
            label: '3.',
            question: 'Causa de no respuesta',
            name: 'noResponseCause',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'Negativa rotunda'
                },
                {
                    id: 2,
                    label: 'Rechazo por portero eléctrico'
                },
                {
                    id: 3,
                    label: 'Se acordaron entrevistas que no se concretaron'
                },
                {
                    id: 4,
                    label: 'La encuesta demanda mucho tiempo'
                },
                {
                    id: 5,
                    label: 'No quiere hablar del tema'
                },
                {
                    id: 6,
                    label: 'Desconfía que van a hacer con los datos'
                }
            ]
        }
    ]
};

export default memberResponse;
