import chapters from '@constants/chapters';
import {componentTypes, yesNoOptions} from '@constants/review';

const householdDetection = {
    label: '2. Detección de viviendas y hogares (DV)',
    name: chapters.HOUSEHOLD_DETECTION,
    questions: [
        {
            id: 1,
            label: '1.',
            question: '¿Existen otras viviendas en esta misma dirección?',
            name: 'existsOtherDwellingsInTheSameAddress',
            type: componentTypes.RADIO,
            options: yesNoOptions
        },
        {
            id: 2,
            label: '2.',
            question: '¿Todas las personas que residen en esta vivienda comparten los gastos de comida?',
            name: 'shareFoodExpenses',
            type: componentTypes.RADIO,
            options: yesNoOptions
        },
        {
            id: 3,
            label: '3.',
            question: '¿En este/estos hogar/es hay…',
            name: 'inThisHouseholdThereAre',
            type: componentTypes.RADIO_TABLE,
            subQuestions: [
                {
                    name: 'domesticService',
                    label: '...servico doméstico con cama adentro?',
                    options: yesNoOptions
                },
                {
                    name: 'pensioners',
                    label: '...pensionistas?',
                    options: yesNoOptions
                }
            ]
        },
        {
            id: 4,
            label: '4.',
            question: 'Cantidad total de hogares que residen en esta vivienda',
            subTitle: 'Hogar: persona o grupo de personas, parientes o no, que habitan bajo el '
                + 'mismo techo y comparten los gastos de alimentación.',
            type: componentTypes.INPUT,
            name: 'householdsQuantity'
        }
    ]
};

export default householdDetection;
