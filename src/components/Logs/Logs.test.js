import {getByTestId, getByText} from '@testing-library/react';

import Logs from './Logs';

const mockStore = configureStore({});

describe('<Logs>', () => {
    let props;
    const getComponent = () => render(Logs, props, {
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
        const icon = getByTestId(container, 'logs-icon');
        expect(icon).toHaveClass('fa-history');
    });

    it('should display `Sincronizaciones`', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Sincronizaciones')).toBeInTheDocument();
    });

    it('should render SearchParams component', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'logs-search-params')).toBeInTheDocument();
    });

    it('should render LogsTable component', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'logs-table')).toBeInTheDocument();
    });
});
