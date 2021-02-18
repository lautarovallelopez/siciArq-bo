import {getByText, getByTestId} from '@testing-library/react';

import BackButton from './BackButton';

describe('<BackButton>', () => {
    let props;
    const getComponent = () => render(BackButton, props, {router: {initialEntries: ['/']}});
    beforeEach(() => {
        props = {
            title: 'This is a title',
            to: '/'
        };
    });
    afterEach(tearDown);

    it('should render `props.title`', () => {
        const {container} = getComponent();
        expect(getByText(container, props.title)).toBeInTheDocument();
    });

    it('should render arrow circle left icon', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'back-icon')).toBeInTheDocument();
    });
});
