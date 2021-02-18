import {getByTestId, getByText} from '@testing-library/react';
import configureStore from 'redux-mock-store';

import PackageJson from '@root/package.json';

import Home from './Home';

const mockStore = configureStore({});

describe('<Home>', () => {
    let props;
    const getComponent = () => render(Home, props, {
        router: {initialEntries: ['/']},
        store: mockStore({
            type: {
                getFiles: {
                    files: []
                }
            }
        })
    });
    beforeEach(() => {
        props = {
            getStaticData: jest.fn(),
            validateSession: jest.fn()
        };
    });

    it('should display `Bienvenido al Sistema`', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Bienvenido al Sistema')).toBeInTheDocument();
    });
    it('should display the description of package json', () => {
        const {container} = getComponent();
        const packageDescription = getByTestId(container, 'package-description');
        expect(getByText(packageDescription, PackageJson.description)).toBeInTheDocument();
    });

    it('should render Files component', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'files')).toBeInTheDocument();
    });
});
