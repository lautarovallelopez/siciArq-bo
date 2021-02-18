import chapters from '@constants/chapters';
import {componentTypes, yesNoOptions} from '@constants/review';

const householdCharacteristics = {
    label: '4. CARACTERÍSTICAS DEL HOGAR (HO)',
    name: chapters.HOUSEHOLD_CHARACTERISTICS,
    questions: [
        {
            id: 1,
            label: '1.',
            question: 'El baño, ¿es de uso exclusivo de este hogar?',
            name: 'isExclusiveBathroom',
            type: componentTypes.RADIO,
            options: yesNoOptions
        },
        {
            id: 2,
            label: '2.',
            question: '¿Cuántos ambientes/habitaciones tiene este hogar para su uso exclusivo?',
            subTitle: '(Sin contar baño, cocina, pasillos, lavadero, garaje)',
            name: 'exclusiveRoomsQuantity',
            type: componentTypes.INPUT
        },
        {
            id: 3,
            label: '3.',
            question: '¿Cuántos ambientes/habitaciones usan habitualmente para dormir?',
            name: 'roomsToSleep',
            type: componentTypes.INPUT
        }
    ]
};

export default householdCharacteristics;
