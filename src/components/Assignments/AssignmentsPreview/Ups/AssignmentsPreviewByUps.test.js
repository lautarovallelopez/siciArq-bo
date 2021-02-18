import {getByTestId, getByText} from '@testing-library/react';

import AssignmentsPreviewByUps from './AssignmentsPreviewByUps';

describe('<AssignmentsPreviewByUps>', () => {
    let props;
    const getComponent = () => render(AssignmentsPreviewByUps, props);
    beforeEach(() => {
        props = {
            assignment: {
                subCoordinator: 'subCoordinator A',
                ups: 1,
                areas: 3,
                dwellings: 14
            }
        };
    });
    afterEach(tearDown);

    it('should display `Ups`, `SubCoordinador`, `Areas`, `Viviendas`', () => {
        const {container} = getComponent();
        const subCoordinatorLabel = getByTestId(container, 'subCoordinatorLabel');
        const upsLabel = getByTestId(container, 'upsLabel');
        const areasLabel = getByTestId(container, 'areasLabel');
        const dwellingsLabel = getByTestId(container, 'dwellingsLabel');

        expect(getByText(subCoordinatorLabel, 'SubCoordinador', {exact: false})).toBeInTheDocument();
        expect(getByText(upsLabel, 'Ups', {exact: false})).toBeInTheDocument();
        expect(getByText(areasLabel, 'Areas', {exact: false})).toBeInTheDocument();
        expect(getByText(dwellingsLabel, 'Viviendas', {exact: false})).toBeInTheDocument();
    });

    it('should display assignment values', () => {
        const {container} = getComponent();
        const subCoordinator = getByTestId(container, 'subCoordinator');
        const ups = getByTestId(container, 'ups');
        const areas = getByTestId(container, 'areas');
        const dwellings = getByTestId(container, 'dwellings');

        expect(getByText(subCoordinator, props.assignment.subCoordinator)).toBeInTheDocument();
        expect(getByText(ups, `${props.assignment.ups}`)).toBeInTheDocument();
        expect(getByText(areas, `${props.assignment.areas}`)).toBeInTheDocument();
        expect(getByText(dwellings, `${props.assignment.dwellings}`)).toBeInTheDocument();
    });
});
