import {
    getByTestId, getByText, queryByTestId, queryByText
} from '@testing-library/react';
import configureStore from 'redux-mock-store';

import assignmentTypes from '@constants/assignmentTypes';

import AssignmentsTable from './AssignmentsTable';

const mockStore = configureStore();

describe('<AssignmentsTable>', () => {
    let props;
    const getComponent = () => render(AssignmentsTable, props, {store: mockStore({})});
    beforeEach(() => {
        props = {
            fetchUsers: jest.fn(),
            fetchSubCoordinators: jest.fn(),
            updateAssignment: jest.fn()
        };
    });
    afterEach(tearDown);

    describe('when `props.loading` is `true`', () => {
        beforeEach(() => {
            props.loading = true;
        });

        it('should render a spinner', () => {
            const {container} = getComponent();
            const icon = getByTestId(container, 'spinner-icon');
            expect(icon).toHaveClass('fa-spinner');
        });
    });

    describe('when `props.loadingUsers` is `true`', () => {
        beforeEach(() => {
            props.loadingUsers = true;
        });

        it('should render a spinner', () => {
            const {container} = getComponent();
            const icon = getByTestId(container, 'spinner-icon');
            expect(icon).toHaveClass('fa-spinner');
        });
    });

    describe('when `props.displayAssignmentsTable` is `false`', () => {
        beforeEach(() => {
            props.displayAssignmentsTable = false;
        });

        it('should not render a table', () => {
            const {container} = getComponent();
            expect(queryByTestId(container, 'table')).toBeNull();
        });
    });

    describe('when `props.displayAssignmentsTable` is `true` and `props.assignmentType` is by area', () => {
        beforeEach(() => {
            props.displayAssignmentsTable = true;
            props.assignmentType = assignmentTypes.AREA;
        });

        it('should render a table', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'assignments-table-by-area')).toBeInTheDocument();
        });
    });

    describe('when `props.displayAssignmentsTable` is `true` and `props.assignmentType` is by segment', () => {
        beforeEach(() => {
            props.displayAssignmentsTable = true;
            props.assignmentType = assignmentTypes.SEGMENT;
        });

        it('should render a table', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'assignments-table-by-segment')).toBeInTheDocument();
        });
    });

    describe('when `props.displayAssignmentsTable` is `true` and `props.assignmentType` is by reassignment', () => {
        beforeEach(() => {
            props.displayAssignmentsTable = true;
            props.assignmentType = assignmentTypes.REASSIGNMENT;
        });

        it('should render a table', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'assignments-table-by-reassignment')).toBeInTheDocument();
        });
    });

    describe('when `props.displayAssignmentsTable` is `true` and `props.assignmentType` is by address', () => {
        beforeEach(() => {
            props.displayAssignmentsTable = true;
            props.assignmentType = assignmentTypes.ADDRESS;
        });

        it('should render a table', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'assignments-table-by-address')).toBeInTheDocument();
        });
    });

    describe('when `props.displayAssignmentsTable` is `true` and `props.assignmentType` is by ups', () => {
        beforeEach(() => {
            props.displayAssignmentsTable = true;
            props.assignmentType = assignmentTypes.UPS;
        });

        it('should render a table', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'assignments-table-by-ups')).toBeInTheDocument();
        });
    });

    describe(
        'when `props.requested` is `true`, `props.loading` and `props.loadingUsers` are `false` and `props.count` is zero',
        () => {
            beforeEach(() => {
                props.requested = true;
                props.loading = false;
                props.loadingUsers = false;
                props.count = 0;
                props.displayAssignmentsTable = true;
            });

            it('should display a message', () => {
                const {container} = getComponent();
                expect(getByText(container, 'No se encontraron asignaciones para los filtros seleccionados.')).toBeInTheDocument();
            });

            it('should not render Pagination component', () => {
                const {container} = getComponent();
                expect(queryByTestId(container, 'pagination')).toBeNull();
            });
        }
    );

    describe(
        'when `props.requested` is `true`, `props.loading` and `props.loadingUsers` are `false` and `props.count` is greater than zero',
        () => {
            beforeEach(() => {
                props.requested = true;
                props.loading = false;
                props.loadingUsers = false;
                props.count = 1;
                props.displayAssignmentsTable = true;
            });

            it('should not display a message', () => {
                const {container} = getComponent();
                expect(queryByText(container, 'No se encontraron asignaciones para los filtros seleccionados.')).toBeNull();
            });

            it('should render Pagination component', () => {
                const {container} = getComponent();
                expect(getByTestId(container, 'pagination')).toBeInTheDocument();
            });
        }
    );
});
