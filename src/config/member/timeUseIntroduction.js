import chapters from '@constants/chapters';
import {componentTypes} from '@constants/review';

const timeUseIntroduction = {
    label: '1. Uso del tiempo. Introducción (UI)',
    name: chapters.TIME_USE_INTRODUCTION,
    text: 'Esta encuesta nos permitirá conocer la vida cotidiana de personas de distintas '
        + 'edades y el tiempo que le dedican a las actividades que realizan dentro y fuera '
        + 'de los hogares (por ejemplo, el trabajo, las tareas domésticas, el cuidado de '
        + 'niños/as o personas mayores, el tiempo libre, etc.). Para eso, le preguntaré '
        + 'sobre las actividades que realizó en el día de ayer (mencionar día), y voy a'
        + ' guiarle para que podamos recordar qué fue lo que hizo en cada horario. '
        + 'Nos interesa todo lo que hizo. Todas las actividades son igual de importantes.',
    questions: [
        {
            id: 1,
            label: '1.',
            question: 'Encuestador/a: indique el día por el cual se responde la encuesta',
            name: 'day',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'Domingo'
                },
                {
                    id: 2,
                    label: 'Lunes'
                },
                {
                    id: 3,
                    label: 'Martes'
                },
                {
                    id: 4,
                    label: 'Miércoles'
                },
                {
                    id: 5,
                    label: 'Jueves'
                },
                {
                    id: 6,
                    label: 'Viernes'
                },
                {
                    id: 7,
                    label: 'Sábado'
                }
            ]
        },
        {
            id: 2,
            label: '2.',
            question: 'Para usted, el día de ayer (mencione el día de ayer), ¿fue un día...',
            name: 'yesterdayWasALaborDay',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'laborable'
                },
                {
                    id: 2,
                    label: 'no laborable'
                }
            ]
        },
        {
            id: 3,
            label: '3.',
            question: '¿Fue un día laborable...',
            name: 'laborDayType',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'típico'
                },
                {
                    id: 2,
                    label: 'no típico'
                }
            ]
        },
        {
            id: 4,
            label: '4.',
            question: '¿Fue un día no laborable...',
            name: 'noLaborDayType',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'típico'
                },
                {
                    id: 2,
                    label: 'no típico'
                }
            ]
        }
    ]
};

export default timeUseIntroduction;
