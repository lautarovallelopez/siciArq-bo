import chapters from '@constants/chapters';
import {componentTypes} from '@constants/review';

const dwellingResponse = {
    label: 'Respuesta de la vivienda (RV)',
    name: chapters.DWELLING_RESPONSE,
    questions: [
        {
            id: 1,
            label: '1.',
            question: 'Indique si la vivienda es encuestable',
            type: componentTypes.RADIO,
            name: 'response',
            options: [
                {
                    id: 1,
                    label: 'Encuestable'
                },
                {
                    id: 2,
                    label: 'No encuestable'
                }
            ]
        },
        {
            id: 2,
            label: '2.',
            question: 'Razón de no respuesta de la vivienda',
            name: 'noResponseReason',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'Deshabitada (en venta, alquiler, problemas judiciales, etc)'
                },
                {
                    id: 2,
                    label: 'Demolida/En demolicion'
                },
                {
                    id: 3,
                    label: 'Fin de semana o temporada'
                },
                {
                    id: 4,
                    label: 'En construcción o refacción'
                },
                {
                    id: 5,
                    label: 'Vivienda usada como establecimiento'
                },
                {
                    id: 6,
                    label: 'Local o comercio sin vivienda'
                },
                {
                    id: 7,
                    label: 'Dirección no existente'
                },
                {
                    id: 30,
                    label: 'Área insegura'
                },
                {
                    id: 15,
                    label: 'No salió a campo'
                }
            ]
        }
    ]
};

export default dwellingResponse;
