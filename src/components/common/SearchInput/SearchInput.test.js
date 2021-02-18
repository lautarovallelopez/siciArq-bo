import {
    fireEvent, getByTestId, getByText
} from '@testing-library/react';

import SearchInput from './SearchInput';

describe('<SearchInput>', () => {
    let props;
    const getComponent = () => render(SearchInput, props);
    beforeEach(() => {
        props = {
            onSearch: jest.fn(),
            id: 'search'
        };
    });
    afterEach(tearDown);

    describe('when `props.label` is defined', () => {
        beforeEach(() => {
            props.label = 'Search';
        });

        it('should display `props.label`', () => {
            const {container} = getComponent();
            expect(getByText(container, props.label)).toBeInTheDocument();
        });
    });

    describe('when an user writes something in the input', () => {
        const value = 'test';

        beforeEach(() => {
            const {container} = getComponent();
            const input = getByTestId(container, 'searchInput');
            fireEvent.change(input, {target: {value}});
        });

        it('calls `props.onSearch` after 1500 milliseconds', () => {
            setTimeout(() => {
                expect(props.onSearch).toHaveBeenCalledTimes(1);
                expect(props.onSearch).toHaveBeenLastCalledWith(value);
            }, 0);
        });
    });
});
