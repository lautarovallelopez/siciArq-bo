import {
    getByText, getByTestId, queryByText, queryByTestId, fireEvent
} from '@testing-library/react';

import SaveButton from './SaveButton';

describe('<SaveButton>', () => {
    let props;
    const getComponent = () => render(SaveButton, props);
    beforeEach(() => {
        props = {
            onSave: jest.fn()
        };
    });

    afterEach(tearDown);

    it('should display `Guardar` label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Guardar')).toBeInTheDocument();
    });

    it('should not be disabled', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'save-button')).toBeEnabled();
    });

    describe('when `props.disabled` is `true`', () => {
        beforeEach(() => {
            props.disabled = true;
        });

        it('should be disabled', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'save-button')).toBeDisabled();
        });
    });

    describe('when the button is clicked', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const button = getByTestId(container, 'save-button');
            fireEvent.click(button);
        });

        it('should fire `props.onSave`', () => {
            expect(props.onSave).toHaveBeenCalledTimes(1);
        });
    });

    it('should has `primary` color', () => {
        const {container} = getComponent();
        const button = getByTestId(container, 'save-button');
        expect(button).toHaveClass('btn-primary');
    });

    it('should display save icon', () => {
        const {container} = getComponent();
        const icon = getByTestId(container, 'save-icon');
        expect(icon).toHaveClass('fa-save');
    });

    it('should not display spinner icon', () => {
        const {container} = getComponent();
        expect(queryByTestId(container, 'spinner-icon')).toBeNull();
    });

    describe('when `props.loading` is `true`', () => {
        beforeEach(() => {
            props.loading = true;
        });

        it('should not display `Guardar`', () => {
            const {container} = getComponent();
            expect(queryByText(container, 'Guardar')).toBeNull();
        });

        it('should not render save icon', () => {
            const {container} = getComponent();
            expect(queryByTestId(container, 'save-icon')).toBeNull();
        });

        it('should display spinner icon', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'spinner-icon')).toBeInTheDocument();
        });
    });
});
