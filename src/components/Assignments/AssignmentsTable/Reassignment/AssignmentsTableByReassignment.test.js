import {fireEvent, getByTestId, getByText} from '@testing-library/react';

import roles from '@constants/roles';

import AssignmentsTableByReassignment from './AssignmentsTableByReassignment';

describe('<AssignmentsTableByReassignment>', () => {
    let props;
    const getComponent = () => render(AssignmentsTableByReassignment, props);
    beforeEach(() => {
        props = {
            updateAssignment: jest.fn(),
            teamLeaders: [
                {
                    id: 1,
                    name: 'team leader name A',
                    surname: 'team leader surname A'
                }
            ],
            pollsters: [
                {
                    id: 1,
                    name: 'pollster name A',
                    surname: 'pollster surname A'
                }
            ],
            assignments: [
                {
                    id: 1,
                    state: 2,
                    ups: 1,
                    area: 6,
                    segment: 2,
                    listNumber: 5,
                    street: 'Belgrano',
                    cadastralNumber: 12,
                    floor: 1,
                    room: 'A',
                    user: {
                        name: 'user A',
                        surname: 'surname A'
                    }
                },
                {
                    id: 2,
                    state: 2,
                    ups: 1,
                    area: 6,
                    segment: 2,
                    listNumber: 10,
                    pollster: 1,
                    teamLeader: 1,
                    street: 'Venezuela',
                    cadastralNumber: 121,
                    floor: 5,
                    room: 'A',
                    user: {
                        name: 'user B',
                        surname: 'surname B'
                    }
                }
            ]
        };
    });
    afterEach(tearDown);

    it(
        'should display `Ups`, `Área`, `Segmento`, `N° Listado`, `Domicilio`, `Jefe de equipo`, `Encuestador`, `Reasignar`, `Usuario` as columns',
        () => {
            const {container} = getComponent();
            const teamLeader = getByTestId(container, 'team-leader');
            const pollster = getByTestId(container, 'pollster');

            expect(getByText(container, 'UPS')).toBeInTheDocument();
            expect(getByText(container, 'Área')).toBeInTheDocument();
            expect(getByText(container, 'Segmento')).toBeInTheDocument();
            expect(getByText(container, 'N° Listado')).toBeInTheDocument();
            expect(getByText(container, 'Domicilio')).toBeInTheDocument();
            expect(getByText(teamLeader, 'Jefe de equipo')).toBeInTheDocument();
            expect(getByText(pollster, 'Encuestador')).toBeInTheDocument();
            expect(getByText(container, 'Reasignar')).toBeInTheDocument();
            expect(getByText(container, 'Usuario')).toBeInTheDocument();
        });

    it('should display a list of assignments', () => {
        const {container} = getComponent();
        props.assignments.forEach((assignment, index) => {
            const ups = getByTestId(container, `ups-${index}`);
            const area = getByTestId(container, `area-${index}`);
            const segment = getByTestId(container, `segment-${index}`);
            const listNumber = getByTestId(container, `list-number-${index}`);
            const user = getByTestId(container, `user-${index}`);

            expect(getByText(ups, `${assignment.ups}`)).toBeInTheDocument();
            expect(getByText(area, `${assignment.area}`)).toBeInTheDocument();
            expect(getByText(segment, `${assignment.segment}`)).toBeInTheDocument();
            expect(getByText(listNumber, `${assignment.listNumber}`)).toBeInTheDocument();
            expect(getByTestId(container, `address-${index}`)).toBeInTheDocument();
            expect(getByText(user, `${assignment.user.surname}, ${assignment.user.name}`)).toBeInTheDocument();

            if (assignment.pollster) {
                const pollster = props.pollsters.find(p => p.id === assignment.pollster);
                expect(getByText(container, `${pollster.surname}, ${pollster.name}`)).toBeInTheDocument();
            }
            if (assignment.teamLeader) {
                const teamLeader = props.teamLeaders.find(p => p.id === assignment.teamLeader);
                expect(getByText(container, `${teamLeader.surname}, ${teamLeader.name}`)).toBeInTheDocument();
            }
            expect(getByTestId(container, `reassign-pollster-${index}`)).toBeInTheDocument();
            expect(getByTestId(container, `reassign-teamLeader-${index}`)).toBeInTheDocument();
        });
    });

    describe('when teamLeader is not defined', () => {
        beforeEach(() => {
            props.assignments = [
                {
                    id: 1,
                    state: 2,
                    ups: 1,
                    area: 6,
                    segment: 2,
                    street: 'Garcia de Cossio',
                    floor: 9,
                    room: null,
                    listNumber: 2
                }
            ];
        });

        it('should be disabled the button to reassign team leader', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'reassign-teamLeader-0')).toBeDisabled();
        });

        describe('when reassign team leader button is clicked', () => {
            beforeEach(() => {
                const {container} = getComponent();
                const teamLeaderButton = getByTestId(container, 'reassign-teamLeader-0');
                fireEvent.click(teamLeaderButton);
            });
        });

        it('should not fire `props.updateAssignment`', () => {
            expect(props.updateAssignment).toHaveBeenCalledTimes(0);
        });
    });

    describe('when pollster is not defined', () => {
        beforeEach(() => {
            props.assignments = [
                {
                    id: 1,
                    state: 2,
                    ups: 1,
                    area: 6,
                    segment: 2,
                    street: 'Garcia de Cossio',
                    floor: 9,
                    room: null,
                    listNumber: 2
                }
            ];
        });

        it('should be disabled the button to reassign pollster', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'reassign-pollster-0')).toBeDisabled();
        });

        describe('when reassign pollster button is clicked', () => {
            beforeEach(() => {
                const {container} = getComponent();
                const teamLeaderButton = getByTestId(container, 'reassign-pollster-0');
                fireEvent.click(teamLeaderButton);
            });
        });

        it('should not fire `props.updateAssignment`', () => {
            expect(props.updateAssignment).toHaveBeenCalledTimes(0);
        });
    });

    describe('when teamLeader is defined', () => {
        beforeEach(() => {
            props.assignments = [
                {
                    id: 1,
                    state: 2,
                    ups: 1,
                    area: 6,
                    segment: 2,
                    street: 'Garcia de Cossio',
                    floor: 9,
                    room: null,
                    listNumber: 2,
                    teamLeader: '123e4567-e89b-12d3-a456-426614174000'
                }
            ];
        });

        it('should be enabled the button to reassign team leader', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'reassign-teamLeader-0')).toBeEnabled();
        });

        describe('when reassign team leader button is clicked', () => {
            beforeEach(() => {
                const {container} = getComponent();
                const teamLeaderButton = getByTestId(container, 'reassign-teamLeader-0');
                fireEvent.click(teamLeaderButton);
            });

            it('should fire `props.updateAssignment`', () => {
                expect(props.updateAssignment).toHaveBeenCalledTimes(1);
                expect(props.updateAssignment).toHaveBeenLastCalledWith({
                    id: 1,
                    state: 2,
                    ups: 1,
                    area: 6,
                    segment: 2,
                    street: 'Garcia de Cossio',
                    floor: 9,
                    room: null,
                    listNumber: 2,
                    teamLeader: '123e4567-e89b-12d3-a456-426614174000',
                    role: roles.TEAM_LEADER
                });
            });
        });
    });

    describe('when pollster is defined', () => {
        beforeEach(() => {
            props.assignments = [
                {
                    id: 1,
                    state: 2,
                    ups: 1,
                    area: 6,
                    segment: 2,
                    street: 'Garcia de Cossio',
                    floor: 9,
                    room: null,
                    listNumber: 2,
                    pollster: '123e4567-e89b-12d3-a456-426614174000'
                }
            ];
        });

        it('should be enabled the button to reassign pollster', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'reassign-pollster-0')).toBeEnabled();
        });

        describe('when reassign pollster button is clicked', () => {
            beforeEach(() => {
                const {container} = getComponent();
                const teamLeaderButton = getByTestId(container, 'reassign-pollster-0');
                fireEvent.click(teamLeaderButton);
            });

            it('should fire `props.updateAssignment`', () => {
                expect(props.updateAssignment).toHaveBeenCalledTimes(1);
                expect(props.updateAssignment).toHaveBeenLastCalledWith({
                    id: 1,
                    state: 2,
                    ups: 1,
                    area: 6,
                    segment: 2,
                    street: 'Garcia de Cossio',
                    floor: 9,
                    room: null,
                    listNumber: 2,
                    pollster: '123e4567-e89b-12d3-a456-426614174000',
                    role: roles.POLLSTER
                });
            });
        });
    });

    describe('when role is teamLeader', () => {
        beforeEach(() => {
            props.assignments = [
                {
                    id: 1,
                    state: 2,
                    ups: 1,
                    area: 6,
                    segment: 2,
                    street: 'Garcia de Cossio',
                    floor: 9,
                    room: null,
                    listNumber: 2,
                    teamLeader: '123e4567-e89b-12d3-a456-426614174000',
                    user: '123e4567-e89b-12d3-a456-426614174000',
                    role: roles.TEAM_LEADER
                }
            ];
        });

        it('should be active the button to reassign team leader', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'reassign-teamLeader-0')).toHaveClass('active');
        });
    });

    describe('when role is pollster', () => {
        beforeEach(() => {
            props.assignments = [
                {
                    id: 1,
                    state: 2,
                    ups: 1,
                    area: 6,
                    segment: 2,
                    street: 'Garcia de Cossio',
                    floor: 9,
                    room: null,
                    listNumber: 2,
                    pollster: '123e4567-e89b-12d3-a456-426614174000',
                    user: '123e4567-e89b-12d3-a456-426614174000',
                    role: roles.POLLSTER
                }
            ];
        });

        it('should be active the button to reassign team leader', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'reassign-pollster-0')).toHaveClass('active');
        });
    });
});
