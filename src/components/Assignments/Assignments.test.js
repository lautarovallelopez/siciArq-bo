import {getByText, getByTestId} from '@testing-library/react';
import configureStore from 'redux-mock-store';

import Assignments from './Assignments';

const mockStore = configureStore({});

describe('<Assignments>', () => {
    let props;
    const getComponent = () => render(Assignments, props, {
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
        props = {};
    });

    afterEach(tearDown);

    it('should display `Asignaciones`', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Asignaciones')).toBeInTheDocument();
    });

    it('should render SearchParams component', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'searchParams')).toBeInTheDocument();
    });

    it('should render AssignmentsTable component', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'assignments-table')).toBeInTheDocument();
    });
});
