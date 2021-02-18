import {getByText, queryByText} from '@testing-library/react';
import configureStore from 'redux-mock-store';

import SearchParams from './SearchParams';

const mockStore = configureStore({});

describe('<SearchParams>', () => {
    let props;
    const getComponent = () => render(SearchParams, props, {
        store: mockStore({
            staticData: {
                states: [
                    {
                        _id: '02',
                        name: 'Buenos Aires'
                    }
                ]
            }
        })
    });
    beforeEach(() => {
        props = {
            fetchUsers: jest.fn()
        };
    });
    afterEach(tearDown);

    it('should render a input with `Búsqueda por Usuario, Nombre o Apellido` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Búsqueda por Usuario, Nombre o Apellido')).toBeInTheDocument();
    });

    it('should not render a dropdown with `Asignación` as label', () => {
        const {container} = getComponent();
        expect(queryByText(container, 'Asignación')).toBeNull();
    });

    it('should render a dropdown with `Provincia` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Provincia')).toBeInTheDocument();
    });

    it('should render a dropdown with `Rol` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Rol')).toBeInTheDocument();
    });

    it('should not render a dropdown with `Departamento` as label', () => {
        const {container} = getComponent();
        expect(queryByText(container, 'Departamento')).toBeNull();
    });

    it('should not render a dropdown with `Fracción` as label', () => {
        const {container} = getComponent();
        expect(queryByText(container, 'Fracción')).toBeNull();
    });

    it('should not render a dropdown with `Radio` as label', () => {
        const {container} = getComponent();
        expect(queryByText(container, 'Radio')).toBeNull();
    });

    it('should not render a button with `Buscar` as label', () => {
        const {container} = getComponent();
        expect(queryByText(container, 'Buscar')).toBeNull();
    });

    // TODO test fetchUsers
});
