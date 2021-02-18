import {getByTestId, getByText} from '@testing-library/react';

import AssignmentsTableByUps from './AssignmentsTableByUps';

describe('<AssignmentsTableByUps>', () => {
    let props;
    const getComponent = () => render(AssignmentsTableByUps, props);
    beforeEach(() => {
        props = {
            updateAssignment: jest.fn(),
            subCoordinators: [
                {
                    id: 1,
                    name: 'sub coordinator name A',
                    surname: 'sub coordinator surname A'
                }
            ],
            assignments: [
                {
                    id: 1,
                    ups: 1,
                    subCoordinator: 1,
                    areas: 2,
                    dwellings: 6
                },
                {
                    id: 2,
                    ups: 1,
                    areas: 1,
                    dwellings: 1
                }
            ]
        };
    });
    afterEach(tearDown);

    it('should display `Ups`, `Subcoordinador`, `Cantidad de áreas`, `Cantidad de viviendas` as columns', () => {
        const {container} = getComponent();
        expect(getByText(container, 'UPS')).toBeInTheDocument();
        expect(getByText(container, 'Subcoordinador')).toBeInTheDocument();
        expect(getByText(container, 'Cantidad de áreas')).toBeInTheDocument();
        expect(getByText(container, 'Cantidad de viviendas')).toBeInTheDocument();
    });

    it('should display a list of assignments', () => {
        const {container} = getComponent();
        props.assignments.forEach((assignment, index) => {
            const ups = getByTestId(container, `ups-${index}`);
            const areas = getByTestId(container, `areas-${index}`);
            const dwellings = getByTestId(container, `dwellings-${index}`);

            expect(getByText(ups, `${assignment.ups}`)).toBeInTheDocument();
            expect(getByText(areas, `${assignment.areas}`)).toBeInTheDocument();
            expect(getByText(dwellings, `${assignment.dwellings}`)).toBeInTheDocument();

            if (assignment.subCoordinator) {
                const subCoordinator = props.subCoordinators.find(p => p.id === assignment.subCoordinator);
                expect(getByText(container, `${subCoordinator.surname}, ${subCoordinator.name}`)).toBeInTheDocument();
            }
        });
    });
});
