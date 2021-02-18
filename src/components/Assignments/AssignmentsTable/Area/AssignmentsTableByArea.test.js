import {getByTestId, getByText} from '@testing-library/react';

import AssignmentsTableByArea from './AssignmentsTableByArea';

describe('<AssignmentsTableByArea>', () => {
    let props;
    const getComponent = () => render(AssignmentsTableByArea, props);
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
                    dwellings: 2
                },
                {
                    id: 2,
                    state: 2,
                    ups: 1,
                    area: 6,
                    pollster: 1,
                    teamLeader: 1,
                    dwellings: 1
                }
            ]
        };
    });
    afterEach(tearDown);

    it('should display `Ups`, `Área`, `Jefe de equipo`, `Encuestador`, `Total de viviendas` as columns', () => {
        const {container} = getComponent();
        expect(getByText(container, 'UPS')).toBeInTheDocument();
        expect(getByText(container, 'Área')).toBeInTheDocument();
        expect(getByText(container, 'Jefe de equipo')).toBeInTheDocument();
        expect(getByText(container, 'Encuestador')).toBeInTheDocument();
        expect(getByText(container, 'Total de viviendas')).toBeInTheDocument();
    });

    it('should display a list of assignments', () => {
        const {container} = getComponent();
        props.assignments.forEach((assignment, index) => {
            const ups = getByTestId(container, `ups-${index}`);
            const area = getByTestId(container, `area-${index}`);
            const totalDwellings = getByTestId(container, `dwellings-${index}`);

            expect(getByText(ups, `${assignment.ups}`)).toBeInTheDocument();
            expect(getByText(area, `${assignment.area}`)).toBeInTheDocument();
            expect(getByText(totalDwellings, `${assignment.dwellings}`)).toBeInTheDocument();

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
