import {getByTestId, getByText} from '@testing-library/react';

import AssignmentsPreviewByAddress from './AssignmentsPreviewByAddress';

describe('<AssignmentsPreviewByAddress>', () => {
    let props;
    const getComponent = () => render(AssignmentsPreviewByAddress, props);
    beforeEach(() => {
        props = {
            assignment: {
                teamLeader: 'teamLeader A',
                pollster: 'pollster A',
                ups: 1,
                area: 2,
                segment: 3,
                street: 'venezuela',
                floor: undefined,
                room: undefined,
                listNumber: 121
            }
        };
    });
    afterEach(tearDown);

    it('should display `Ups`, `Área`, `Segmento`, `N° Listado`, `Dirección`, `Jefe de equipo` and `Encuestador`', () => {
        const {container} = getComponent();
        const upsLabel = getByTestId(container, 'upsLabel');
        const areaLabel = getByTestId(container, 'areaLabel');
        const segmentLabel = getByTestId(container, 'segmentLabel');
        const listNumberLabel = getByTestId(container, 'listNumberLabel');
        const addressLabel = getByTestId(container, 'addressLabel');
        const teamLeaderLabel = getByTestId(container, 'teamLeaderLabel');
        const pollsterLabel = getByTestId(container, 'pollsterLabel');
        expect(getByText(upsLabel, 'Ups', {exact: false})).toBeInTheDocument();
        expect(getByText(areaLabel, 'Área', {exact: false})).toBeInTheDocument();
        expect(getByText(segmentLabel, 'Segmento', {exact: false})).toBeInTheDocument();
        expect(getByText(listNumberLabel, 'N° Listado', {exact: false})).toBeInTheDocument();
        expect(getByText(addressLabel, 'Dirección', {exact: false})).toBeInTheDocument();
        expect(getByText(teamLeaderLabel, 'Jefe de equipo', {exact: false})).toBeInTheDocument();
        expect(getByText(pollsterLabel, 'Encuestador', {exact: false})).toBeInTheDocument();
    });

    it('should display assignment values', () => {
        const {container} = getComponent();
        const ups = getByTestId(container, 'ups');
        const area = getByTestId(container, 'area');
        const segment = getByTestId(container, 'segment');
        const listNumber = getByTestId(container, 'listNumber');
        const teamLeader = getByTestId(container, 'teamLeader');
        const pollster = getByTestId(container, 'pollster');
        expect(getByText(ups, `${props.assignment.ups}`)).toBeInTheDocument();
        expect(getByText(area, `${props.assignment.area}`)).toBeInTheDocument();
        expect(getByText(listNumber, `${props.assignment.listNumber}`)).toBeInTheDocument();
        expect(getByText(segment, `${props.assignment.segment}`)).toBeInTheDocument();
        expect(getByTestId(container, 'address')).toBeInTheDocument();
        expect(getByText(teamLeader, props.assignment.teamLeader)).toBeInTheDocument();
        expect(getByText(pollster, props.assignment.pollster)).toBeInTheDocument();
    });
});
