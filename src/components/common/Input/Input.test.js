import {
    getByTestId, getByPlaceholderText, getByText, fireEvent
} from '@testing-library/react';

import Input from './Input';

describe('<Input>', () => {
    let props;
    const getComponent = () => render(Input, props);
    beforeEach(() => {
        props = {
            onChange: jest.fn(),
            type: 'text',
            id: 'input',
            name: 'input'
        };
    });
    afterEach(tearDown);

    it('should render an input', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'input')).toBeInTheDocument();
    });

    it('should have `type` prop', () => {
        const {container} = getComponent();
        const input = getByTestId(container, 'input');
        expect(input).toHaveAttribute('type', props.type);
    });

    it('should have `name` prop', () => {
        const {container} = getComponent();
        const input = getByTestId(container, 'input');
        expect(input).toHaveAttribute('name', props.name);
    });

    it('should have `id` prop', () => {
        const {container} = getComponent();
        const input = getByTestId(container, 'input');
        expect(input).toHaveAttribute('id', props.id);
    });

    describe('when `props.placeholder` is defined', () => {
        beforeEach(() => {
            props.placeholder = 'Write your name';
        });

        it('should display `props.placeholder`', () => {
            const {container} = getComponent();
            getByPlaceholderText(container, props.placeholder);
        });
    });

    describe('when `props.label` is defined', () => {
        beforeEach(() => {
            props.label = 'Name';
        });

        it('should display `props.label`', () => {
            const {container} = getComponent();
            expect(getByText(container, props.label)).toBeInTheDocument();
        });
    });

    describe('when `props.error` is defined', () => {
        beforeEach(() => {
            props.error = 'An error occurred';
        });

        it('should display `props.error`', () => {
            const {container} = getComponent();
            expect(getByText(container, props.error)).toBeInTheDocument();
        });
    });

    describe('when the user types in the input', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const input = getByTestId(container, 'input');
            fireEvent.change(input, {target: {value: 'hello world'}});
        });

        it('should fire `props.onChange`', () => {
            expect(props.onChange).toHaveBeenCalledTimes(1);
            expect(props.onChange).toHaveBeenCalledWith(expect.any(Object));
        });
    });
});
