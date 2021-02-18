import {getByTestId, getByText} from '@testing-library/react';

import StatesTable from './StatesTable';

describe('<StatesTable>', () => {
    let props;
    const getComponent = () => render(StatesTable, props, {router: {initialEntries: ['/']}});
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

    describe('when `props.loading` is `false`, `props.requested` is `true` and `props.fieldMaterials` is an empty array', () => {
        beforeEach(() => {
            props.loading = false;
            props.fieldMaterials = [];
            props.requested = true;
        });

        it('should display a message', () => {
            const {container} = getComponent();
            expect(getByText(container, 'No se encontraron materiales de campo.')).toBeInTheDocument();
        });
    });

    describe('when `props.loading` is `false` and `props.fieldMaterials` is defined', () => {
        beforeEach(() => {
            props.loading = false;
            props.fieldMaterials = [
                {
                    id: 1,
                    state: 6,
                    name: 'Buenos Aires',
                    ups: 1,
                    areas: 12,
                    dwellings: 81
                }
            ];
        });

        it('should display `Jurisdicción`, `Cant. ups`, `Cant. áreas` and `Cant. viviendas`', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Jurisdicción')).toBeInTheDocument();
            expect(getByText(container, 'Cant. ups')).toBeInTheDocument();
            expect(getByText(container, 'Cant. áreas')).toBeInTheDocument();
            expect(getByText(container, 'Cant. viviendas')).toBeInTheDocument();
        });

        it('should display `props.fieldMaterials` values', () => {
            const {container} = getComponent();
            props.fieldMaterials.forEach((fieldMaterial, index) => {
                const state = getByTestId(container, `state-${index}`);
                const ups = getByTestId(container, `ups-${index}`);
                const areas = getByTestId(container, `areas-${index}`);
                const dwellings = getByTestId(container, `dwellings-${index}`);

                expect(getByText(state, `${fieldMaterial.name}`)).toBeInTheDocument();
                expect(getByText(ups, `${fieldMaterial.ups}`)).toBeInTheDocument();
                expect(getByText(areas, `${fieldMaterial.areas}`)).toBeInTheDocument();
                expect(getByText(dwellings, `${fieldMaterial.dwellings}`)).toBeInTheDocument();
            });
        });

        it('should display a title', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Composición de la muestra')).toBeInTheDocument();
        });
    });
});
