import chapters from '@constants/chapters';
import {componentTypes, yesNoDontKnowOptions} from '@constants/review';

const careSeekers = {
    label: '9. COMPONENTES DEL HOGAR DEMANDANTES DE CUIDADO (DC)',
    name: chapters.CARE_SEEKERS,
    questions: [
        {
            id: 1,
            label: '1.',
            question: 'Habitualmente, excluyendo la escuela/colegio, ¿lo/la cuidan...',
            subTitle: 'Se entiende por cuidado: estar pendiente de ellos, darles de comer o asearlos, '
                + 'cuidar de su salud, compañarlos o trasladarlos. En el caso de los/las niños/as se '
                + 'considera también prepararlos para que vayan a '
                + 'la escuela, jugar y conversar, darles apoyo escolar y de aprendizaje, etc. '
                + 'Lea todas las categorías de respuesta y '
                + 'consigne “Sí” o “No” según corresponda en cada una de ellas.',
            name: 'takeCare',
            type: componentTypes.RADIO_TABLE,
            subQuestions: [
                {
                    name: 'aRelativeCaresForHim',
                    label: '...un familiar de otro hogar que no recibe pago?',
                    options: yesNoDontKnowOptions
                },
                {
                    name: 'personWhoDoesNotReceivePayment',
                    label: '...otra persona que no recibe pago?',
                    options: yesNoDontKnowOptions
                },
                {
                    name: 'communityOrganization',
                    label: '...una organización comunitaria/barrial?',
                    options: yesNoDontKnowOptions
                },
                {
                    name: 'stateInstitution',
                    label: '...una institución del Estado (o centro de primera infancia/centro de día)?',
                    options: yesNoDontKnowOptions
                },
                {
                    name: 'householdMember',
                    label: '...usted y/o algún miembro del hogar?',
                    options: yesNoDontKnowOptions
                },
                {
                    name: 'personOrInstitution',
                    label: '...una persona o institución a quien se le paga?',
                    options: yesNoDontKnowOptions
                },
                {
                    id: 99,
                    name: 'other',
                    label: '...otro?',
                    placeholder: 'Especificar',
                    inputName: 'specification',
                    isInput: true,
                    exclusive: true
                },
                {
                    id: 8,
                    name: 'nobody',
                    label: 'Nadie lo cuida (solo si respondió “No” a todas las anteriores)'
                }
            ]
        },
        {
            id: 2,
            label: '2.',
            question: '¿Este pago lo realiza...',
            subTitle: 'Lea todas las categorías de respuesta y consigne “Sí” o “No” '
                + 'según corresponda en cada una de ellas.',
            name: 'thePaidIsMake',
            type: componentTypes.RADIO_TABLE,
            subQuestions: [
                {
                    name: 'youOrAnotherMember',
                    label: '...usted y/o algún miembro de su hogar?',
                    options: yesNoDontKnowOptions
                },
                {
                    name: 'relative',
                    label: '...un familiar de otro hogar?',
                    options: yesNoDontKnowOptions
                },
                {
                    name: 'medicalCare',
                    label: '...una obra social, mutual, sindicato?',
                    options: yesNoDontKnowOptions
                },
                {
                    name: 'prepaid',
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
                    label: '...otro?',
                    name: 'other',
                    placeholder: 'Especificar',
                    inputName: 'specification',
                    isInput: true,
                    exclusive: true
                }
            ]
        }
    ]
};

export default careSeekers;
