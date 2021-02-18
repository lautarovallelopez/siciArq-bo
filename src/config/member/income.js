import chapters from '@constants/chapters';
import {componentTypes, incomeRange} from '@constants/review';

const income = {
    label: '4. INGRESO INDIVIDUAL (IN)',
    name: chapters.INCOME,
    questions: [
        {
            id: 1,
            label: '1.',
            question: 'En el último mes calendario, ¿cuál fue el ingreso obtenido por su/s trabajo/s?',
            subTitle: 'Nota para el encuestador: recuerde que refiere sólo al ingreso por la '
                + 'ocupación del entrevistado (no por otras fuentes ni el ingreso total del hogar)',
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
            question: '¿Me podría indicar en cuál de estos tramos se ubica el ingreso individual '
                + 'obtenido por su/s trabajos en el último mes?',
            name: 'incomeRange',
            type: componentTypes.RADIO,
            options: incomeRange
        }
    ]
};

export default income;
