import {getByText, getByTestId} from '@testing-library/react';

import Error from './Error';

describe('<Error>', () => {
    let props;
    const getComponent = () => render(Error, props);
    beforeEach(() => {
        props = {};
    });
    afterEach(tearDown);

    it('should render nothing', () => {
        const {container} = getComponent();
        expect(container.firstChild).toBeNull();
    });

    describe('when `props.error` is defined', () => {
        describe('and is a string', () => {
            beforeEach(() => {
                props.error = 'An error occurred';
            });

            it('should render `props.error`', () => {
                const {container} = getComponent();
                expect(getByText(container, props.error)).toBeInTheDocument();
            });
        });

        describe('and is an array of strings', () => {
            beforeEach(() => {
                props.error = ['First error', 'Second error'];
            });

            it('should render `props.error`', () => {
                const {baseElement} = getComponent();
                props.error.forEach((err, index) => {
                    expect(getByTestId(baseElement, `error-${index}`)).toBeInTheDocument();
                });
            });
        });
    });
});
