import chapters from 'constants/chapters';
import {componentTypes, yesNoDontKnowOptions} from '@constants/review';

const carePeopleOutsideHome = {
    label: '10. Cuidado de personas de 65 años y más fuera del hogar (AH)',
    name: chapters.CARE_PEOPLE_OUTSIDE_HOME,
    questions: [
        {
            id: 1,
            label: '1.',
            question: '¿Alguna persona de 65 años o más que no viva aquí (en este hogar) demanda '
                + 'cuidado o ayuda de parte de alguna/s persona/s de este hogar? ',
            subTitle: 'Se entiende por cuidado: estar pendiente de ellos, cuidar de su salud, '
                + 'acompañarlos o trasladarlos; ayudarlos con la limpieza o la comida; ocuparse '
                + 'de su estadía en alguna institución para personas mayores '
                + '(a nivel económico o personal), etc.',
            name: 'personGreaterThanSixtyFiveNeedsCare',
            type: componentTypes.RADIO,
            options: yesNoDontKnowOptions
        },
        {
            id: 2,
            label: '2.',
            question: '¿Ésta o estas personas mayores...',
            subTitle: 'Lea todas las subpreguntas y consigne “Sí” o “No” en cada una de ellas. '
                + 'Si hay más de una persona mayor que demanda cuidado o ayuda señale todas '
                + 'las opciones que correspondan.',
            name: 'personGreaterThanSixtyFiveLives',
            type: componentTypes.RADIO_TABLE,
            subQuestions: [
                {
                    name: 'nursingHome',
                    label: '...vive actualmente en un hogar de ancianos o geriátrico?',
                    options: yesNoDontKnowOptions
                },
                {
                    name: 'anotherHousehold',
                    label: '...vive en otro hogar?',
                    options: yesNoDontKnowOptions
                },
                {
                    id: 99,
                    name: 'other',
                    label: '...otro?',
                    inputName: 'specification',
                    placeholder: 'Especificar',
                    isInput: true,
                    exclusive: true
                }
            ]
        },
        {
            id: 3,
            label: '3.',
            question: '¿Del pago del hogar de ancianos/geriátrico, ¿se hace cargo...',
            subTitle: 'Lea todas las subpreguntas y consigne “Sí” o “No” en cada una de ellas. '
                + 'Si hay más de una persona mayor que demanda cuidado o ayuda señale todas las '
                + 'opciones que correspondan.',
            name: 'nursingHomePaidIsMadeFor',
            type: componentTypes.RADIO_TABLE,
            subQuestions: [
                {
                    name: 'personThatLivesInTheNursingHome',
                    label: '...la/s persona/s mayor/es que reside/n en el geriátrico?',
                    options: yesNoDontKnowOptions
                },
                {
                    name: 'thisHousehold',
                    label: '...este hogar?',
                    options: yesNoDontKnowOptions
                },
                {
                    name: 'relativeFromAnotherHousehold',
                    label: '...un familiar de otro hogar?',
                    options: yesNoDontKnowOptions
                },
                {
                    name: 'socialWork',
                    label: '...una obra social, mutual o sindicato?',
                    options: yesNoDontKnowOptions
                },
                {
                    name: 'preapid',
                    label: '...una prepaga?',
                    options: yesNoDontKnowOptions
                },
                {
                    name: 'pami',
                    label: '...PAMI/un programa del Estado?',
                    options: yesNoDontKnowOptions
                },
                {
                    id: 99,
                    name: 'other',
                    label: '...otro?',
                    inputName: 'specification',
                    placeholder: 'Especificar',
                    isInput: true,
                    exclusive: true
                }
            ]
        }
    ]
};

export default carePeopleOutsideHome;
