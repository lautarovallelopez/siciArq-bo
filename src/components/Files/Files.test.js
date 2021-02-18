import {getByText, getByTestId} from '@testing-library/react';
import configureStore from 'redux-mock-store';

import Files from './Files';

const mockStore = configureStore({});

describe('<Files>', () => {
    let props;
    const getComponent = () => render(Files, props, {
        store: mockStore({
            type: {
                getFiles: {
                    files: [],
                    loading: false
                }
            }
        })
    });
    beforeEach(() => {
        props = {};
    });
    afterEach(tearDown);

    it('should display `Lista de materiales`', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Lista de materiales')).toBeInTheDocument();
    });

    it('should render FilesTable component', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'files-list')).toBeInTheDocument();
    });
});
