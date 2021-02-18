import {getByTestId, getByText} from '@testing-library/react';

import AssignmentsPreviewByArea from './AssignmentsPreviewByArea';

describe('<AssignmentsPreviewByArea>', () => {
    let props;
    const getComponent = () => render(AssignmentsPreviewByArea, props);
    beforeEach(() => {
        props = {
            assignment: {
                teamLeader: 'teamLeader A',
                pollster: 'pollster A',
                ups: 1,
                area: 2
            }
        };
    });
    afterEach(tearDown);

    it('should display `Ups`, `Area`, `Jefe de equipo` and `Encuestador`', () => {
        const {container} = getComponent();
        const upsLabel = getByTestId(container, 'upsLabel');
        const areaLabel = getByTestId(container, 'areaLabel');
        const teamLeaderLabel = getByTestId(container, 'teamLeaderLabel');
        const pollsterLabel = getByTestId(container, 'pollsterLabel');
        expect(getByText(upsLabel, 'Ups', {exact: false})).toBeInTheDocument();
        expect(getByText(areaLabel, 'Area', {exact: false})).toBeInTheDocument();
        expect(getByText(teamLeaderLabel, 'Jefe de equipo', {exact: false})).toBeInTheDocument();
        expect(getByText(pollsterLabel, 'Encuestador', {exact: false})).toBeInTheDocument();
    });

    it('should display assignment values', () => {
        const {container} = getComponent();
        const ups = getByTestId(container, 'ups');
        const area = getByTestId(container, 'area');
        const teamLeader = getByTestId(container, 'teamLeader');
        const pollster = getByTestId(container, 'pollster');
        expect(getByText(ups, `${props.assignment.ups}`)).toBeInTheDocument();
        expect(getByText(area, `${props.assignment.area}`)).toBeInTheDocument();
        expect(getByText(teamLeader, props.assignment.teamLeader)).toBeInTheDocument();
        expect(getByText(pollster, props.assignment.pollster)).toBeInTheDocument();
    });
});
