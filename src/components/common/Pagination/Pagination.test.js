import {fireEvent, getByTestId, getByText} from '@testing-library/react';
import range from 'lodash/range';

import Pagination from './Pagination';

describe('<Pagination>', () => {
    let props;
    const getComponent = () => render(Pagination, props);
    beforeEach(() => {
        props = {
            onChange: jest.fn(),
            selectedPage: 0
        };
    });
    afterEach(tearDown);

    it('should render a button to go to first page', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'first-page')).toBeInTheDocument();
    });

    it('should render a button to go to previous page', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'previous-page')).toBeInTheDocument();
    });

    describe('when `props.selectedPage` is equal to zero', () => {
        beforeEach(() => {
            props.selectedPage = 0;
        });

        it('should be disabled the button to go to first page', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'first-page')).toHaveClass('disabled');
        });

        it('should be disabled the button to go to previous page', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'previous-page')).toHaveClass('disabled');
        });
    });

    describe('when `props.selectedPage` is not equal to zero', () => {
        beforeEach(() => {
            props.selectedPage = 1;
        });

        it('should not be disabled the button to go to first page', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'first-page')).not.toHaveClass('disabled');
        });

        it('should not be disabled the button to go to previous page', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'previous-page')).not.toHaveClass('disabled');
        });

        describe('when previous page button is clicked', () => {
            beforeEach(() => {
                const {container} = getComponent();
                const previousPage = getByTestId(container, 'previous-page');
                fireEvent.click(previousPage);
            });

            it('should fire `props.onChange`', () => {
                expect(props.onChange).toHaveBeenCalledTimes(1);
                expect(props.onChange).toHaveBeenCalledWith(0);
            });
        });

        describe('when first page button is clicked', () => {
            beforeEach(() => {
                const {container} = getComponent();
                const previousPage = getByTestId(container, 'first-page');
                fireEvent.click(previousPage);
            });

            it('should fire `props.onChange`', () => {
                expect(props.onChange).toHaveBeenCalledTimes(1);
                expect(props.onChange).toHaveBeenCalledWith(0);
            });
        });
    });

    it('should render number of pages', () => {
        const {container} = getComponent();
        range(0, 30).forEach((page, index) => {
            const pageNumber = getByTestId(container, `page-number-${index}`);
            expect(getByText(pageNumber, `${page + 1}`)).toBeInTheDocument();
        });
    });

    describe('when a page is clicked', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const page = getByTestId(container, 'page-4');
            fireEvent.click(page);
        });

        it('should fire `props.onChange`', () => {
            expect(props.onChange).toHaveBeenCalledTimes(1);
            expect(props.onChange).toHaveBeenLastCalledWith(4);
        });
    });

    it('should render a button to go to next page', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'next-page')).toBeInTheDocument();
    });

    it('should render a button to go to last page', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'last-page')).toBeInTheDocument();
    });

    describe('when `props.selectedPage` is the last page number', () => {
        beforeEach(() => {
            props.selectedPage = 29;
        });

        it('should be disabled the button to go to next page', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'next-page')).toHaveClass('disabled');
        });

        it('should be disabled the button to go to last page', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'last-page')).toHaveClass('disabled');
        });
    });

    describe('when `props.selectedPage` not is the last page number', () => {
        beforeEach(() => {
            props.selectedPage = 28;
        });

        it('should not be disabled the button to go to next page', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'next-page')).not.toHaveClass('disabled');
        });

        it('should not be disabled the button to go to last page', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'last-page')).not.toHaveClass('disabled');
        });

        describe('when next page button is clicked', () => {
            beforeEach(() => {
                const {container} = getComponent();
                const previousPage = getByTestId(container, 'next-page');
                fireEvent.click(previousPage);
            });

            it('should fire `props.onChange`', () => {
                expect(props.onChange).toHaveBeenCalledTimes(1);
                expect(props.onChange).toHaveBeenCalledWith(29);
            });
        });

        describe('when last page button is clicked', () => {
            beforeEach(() => {
                const {container} = getComponent();
                const previousPage = getByTestId(container, 'last-page');
                fireEvent.click(previousPage);
            });

            it('should fire `props.onChange`', () => {
                expect(props.onChange).toHaveBeenCalledTimes(1);
                expect(props.onChange).toHaveBeenCalledWith(29);
            });
        });
    });
});
