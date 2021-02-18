import chapters from '@constants/chapters';
import {componentTypes, yesNoDontKnowOptions} from '@constants/review';

const voluntaryWork = {
    label: '8. Trabajo Voluntario de los miembros de 14 años y más (TV)',
    name: chapters.VOLUNTARY_WORK,
    questions: [
        {
            id: 1,
            label: '1.',
            question: 'En el último mes ¿hizo algún trabajo de manera voluntaria sin recibir pago para una '
                + 'organización sin fines de lucro, para una comunidad o para una persona que no es de '
                + 'su familia y que habita fuera de su hogar?',
            subTitle: 'Nota: Recuerde que el trabajo voluntario se lleva a cabo por libre elección y '
                + 'que no tiene remuneración.',
            name: 'didVolunteerWork',
            type: componentTypes.RADIO,
            options: yesNoDontKnowOptions
        }
    ]
};

export default voluntaryWork;
