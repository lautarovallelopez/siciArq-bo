import chapters from '@constants/chapters';
import {componentTypes} from '@constants/review';

const dwellingCharacteristics = {
    label: '3. Características De La Vivienda (CV)',
    name: chapters.DWELLING_CHARACTERISTICS,
    questions: [
        {
            id: 1,
            label: '1.',
            question: 'Tipo de vivienda',
            subTitle: 'Se completa por observacion',
            name: 'dwellingType',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'Casa'
                },
                {
                    id: 2,
                    label: 'Rancho'
                },
                {
                    id: 3,
                    label: 'Casilla'
                },
                {
                    id: 4,
                    label: 'Departamento'
                },
                {
                    id: 5,
                    label: 'Pieza en inquilinato'
                },
                {
                    id: 6,
                    label: 'Pieza en hotel familiar o pension'
                },
                {
                    id: 7,
                    label: 'Local no construido para habitacion'
                },
                {
                    id: 8,
                    label: 'Otro',
                    placeholder: 'Especificar',
                    name: 'dwellingTypeSpecification',
                    isInput: true
                }
            ]
        },
        {
            id: 2,
            label: '2.',
            question: '¿Cuántos ambientes/habitaciones tiene la vivienda en total?',
            subTitle: '(Sin contar baño, cocina, pasillos, lavadero, garaje)',
            type: componentTypes.INPUT,
            name: 'roomsQuantity'
        },
        {
            id: 3,
            label: '3.',
            question: '¿Cuál es el material predominante de los pisos?',
            name: 'floorsMaterial',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'Cerámica, baldosa, mosaico, mármol, madera o alfombra'
                },
                {
                    id: 2,
                    label: 'Cemento o ladrillo fijo'
                },
                {
                    id: 3,
                    label: 'Tierra o ladrillo suelto'
                },
                {
                    id: 4,
                    label: 'Otro',
                    placeholder: 'Especificar',
                    name: 'floorsMaterialSpecification',
                    isInput: true
                }
            ]
        },
        {
            id: 4,
            label: '4.',
            question: '¿Cuál es el material predominante de la cubierta exterior del techo?',
            name: 'ceilingMaterial',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'Cubierta asfáltica o membrana'
                },
                {
                    id: 2,
                    label: 'Baldosa o losa (sin cubierta)'
                },
                {
                    id: 3,
                    label: 'Pizarra o teja'
                },
                {
                    id: 4,
                    label: 'Chapa de metal (sin cubierta)'
                },
                {
                    id: 5,
                    label: 'Chapa de fibrocemento o plástico'
                },
                {
                    id: 6,
                    label: 'Chapa o cartón'
                },
                {
                    id: 7,
                    label: 'Caña, tabla o paja con barro, paja sola'
                },
                {
                    id: 8,
                    label: 'N/S depto. en propiedad horizontal '
                },
                {
                    id: 9,
                    label: 'Otro',
                    placeholder: 'Especificar',
                    name: 'ceilingMaterialSpecification',
                    isInput: true
                }
            ]
        },
        {
            id: 5,
            label: '5.',
            question: 'En el techo, ¿tiene cielorraso/revestimiento interior?',
            name: 'hasInnerLiner',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'Sí'
                },
                {
                    id: 2,
                    label: 'No'
                },
                {
                    id: 99,
                    label: 'Ns/Nc'
                }
            ]
        },
        {
            id: 6,
            label: '6.',
            question: 'Para cocinar, utiliza principalmente...',
            name: 'cookingFuel',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'gas de red'
                },
                {
                    id: 2,
                    label: 'gas de tubo/garra'
                },
                {
                    id: 3,
                    label: 'kerosene/leña/carbón'
                },
                {
                    id: 4,
                    label: 'electricidad'
                },
                {
                    id: 5,
                    name: 'cookingFuelSpecification',
                    label: '...otro?',
                    placeholder: 'Especificar',
                    isInput: true
                }
            ]
        },
        {
            id: 7,
            label: '7.',
            question: 'Tiene agua...',
            name: 'waterInstallation',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'por cañería dentro de la vivienda'
                },
                {
                    id: 2,
                    label: 'fuera de la vivienda pero dentro del terreno'
                },
                {
                    id: 3,
                    label: 'fuera del terreno'
                }
            ]
        },
        {
            id: 8,
            label: '8.',
            question: 'Obtiene el agua a través de...',
            type: componentTypes.RADIO,
            name: 'waterProvision',
            options: [
                {
                    id: 1,
                    label: 'red pública (agua corriente)'
                },
                {
                    id: 2,
                    label: 'perforación con bomba o motor'
                },
                {
                    id: 3,
                    label: 'perforación con bomba manual'
                },
                {
                    id: 4,
                    label: 'aljibe o pozo'
                },
                {
                    id: 5,
                    label: '...otro?',
                    placeholder: 'Especificar',
                    isInput: true,
                    name: 'waterProvisionSpecification'
                }
            ]
        },
        {
            id: 9,
            label: '9.',
            question: '¿Tiene baño/letrina?',
            name: 'hasBathroom',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'Sí'
                },
                {
                    id: 2,
                    label: 'No'
                }
            ]
        },
        {
            id: 10,
            label: '10.',
            question: '¿El baño tiene...',
            name: 'toiletType',
            type: componentTypes.RADIO,
            options: [
                {
                    id: 1,
                    label: 'inodoro con botón/mochila/cadena y arrastre de agua'
                },
                {
                    id: 2,
                    label: 'inodoro sin botón/mochila/cadena y arrastre de agua (a balde)'
                },
                {
                    id: 3,
                    label: 'letrina (sin descarga ni arrastre de agua)'
                }
            ]
        },
        {
            id: 11,
            label: '11.',
            question: '¿El desagüe del inodoro va...',
            type: componentTypes.RADIO,
            name: 'toiletDrain',
            options: [
                {
                    id: 1,
                    label: 'a red pública (cloaca)'
                },
                {
                    id: 2,
                    label: 'a cámara séptica y pozo ciego'
                },
                {
                    id: 3,
                    label: 'sólo a pozo ciego'
                },
                {
                    id: 4,
                    label: 'a hoyo/excavación en tierra'
                }
            ]
        }
    ]
};

export default dwellingCharacteristics;
