import chapters from '@constants/chapters';
import {componentTypes, yesNoOptions} from '@constants/review';

const laborSituation = {
    label: '7. SITUACIÓN LABORAL DE LOS MIEMBROS DE 14 AÑOS Y MÁS (SL)',
    name: chapters.LABOR_SITUATION,
    questions: [
        {
            id: 1,
            label: '1.',
            question: 'La semana pasada, ¿trabajó al menos una hora '
                + '(incluye changas, ayuda en un negocio familiar o fabricación de algo para vender)?',
            subTitle: '(Sin contar las tareas de su hogar)',
            name: 'lastWeekWorkOneHour',
            type: componentTypes.RADIO,
            options: yesNoOptions
        },
        {
            id: 2,
            label: '2.',
            question: '¿Es un trabajo pago? (en dinero o especie)',
            name: 'isAPaidWork',
            type: componentTypes.RADIO,
            options: yesNoOptions
        },
        {
            id: 3,
            label: '3.',
            question: '¿La semana pasada no trabajó porque...',
            name: 'noWorkLastWeekReason',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'no deseaba/no quería trabajar'
                },
                {
                    id: 2,
                    label: 'no podía trabajar'
                },
                {
                    id: 3,
                    label: 'no tenía/no conseguía trabajo'
                },
                {
                    id: 4,
                    label: 'no tuvo pedidos/clientes'
                },
                {
                    id: 5,
                    label: 'tenía un trabajo/negocio al que no concurrió'
                }
            ]
        },
        {
            id: 4,
            label: '4.',
            question: '¿Cuál es la razón principal por la que la semana pasada no deseaba o no podía trabajar?',
            name: 'firstReasonForNotWorking',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'Se dedica a las tareas del hogar'
                },
                {
                    id: 2,
                    label: 'Tuvo que cuidar a algún familiar'
                },
                {
                    id: 3,
                    label: 'Por otras razones'
                }
            ]
        },
        {
            id: 5,
            label: '5.',
            question: '¿No concurrió por...',
            name: 'noWorkReason',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'vacaciones, licencia (enfermedades, matrimonio, embarazo, etc.)'
                },
                {
                    id: 2,
                    label: 'pidió permiso para cuidar a algún familiar'
                },
                {
                    id: 3,
                    label: 'causas personales (viajes, trámites, etc.)'
                },
                {
                    id: 4,
                    label: 'huelga/conflicto laboral'
                },
                {
                    id: 5,
                    label: 'suspensión con pago'
                },
                {
                    id: 6,
                    label: 'suspensión sin pago'
                },
                {
                    id: 7,
                    label: 'otras causas laborales (mal tiempo, rotura de equipos, falta de materia prima, etc.)'
                        + ' y volverá a lo sumo en un mes'
                },
                {
                    id: 8,
                    label: 'otras causas laborales (mal tiempo, rotura de equipos, falta de materia prima, etc.) '
                        + 'y volverá en más de un mes'
                }
            ]
        },
        {
            id: 6,
            label: '6.',
            question: 'En los últimos 30 días, ¿estuvo buscando trabajo de alguna manera, '
                + 'consultó amigos/as o parientes, puso carteles, hizo algo para ponerse por su cuenta?',
            name: 'lastThirtyDaysSearchWork',
            type: componentTypes.RADIO,
            options: yesNoOptions
        },
        {
            id: 7,
            label: '7.',
            question: '¿Durante esos 30 días, ¿no buscó trabajo porque...',
            name: 'noSearchWorkReason',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'está suspendido/a'
                },
                {
                    id: 2,
                    label: 'tiene un trabajo asegurado y comenzará pronto'
                },
                {
                    id: 3,
                    label: 'se dedica a las tareas de la casa'
                },
                {
                    id: 4,
                    label: 'tiene que cuidar a algún familiar'
                },
                {
                    id: 5,
                    label: 'se cansó de buscar/no cree poder encontrarlo'
                },
                {
                    id: 6,
                    label: '...por otras razones',
                    name: 'noSearchWorkReasonSpecification',
                    placeholder: 'Especificar',
                    isInput: true
                }
            ]
        },
        {
            id: 8,
            label: '8.',
            question: '¿Cuántas horas semanales trabaja habitualmente en TODOS sus empleos/ocupaciones?',
            name: 'weekHours',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'Menos de 35 horas semanales'
                },
                {
                    id: 2,
                    label: 'Entre 35 y 45 horas semanales'
                },
                {
                    id: 3,
                    label: 'Entre 46 y 50 horas semanales'
                },
                {
                    id: 4,
                    label: 'Más de 50 horas semanales'
                },
                {
                    id: 99,
                    label: 'Ns/Nc'
                }
            ]
        },
        {
            id: 9,
            label: '9.',
            question: 'En la ocupación principal (si tiene más de una, aquella que habitualmente le lleva más horas), '
                + '¿trabaja…',
            name: 'wayOfWorking',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'para su propio negocio/empresa/actividad'
                },
                {
                    id: 2,
                    label: 'como obrero/a o empleado/a para un patrón/empresa/institución '
                        + '(incluye agencia de empleo)'
                },
                {
                    id: 3,
                    label: 'como servicio doméstico'
                },
                {
                    id: 4,
                    label: 'como trabajador/a familiar sin pago'
                }
            ]
        },
        {
            id: 10,
            label: '10.',
            question: '¿En ese negocio/empresa/actividad se emplean personas asalariadas?',
            name: 'salariedPeopleAreEmployed',
            type: componentTypes.RADIO,
            options: yesNoOptions
        },
        {
            id: 11,
            label: '11.',
            question: '¿Por ese trabajo tiene descuento jubilatorio?',
            name: 'haveRetirementDiscount',
            type: componentTypes.RADIO,
            options: yesNoOptions
        },
        {
            id: 12,
            label: '12.',
            question: '¿Aporta por sí mismo a algún sistema jubilatorio?',
            name: 'contributesToARetirementSystem',
            type: componentTypes.RADIO,
            options: yesNoOptions
        }
    ]
};

export default laborSituation;
