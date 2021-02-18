import chapters from '@constants/chapters';
import {componentTypes, yesNoDontKnowOptions} from '@constants/review';

const domesticWorkActivities = {
    label: '11. Actividades de trabajo doméstico (TD)',
    name: chapters.DOMESTIC_WORK_ACTIVITIES,
    questions: [
        {
            id: 1,
            label: '1.',
            question: 'Habitualmente, el trabajo doméstico del hogar ¿lo realiza...',
            subTitle: 'Lea todas las supbreguntas y consigne “Sí” o “No” en cada una de ellas.',
            name: 'whoDoesTheHousework',
            type: componentTypes.RADIO_TABLE,
            subQuestions: [
                {
                    name: 'relativeWithoutPaid',
                    label: '...un familiar miembro de otro hogar que no recibe pago?',
                    options: yesNoDontKnowOptions
                },
                {
                    name: 'anotherPersonWithoutPaid',
                    label: '...otra persona que no recibe pago (ya sea un vecino, amigo)?',
                    options: yesNoDontKnowOptions
                },
                {
                    name: 'personWithPaid',
                    label: '...una persona a quien se le paga?',
                    options: yesNoDontKnowOptions
                },
                {
                    name: 'householdMembers',
                    label: '...uno o más miembros de su hogar?',
                    options: yesNoDontKnowOptions
                },
                {
                    id: 99,
                    name: 'other',
                    label: '...otro?',
                    inputName: 'specification',
                    exclusive: true,
                    isInput: true
                }
            ]
        }
    ]
};

export default domesticWorkActivities;
