import {getByTestId, getByText} from '@testing-library/react';
import configureStore from 'redux-mock-store';

import Review from './Review';

const mockStore = configureStore({});

describe('<Review>', () => {
    let props;
    const getComponent = () => render(Review, props, {
        store: mockStore({
            staticData: {
                states: []
            },
            session: {
                user: {
                    roles: ['cn']
                }
            }
        })
    });
    beforeEach(() => {
        props = {};
    });
    afterEach(tearDown);

    it('should render an icon', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'icon')).toBeInTheDocument();
    });

    it('should display `Revisión`', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Revisión')).toBeInTheDocument();
    });

    it('should render SearchParams component', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'review-search-params')).toBeInTheDocument();
    });

    it('should render ReviewTable component', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'review-table')).toBeInTheDocument();
    });
});
