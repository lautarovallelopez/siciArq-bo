import {getByTestId, getByText} from '@testing-library/react';

import AreasTable from './AreasTable';

describe('<AreasTable>', () => {
    let props;
    const getComponent = () => render(AreasTable, props, {router: {initialEntries: ['/fieldMaterials/state/2/ups/1']}});
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

    describe(
        'when `props.loading` is `false`, `props.requested` is `true`, `props.stateName` is defined and `props.fieldMaterials` is an empty array',
        () => {
            beforeEach(() => {
                props.loading = false;
                props.requested = true;
                props.stateName = 'Buenos Aires';
                props.fieldMaterials = [];
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
                    ups: 1,
                    area: 12,
                    dwellings: 81
                }
            ];
            props.stateName = 'Buenos Aires';
        });

        it('should display `UPS`, `Cant. áreas` and `Cant. viviendas`', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Áreas')).toBeInTheDocument();
            expect(getByText(container, 'Cant. viviendas')).toBeInTheDocument();
        });

        it('should display `props.fieldMaterials` values', () => {
            const {container} = getComponent();
            props.fieldMaterials.forEach((fieldMaterial, index) => {
                const area = getByTestId(container, `area-${index}`);
                const dwellings = getByTestId(container, `dwellings-${index}`);

                expect(getByText(area, `${fieldMaterial.area}`)).toBeInTheDocument();
                expect(getByText(dwellings, `${fieldMaterial.dwellings}`)).toBeInTheDocument();
            });
        });

        it('should display a title', () => {
            const {container} = getComponent();
            expect(getByText(container, `Composición de la muestra - Jurisdicción: ${props.stateName}, Ups:`, {exact: false})).toBeInTheDocument();
        });
    });
});
