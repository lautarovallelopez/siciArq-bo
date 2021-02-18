import {fireEvent, getByTestId, getByText} from '@testing-library/react';

import assignmentTypes from '@constants/assignmentTypes';

import AssignmentsPreview from './AssignmentsPreview';

describe('<AssignmentsPreview>', () => {
    let props;
    const getComponent = () => render(AssignmentsPreview, props);
    beforeEach(() => {
        props = {
            assignments: [
                {
                    state: 2,
                    ups: 1,
                    area: 4,
                    segment: 1,
                    teamLeader: 'user, test',
                    pollster: 'Sin definir',
                    toAssign: true
                },
                {
                    state: 2,
                    ups: 1,
                    area: 8,
                    segment: 2,
                    teamLeader: 'user, test',
                    pollster: 'user pollster, test',
                    toAssign: true
                },
                {
                    state: 2,
                    ups: 1,
                    area: 8,
                    segment: 2,
                    teamLeader: 'user, test',
                    pollster: 'user pollster, test',
                    street: 'venezuela',
                    floor: undefined,
                    room: undefined,
                    toAssign: true
                }
            ],
            assignmentType: 8
        };
    });
    afterEach(tearDown);

    it('should display `Mostrar asignaciones pendientes`', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Mostrar asignaciones pendientes')).toBeInTheDocument();
    });

    describe('when `Mostrar asignaciones pendientes` button is clicked', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const button = getByTestId(container, 'button');
            fireEvent.click(button);
        });

        it('should change button label to `Ocultar asignaciones pendientes`', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Ocultar asignaciones pendientes')).toBeInTheDocument();
        });
    });

    describe('when `props.assignmentType` is by area', () => {
        beforeEach(() => {
            props.assignmentType = assignmentTypes.AREA;
        });

        it('should render AssignmentsPreviewByArea', () => {
            const {container} = getComponent();
            props.assignments.forEach((assignment, index) => {
                expect(getByTestId(container, `assignments-preview-by-area-${index}`)).toBeInTheDocument();
            });
        });
    });

    describe('when `props.assignmentType` is by segment', () => {
        beforeEach(() => {
            props.assignmentType = assignmentTypes.SEGMENT;
        });

        it('should render AssignmentsPreviewBySegment', () => {
            const {container} = getComponent();
            props.assignments.forEach((assignment, index) => {
                expect(getByTestId(container, `assignments-preview-by-segment-${index}`)).toBeInTheDocument();
            });
        });
    });

    describe('when `props.assignmentType` is by ups', () => {
        beforeEach(() => {
            props.assignmentType = assignmentTypes.UPS;
        });

        it('should render AssignmentsPreviewByUps', () => {
            const {container} = getComponent();
            props.assignments.forEach((assignment, index) => {
                expect(getByTestId(container, `assignments-preview-by-ups-${index}`)).toBeInTheDocument();
            });
        });
    });

    describe('when `props.isAddressOrReassignment` is `true`', () => {
        beforeEach(() => {
            props.isAddressOrReassignment = true;
        });

        it('should render AssignmentsPreviewByAddress', () => {
            const {container} = getComponent();
            props.assignments.forEach((assignment, index) => {
                expect(getByTestId(container, `assignments-preview-by-address-${index}`)).toBeInTheDocument();
            });
        });
    });
});
