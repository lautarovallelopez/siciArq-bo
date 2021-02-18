import chapters from '@constants/chapters';
import {componentTypes, yesNoOptions} from '@constants/review';

const characteristics = {
    label: '6. Componentes del hogar (CH)',
    name: chapters.CHARACTERISTICS,
    questions: [
        {
            id: 1,
            label: '2.',
            question: '¿Podría decirme su nombre?',
            subTitle: 'Registre primero al Jefe/a de Hogar.',
            name: 'name',
            type: componentTypes.INPUT
        },
        {
            id: 2,
            label: '3.',
            question: '¿Cuál es su edad en años cumplidos?',
            name: 'age',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'Edad',
                    isInput: true,
                    name: 'quantity'
                },
                {
                    id: 999,
                    label: 'Ns/Nc'
                }
            ]
        },
        {
            id: 3,
            label: '4.',
            question: '¿Cuál es la relación de parentesco con el/la jefe/a de hogar?',
            name: 'relationshipWithHouseholdHead',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'Jefe/a'
                },
                {
                    id: 2,
                    label: 'Cónyuge/pareja'
                },
                {
                    id: 3,
                    label: 'Hijo/a'
                },
                {
                    id: 4,
                    label: 'Hijastro/a'
                },
                {
                    id: 5,
                    label: 'Yerno/Nuera'
                },
                {
                    id: 6,
                    label: 'Nieto/a'
                },
                {
                    id: 7,
                    label: 'Padre o Madre'
                },
                {
                    id: 8,
                    label: 'Suegro/a'
                },
                {
                    id: 9,
                    label: 'Hermano/a'
                },
                {
                    id: 10,
                    label: 'Cuñado/a'
                },
                {
                    id: 11,
                    label: 'Sobrino/a'
                },
                {
                    id: 12,
                    label: 'Abuelo/a'
                },
                {
                    id: 13,
                    label: 'Otro familiar'
                },
                {
                    id: 14,
                    label: 'Otro no familiar'
                }
            ]
        },
        {
            id: 4,
            label: '5.',
            question: '¿Cuál es el sexo?',
            subTitle: 'Refiere al sexo asignado al nacer',
            name: 'gender',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'Mujer'
                },
                {
                    id: 2,
                    label: 'Varón'
                }
            ]
        },
        {
            id: 5,
            label: '6.',
            question: 'De acuerdo con la identidad de género, se considera...',
            subTitle: 'Lea todas las opciones',
            name: 'genderConsideration',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: '...mujer trans/travesti'
                },
                {
                    id: 2,
                    label: '...varón trans'
                },
                {
                    id: 3,
                    label: '...mujer'
                },
                {
                    id: 4,
                    label: '...varón'
                },
                {
                    id: 5,
                    label: '...otro',
                    name: 'genderSpecification',
                    placeholder: 'Especificar',
                    isInput: true
                },
                {
                    id: 99,
                    label: 'Ns/Nc'
                }
            ]
        },
        {
            id: 6,
            label: '7.',
            question: 'Actualmente está...',
            type: componentTypes.RADIO,
            name: 'maritalStatus',
            options: [
                {
                    id: 1,
                    label: 'unido/a'
                },
                {
                    id: 2,
                    label: 'casado/a'
                },
                {
                    id: 3,
                    label: 'separado/a'
                },
                {
                    id: 4,
                    label: '.divorciado/a'
                },
                {
                    id: 5,
                    label: 'viuda/o'
                },
                {
                    id: 6,
                    label: 'soltero/a'
                },
                {
                    id: 99,
                    label: 'Ns/Nc'
                }
            ]
        },
        {
            id: 7,
            label: '8.',
            question: '¿Asiste o asistió a algún establecimiento educativo?',
            type: componentTypes.RADIO,
            name: 'educationalAttendance',
            options: [
                {
                    id: 1,
                    label: 'Asiste'
                },
                {
                    id: 2,
                    label: 'Asistió'
                },
                {
                    id: 3,
                    label: 'Nunca asistió'
                },
                {
                    id: 99,
                    label: 'Ns/Nc'
                }
            ]
        },
        {
            id: 8,
            label: '9.',
            question: 'El establecimiento es...',
            name: 'educationalType',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'estatal'
                },
                {
                    id: 2,
                    label: 'privado'
                },
                {
                    id: 3,
                    label: 'de gestión comunitaria/social'
                },
                {
                    id: 99,
                    label: 'Ns/Nc'
                }
            ]
        },
        {
            id: 9,
            label: '10.',
            question: '¿Cuánto tiempo asiste al establecimiento educativo, en un día habitual?',
            name: 'educationalTime',
            subTitle: 'Anote horas y minutos',
            type: componentTypes.TIME
        },
        {
            id: 10,
            label: '11.',
            question: '¿Cuál es el nivel más alto que cursa o cursó?',
            name: 'maxEducationalAttendance',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'Jardín maternal (45 días a 2 años)'
                },
                {
                    id: 2,
                    label: 'Jardín (3 y 4 años)'
                },
                {
                    id: 3,
                    label: 'Preescolar (5 años)'
                },
                {
                    id: 4,
                    label: 'Primario'
                },
                {
                    id: 5,
                    label: 'EGB (1° a 9° año)'
                },
                {
                    id: 6,
                    label: 'Secundario (1° a 5° o 6° año)'
                },
                {
                    id: 7,
                    label: 'Polimodal (1° a 3° o 4° año)'
                },
                {
                    id: 8,
                    label: 'Superior no universitario/terciario'
                },
                {
                    id: 9,
                    label: 'Universitario'
                },
                {
                    id: 10,
                    label: 'Posgrado universitario'
                },
                {
                    id: 98,
                    label: 'Educación especial'
                },
                {
                    id: 99,
                    label: 'Ns/Nc'
                }
            ]
        },
        {
            id: 11,
            label: '12.',
            question: '¿Finalizó ese nivel?',
            name: 'finishedLevel',
            type: componentTypes.RADIO,
            options: yesNoOptions
        },
        {
            id: 12,
            label: '13.',
            question: '¿Cuál fue el último grado/año que aprobó?',
            name: 'lastApprovedLevel',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 0,
                    label: 'Ninguno'
                },
                {
                    id: 1,
                    label: 'Primero'
                },
                {
                    id: 2,
                    label: 'Segundo'
                },
                {
                    id: 3,
                    label: 'Tercero'
                },
                {
                    id: 4,
                    label: 'Cuarto'
                },
                {
                    id: 5,
                    label: 'Quinto'
                },
                {
                    id: 6,
                    label: 'Sexto'
                },
                {
                    id: 7,
                    label: 'Séptimo'
                },
                {
                    id: 8,
                    label: 'Octavo'
                },
                {
                    id: 9,
                    label: 'Noveno'
                },
                {
                    id: 99,
                    label: 'Ns/Nc'
                }
            ]
        },
        {
            id: 13,
            label: '14.',
            question: '¿Está asociado/a a...',
            subTitle: 'Marque todas las opciones que correspondan',
            name: 'isAssociatedWith',
            type: componentTypes.RADIO_TABLE,
            subQuestions: [
                {
                    name: 'socialWork',
                    label: '...una obra social?',
                    options: yesNoOptions
                },
                {
                    name: 'pami',
                    label: '...PAMI?',
                    options: yesNoOptions
                },
                {
                    name: 'prepaidThroughSocialWork',
                    label: '...una prepaga a través de obra social?',
                    options: yesNoOptions
                },
                {
                    name: 'prepaidForVoluntaryWork',
                    label: '...una prepaga por contratación voluntaria?',
                    options: yesNoOptions
                },
                {
                    name: 'medicalEmergencyService',
                    label: '...un servicio de emergencia médica?',
                    options: yesNoOptions
                },
                {
                    name: 'stateHealthPlan',
                    label: '...un programa o plan estatal de salud?',
                    options: yesNoOptions
                },
                {
                    name: 'noneOfTheAbove',
                    label: 'No está asociado a ninguna de las anteriores',
                    id: 98,
                    exclusive: true
                },
                {
                    name: 'dontKnow',
                    label: 'Ns/Nc',
                    id: 99,
                    exclusive: true
                }
            ]
        },
        {
            id: 14,
            label: '15.',
            question: '¿Necesita cuidado o ayuda para realizar actividades básicas de la vida diaria, '
                + 'como por ejemplo comer, asearse, cuidar su salud o trasladarse?',
            subTitle: 'Incluye estar pendiente, pagar impuestos, hacer trámites, hacer las compras.',
            name: 'needHelpToMakeActivities',
            type: componentTypes.RADIO,
            options: yesNoOptions
        }
    ]
};

export default characteristics;
