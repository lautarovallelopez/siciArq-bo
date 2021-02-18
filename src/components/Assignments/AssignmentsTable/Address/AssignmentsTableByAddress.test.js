import {getByTestId, getByText} from '@testing-library/react';

import AssignmentsTableByAddress from './AssignmentsTableByAddress';

describe('<AssignmentsTableByAddress>', () => {
    let props;
    const getComponent = () => render(AssignmentsTableByAddress, props);
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
                    state: 2,
                    ups: 1,
                    area: 6,
                    segment: 2,
                    listNumber: 5,
                    street: 'Belgrano',
                    cadastralNumber: 12,
                    floor: 1,
                    room: 'A'
                },
                {
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
                    room: 'A'
                }
            ]
        };
    });
    afterEach(tearDown);

    it('should display `Ups`, `Área`, `Segmento`, `N° Listado`, `Domicilio`, `Jefe de equipo`, `Encuestador` as columns', () => {
        const {container} = getComponent();
        expect(getByText(container, 'UPS')).toBeInTheDocument();
        expect(getByText(container, 'Área')).toBeInTheDocument();
        expect(getByText(container, 'Segmento')).toBeInTheDocument();
        expect(getByText(container, 'N° Listado')).toBeInTheDocument();
        expect(getByText(container, 'Domicilio')).toBeInTheDocument();
        expect(getByText(container, 'Jefe de equipo')).toBeInTheDocument();
        expect(getByText(container, 'Encuestador')).toBeInTheDocument();
    });

    it('should display a list of assignments', () => {
        const {container} = getComponent();
        props.assignments.forEach((assignment, index) => {
            const ups = getByTestId(container, `ups-${index}`);
            const area = getByTestId(container, `area-${index}`);
            const segment = getByTestId(container, `segment-${index}`);
            const listNumber = getByTestId(container, `list-number-${index}`);

            expect(getByText(ups, `${assignment.ups}`)).toBeInTheDocument();
            expect(getByText(area, `${assignment.area}`)).toBeInTheDocument();
            expect(getByText(segment, `${assignment.segment}`)).toBeInTheDocument();
            expect(getByText(listNumber, `${assignment.listNumber}`)).toBeInTheDocument();
            expect(getByTestId(container, `address-${index}`)).toBeInTheDocument();

            if (assignment.pollster) {
                const pollster = props.pollsters.find(p => p.id === assignment.pollster);
                expect(getByText(container, `${pollster.surname}, ${pollster.name}`)).toBeInTheDocument();
            }
            if (assignment.teamLeader) {
                const teamLeader = props.teamLeaders.find(p => p.id === assignment.teamLeader);
                expect(getByText(container, `${teamLeader.surname}, ${teamLeader.name}`)).toBeInTheDocument();
            }
        });
    });
});
