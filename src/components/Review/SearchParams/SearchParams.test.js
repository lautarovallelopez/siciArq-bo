import {getByText} from '@testing-library/react';
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
            fetchUsers: jest.fn(),
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

    it('should render a dropdown with `Ups` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Ups')).toBeInTheDocument();
    });

    it('should render a dropdown with `Área` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Área')).toBeInTheDocument();
    });

    it('should render a dropdown with `Estado` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Estado')).toBeInTheDocument();
    });

    it('should render a dropdown with `Situación` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Situación')).toBeInTheDocument();
    });

    it('should render a dropdown with `Jefe de equipo` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Jefe de equipo')).toBeInTheDocument();
    });

    it('should render a dropdown with `Encuestador` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Encuestador')).toBeInTheDocument();
    });
});
