import {
    fireEvent, getByText, queryByAttribute, waitFor, getByDisplayValue, getByLabelText
} from '@testing-library/react';
import Dropdown from './Dropdown';

const getByName = queryByAttribute.bind(null, 'name');

describe('<Dropdown>', () => {
    let props;
    const getComponent = () => render(Dropdown, props);

    beforeEach(() => {
        props = {
            onChange: jest.fn(),
            control: 'dropdown',
            options: [
                {
                    _id: 1,
                    name: 'first item'
                },
                {
                    _id: 2,
                    name: 'second item'
                }
            ]
        };
    });
    afterEach(tearDown);

    describe('when `props.label` is defined', () => {
        beforeEach(() => {
            props.label = 'This is a label';
        });

        it('should render `props.label`', () => {
            const {container} = getComponent();
            getByText(container, props.label);
        });
    });

    it('should render `[Seleccione]` as placeholder', () => {
        const {container} = getComponent();
        getByText(container, '[Seleccione]');
    });

    describe('when the dropdown is opened', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const input = getByLabelText(container, props.control);
            fireEvent.keyDown(input, {
                key: 'ArrowDown',
                keyCode: 40
            });
        });

        it('should render `props.options`', () => {
            const {container} = getComponent();
            props.options.forEach(option => {
                getByText(container, option.name);
            });
        });

        describe('when an option is selected', () => {
            beforeEach(async () => {
                const {container} = getComponent();
                await waitFor(() => getByText(container, 'first item'));
                fireEvent.click(getByText(container, 'first item'));
            });

            it('should fire `props.onChange`', () => {
                expect(props.onChange).toHaveBeenCalledTimes(1);
                expect(props.onChange).toHaveBeenCalledWith({
                    target: {
                        id: props.control,
                        value: 1
                    }
                });
            });
        });
    });

    describe('when `props.value` is defined', () => {
        beforeEach(() => {
            props.value = 1;
        });

        it('should has `props.value` as value', () => {
            const {container} = getComponent();
            getByDisplayValue(container, `${props.value}`);
        });
    });

    describe('when `props.value` is defined and no matched with any options', () => {
        beforeEach(() => {
            props.value = 5;
        });

        it('should has empty as value', () => {
            const {container} = getComponent();
            const input = getByName(container, 'dropdown');
            getByText(input, '');
        });
    });
});
