import {getByTestId, getByText} from '@testing-library/react';

import {getValueOrSD} from '@util/ui';

import DwellingsTable from './DwellingsTable';

describe('<DwellingsTable>', () => {
    let props;
    const getComponent = () => render(DwellingsTable, props, {router: {initialEntries: ['/fieldMaterials/state/2/ups/1/area/8']}});
    beforeEach(() => {
        props = {
            getFieldMaterials: jest.fn()
        };
    });
    afterEach(tearDown);

    describe('when `props.loading` is `true`', () => {
        beforeEach(() => {
            props.loading = true;
        });

        it('should render a spinner', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'spinner-icon')).toBeInTheDocument();
        });
    });

    describe('when `props.stateName` is `undefined`', () => {
        beforeEach(() => {
            props.stateName = undefined;
        });

        it('should render a spinner', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'spinner-icon')).toBeInTheDocument();
        });
    });

    describe('when `props.loading` is `false` and `props.stateName` is defined', () => {
        beforeEach(() => {
            props.loading = false;
            props.stateName = 'Buenos Aires';
        });

        describe('when `props.fieldMaterials` is an empty array and `props.requested` is `true`', () => {
            beforeEach(() => {
                props.fieldMaterials = [];
                props.requested = true;
            });

            it('should display a message', () => {
                const {container} = getComponent();
                expect(getByText(container, 'No se encontraron materiales de campo.')).toBeInTheDocument();
            });
        });

        describe('when `props.fieldMaterials` is defined', () => {
            beforeEach(() => {
                props.fieldMaterials = [
                    {
                        id: 1,
                        block: 1,
                        side: 1,
                        locality: 'Ciudad Autonoma de buenos aires',
                        listNumber: 121,
                        street: '2122 - Venezuela',
                        cadastralNumber: 122,
                        floor: 'PB',
                        house: '22',
                        room: '1',
                        dwellingTypeCode: 'A'
                    }
                ];
                props.stateName = 'Buenos Aires';
            });

            it('should display many columns', () => {
                const {container} = getComponent();
                expect(getByText(container, 'Manzana')).toBeInTheDocument();
                expect(getByText(container, 'Lado')).toBeInTheDocument();
                expect(getByText(container, 'Localidad')).toBeInTheDocument();
                expect(getByText(container, 'Nº de listado')).toBeInTheDocument();
                expect(getByText(container, 'Calle')).toBeInTheDocument();
                expect(getByText(container, 'Número')).toBeInTheDocument();
                expect(getByText(container, 'Piso')).toBeInTheDocument();
                expect(getByText(container, 'Casa')).toBeInTheDocument();
                expect(getByText(container, 'Departamento')).toBeInTheDocument();
                expect(getByText(container, 'Tipo de vivienda')).toBeInTheDocument();
                expect(getByText(container, 'Sector')).toBeInTheDocument();
                expect(getByText(container, 'Entrada')).toBeInTheDocument();
                expect(getByText(container, 'Edificio')).toBeInTheDocument();
                expect(getByText(container, 'Descripción')).toBeInTheDocument();
            });

            it('should display `props.fieldMaterials` values', () => {
                const {container} = getComponent();
                props.fieldMaterials.forEach((fieldMaterial, index) => {
                    const block = getByTestId(container, `block-${index}`);
                    const side = getByTestId(container, `side-${index}`);
                    const locality = getByTestId(container, `locality-${index}`);
                    const listNumber = getByTestId(container, `list-number-${index}`);
                    const cadastralNumber = getByTestId(container, `cadastral-number-${index}`);
                    const floor = getByTestId(container, `floor-${index}`);
                    const house = getByTestId(container, `house-${index}`);
                    const room = getByTestId(container, `room-${index}`);
                    const dwellingTypeCode = getByTestId(container, `dwelling-type-code-${index}`);
                    const sector = getByTestId(container, `sector-${index}`);
                    const entrance = getByTestId(container, `entrance-${index}`);
                    const building = getByTestId(container, `building-${index}`);
                    const description = getByTestId(container, `description-${index}`);

                    expect(getByText(block, `${getValueOrSD(fieldMaterial.block)}`)).toBeInTheDocument();
                    expect(getByText(side, `${getValueOrSD(fieldMaterial.side)}`)).toBeInTheDocument();
                    expect(getByText(locality, `${getValueOrSD(fieldMaterial.locality)}`)).toBeInTheDocument();
                    expect(getByText(listNumber, `${getValueOrSD(fieldMaterial.listNumber)}`)).toBeInTheDocument();
                    expect(getByText(cadastralNumber, `${getValueOrSD(fieldMaterial.cadastralNumber)}`)).toBeInTheDocument();
                    expect(getByText(floor, `${getValueOrSD(fieldMaterial.floor)}`)).toBeInTheDocument();
                    expect(getByText(house, `${getValueOrSD(fieldMaterial.house)}`)).toBeInTheDocument();
                    expect(getByText(room, `${getValueOrSD(fieldMaterial.room)}`)).toBeInTheDocument();
                    expect(getByText(dwellingTypeCode, `${getValueOrSD(fieldMaterial.dwellingTypeCode)}`)).toBeInTheDocument();
                    expect(getByText(sector, `${getValueOrSD(fieldMaterial.sector)}`)).toBeInTheDocument();
                    expect(getByText(entrance, `${getValueOrSD(fieldMaterial.entrance)}`)).toBeInTheDocument();
                    expect(getByText(building, `${getValueOrSD(fieldMaterial.building)}`)).toBeInTheDocument();
                    expect(getByText(description, `${getValueOrSD(fieldMaterial.description)}`)).toBeInTheDocument();
                });
            });

            it('should display a title', () => {
                const {container} = getComponent();
                expect(
                    getByText(
                        container, `Composición de la muestra - Jurisdicción: ${props.stateName}, Ups: undefined, Área: undefined`, {exact: false}
                    )
                ).toBeInTheDocument();
            });
        });

        it('should display a button with `Imprimir` as label', () => {
            const {baseElement} = getComponent();
            expect(getByText(baseElement, 'Imprimir')).toBeInTheDocument();
        });
    });
});
