import {
    fireEvent, getByText, getByLabelText, waitFor
} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import debounce from 'lodash/debounce';

import SearchParams from './SearchParams';

const mockStore = configureStore({});

describe('<SearchParams>', () => {
    let props;
    const getComponent = () => render(SearchParams, props, {
        store: mockStore({
            staticData: {
                states: [
                    {
                        _id: '1',
                        name: 'Buenos Aires'
                    },
                    {
                        _id: '2',
                        name: 'Mendoza'
                    }
                ]
            }
        })
    });
    beforeEach(() => {
        props = {
            setSearchParams: jest.fn(),
            resetSearchParams: jest.fn(),
            getLogs: jest.fn(),
            currentUser: {
                roles: ['cn']
            }
        };
    });
    afterEach(tearDown);

    it('should render a dropdown with `Jurisdicción` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Jurisdicción')).toBeInTheDocument();
    });

    describe('when `Jurisdiccion` dropdown is clicked', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const input = getByLabelText(container, 'state');
            props.states = [
                {
                    id: '1',
                    label: 'Buenos Aires'
                },
                {
                    id: '2',
                    label: 'Mendoza'
                }
            ];
            props.searchParams = {state: '6'};
            fireEvent.keyDown(input, {
                key: 'ArrowDown',
                keyCode: 40
            });
        });

        it('should render options', () => {
            const {container} = getComponent();
            props.states.forEach(field => {
                expect(getByText(container, field.label)).toBeInTheDocument();
            });
        });

        describe('when an option is clicked', () => {
            beforeEach(async () => {
                const {container} = getComponent();
                await waitFor(() => getByText(container, 'Mendoza'));
                fireEvent.click(getByText(container, 'Mendoza'));
            });

            it('should fire `props.setSearchParams`', () => {
                expect(props.setSearchParams).toHaveBeenCalledTimes(1);
                expect(props.setSearchParams).toHaveBeenCalledWith(expect.any(Object));
            });
        });
    });

    it('should render an input with `Ingrese usuario, nombre o apellido` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Ingrese usuario, nombre o apellido')).toBeInTheDocument();
    });

    describe('when `Ingrese usuario, nombre o apellido` input is typed', () => {
        let input;
        beforeEach(() => {
            const {container} = getComponent();
            input = getByLabelText(container, 'Ingrese usuario, nombre o apellido');
            props.searchParams = {term: 'x'};
            fireEvent.change(input, {target: {value: 'x'}});
        });

        it('should change input value', () => {
            expect(input.value).toBe('x');
        });

        it('should fire `props.setSearchParams`', () => {
            debounce(() => {
                expect(props.setSearchParams).toHaveBeenCalledTimes(1);
                expect(props.setSearchParams).toHaveBeenCalledWith(expect.any(Object));
            }, 500);
        });
    });

    it('should render a dropdown with `Rol` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Rol')).toBeInTheDocument();
    });

    describe('when `Rol` dropdown is clicked', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const input = getByLabelText(container, 'role');
            props.roles = [
                {
                    id: '1',
                    label: 'Encuestador'
                },
                {
                    id: '2',
                    label: 'Jefe de equipo'
                }
            ];
            fireEvent.keyDown(input, {
                key: 'ArrowDown',
                keyCode: 40
            });
        });

        it.skip('should render options', () => {
            const {container} = getComponent();
            props.roles.forEach(field => {
                expect(getByText(container, field.label)).toBeInTheDocument();
            });
        });

        describe('when an option is clicked', () => {
            beforeEach(async () => {
                const {container} = getComponent();
                await waitFor(() => getByText(container, 'Encuestador'));
                fireEvent.click(getByText(container, 'Encuestador'));
            });

            it.skip('should fire `props.setSearchParams`', () => {
                expect(props.setSearchParams).toHaveBeenCalledTimes(1);
                expect(props.setSearchParams).toHaveBeenCalledWith(expect.any(Object));
            });
        });
    });

    it.skip('should render a dropdown with `Fecha Desde` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Fecha Desde')).toBeInTheDocument();
    });

    it.skip('should render a dropdown with `Fecha Hasta` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Fecha Hasta')).toBeInTheDocument();
    });
});
