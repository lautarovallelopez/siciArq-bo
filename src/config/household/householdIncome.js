import chapters from '@constants/chapters';
import {componentTypes, yesNoDontKnowOptions, incomeRange} from '@constants/review';

const householdIncome = {
    label: '5. INGRESOS DEL HOGAR (IH)',
    name: chapters.HOUSEHOLD_INCOME,
    questions: [
        {
            id: 1,
            label: '1.',
            question: '¿Cuál fue el ingreso total del hogar el último mes?',
            subTitle: '(Incluya ingresos provenientes del trabajo, jubilaciones, rentas, '
                + 'seguros de desempleo, becas, cuotas de alimentos, etc.)',
            name: 'income',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'Monto',
                    name: 'mount',
                    isInput: true
                },
                {
                    id: 2,
                    label: 'Sin ingresos'
                },
                {
                    id: 99,
                    label: 'Ns/Nc'
                }
            ]
        },
        {
            id: 2,
            label: '2.',
            question: '¿Me podría indicar en cuál de estos tramos se ubica el ingreso total mensual del hogar?',
            subTitle: '(Incluya ingresos provenientes del trabajo, jubilaciones, rentas, '
                + 'seguros de desempleo, becas, cuotas de alimentos, etc.)',
            name: 'incomeRange',
            type: componentTypes.RADIO,
            options: incomeRange
        },
        {
            id: 3,
            label: '3.',
            question: '¿Percibió algún ingreso en dinero o en especie en los últimos 3 meses por…',
            name: 'perceivedSomeIncome',
            type: componentTypes.RADIO_TABLE,
            subQuestions: [
                {
                    name: 'universalChildAllowance',
                    label: '…Asignación Universal por Hijo?',
                    options: yesNoDontKnowOptions
                },
                {
                    name: 'socialPlans',
                    label: '…otros planes sociales o programas del Estado?',
                    options: yesNoDontKnowOptions
                }
            ]
        }
    ]
};

export default householdIncome;
