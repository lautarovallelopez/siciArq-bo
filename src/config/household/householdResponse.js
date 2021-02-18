import chapters from '@constants/chapters';
import {componentTypes, yesNoOptions} from '@constants/review';

const householdResponse = {
    label: '1. Respuesta Del Hogar (RH)',
    name: chapters.HOUSEHOLD_RESPONSE,
    questions: [
        {
            id: 1,
            label: '1.',
            question: 'Indique si el hogar es respondente',
            name: 'response',
            type: componentTypes.RADIO,
            options: yesNoOptions
        },
        {
            id: 2,
            label: '2.',
            question: 'Razón de no respuesta del hogar',
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
                    label: 'Otras causas'
                }
            ]
        },
        {
            id: 3,
            label: '3.',
            question: 'Causa de no respuesta del hogar',
            name: 'noResponseReasonCause',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 71,
                    label: 'No se pudo contactar en tres visitas'
                },
                {
                    id: 72,
                    label: 'Por causas circunstanciales'
                },
                {
                    id: 73,
                    label: 'Viaje'
                },
                {
                    id: 74,
                    label: 'Vacaciones'
                },
                {
                    id: 81,
                    label: 'Negativa rotunda'
                },
                {
                    id: 82,
                    label: 'Rechazo por portero eléctrico'
                },
                {
                    id: 83,
                    label: 'Se acordaron vistas que no se concretaron'
                },
                {
                    id: 91,
                    label: 'Duelo'
                },
                {
                    id: 92,
                    label: 'Ebriedad, discapacidad, idioma extranjero'
                },
                {
                    id: 93,
                    label: 'Problema de seguridad'
                },
                {
                    id: 94,
                    label: 'Inaccesible (problemas climáticos u otros)'
                }
            ]
        }
    ]
};

export default householdResponse;
