import chapters from '@constants/chapters';
import {componentTypes, yesNoOptions} from '@constants/review';

const rescueQuestions = {
    label: '3. USO DEL TIEMPO. PREGUNTAS DE RESCATE (PR)',
    name: chapters.RESCUE_QUESTIONS,
    text: 'Nota para el/la encuestador/a: Antes de cerrar la entrevista, '
        + 'lea al/la entrevistado/a las siguientes preguntas. Si en alguna '
        + 'de ellas responde “Sí” y luego que no mencionó todas las veces en '
        + 'las que realizó dicha actividad, vuelva al Diario y registre '
        + 'la actividad en el horario que corresponda.',
    questions: [
        {
            id: 1,
            label: '1.',
            question: '¿Cuidó niños/as de 0 a 13 años en algún momento del día o de la noche de ayer?',
            name: 'takeCareOfChildrenFromZeroToThirteen',
            type: componentTypes.RADIO,
            options: yesNoOptions
        },
        {
            id: 2,
            label: '2.',
            question: '¿Lo mencionó todas las veces en el diario del día anterior que acabamos de completar?',
            name: 'mentionTakeCareOfChildrenFromZeroToThirteen',
            type: componentTypes.RADIO,
            options: yesNoOptions
        },
        {
            id: 3,
            label: '3.',
            question: '¿Cuidó personas mayores de 65 años y más en algún momento del día o de la noche de ayer?',
            name: 'takeCareOfPeopleOverSixtyFive',
            type: componentTypes.RADIO,
            options: yesNoOptions
        },
        {
            id: 4,
            label: '4.',
            question: '¿Lo mencionó todas las veces en el diario del día anterior que acabamos de completar?',
            name: 'mentionTakeCareOfPeopleOverSixtyFive',
            type: componentTypes.RADIO,
            options: yesNoOptions
        },
        {
            id: 5,
            label: '5.',
            question: '¿Cuidó personas con discapacidad en algún momento del día o de la noche de ayer?',
            name: 'takeCareOfPeopleWithDisabilities',
            type: componentTypes.RADIO,
            options: yesNoOptions
        },
        {
            id: 6,
            label: '6.',
            question: '¿Lo mencionó todas las veces en el diario del día anterior que acabamos de completar?',
            name: 'mentionTakeCareOfPeopleWithDisabilities',
            type: componentTypes.RADIO,
            options: yesNoOptions
        }
    ]
};

export default rescueQuestions;
