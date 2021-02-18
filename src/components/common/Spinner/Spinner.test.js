import React from 'react';
import {getByText, getByTestId} from '@testing-library/react';

import Spinner from './Spinner';

describe('<Spinner>', () => {
    let props;
    const getComponent = () => render(Spinner, props);
    beforeEach(() => {
        props = {
            children: <h2>Children component</h2>
        };
    });
    afterEach(tearDown);

    describe('when `props.loading` is `true`', () => {
        beforeEach(() => {
            props.loading = true;
        });

        it('should render a spinner', () => {
            const {container} = getComponent();
            const icon = getByTestId(container, 'spinner-icon');
            expect(icon).toBeInTheDocument();
            expect(icon).toHaveClass('fa-spinner');
        });
    });

    describe('when `props.loading` is `false`', () => {
        beforeEach(() => {
            props.loading = false;
        });

        it('should render children', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Children component')).toBeInTheDocument();
        });
    });
});
