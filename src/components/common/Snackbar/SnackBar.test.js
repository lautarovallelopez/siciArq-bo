import {getByText, getByRole} from '@testing-library/react';

import types from '@constants/notificationTypes';

import Snackbar from './Snackbar';

describe('<Snackbar>', () => {
    let props;
    const getComponent = () => render(Snackbar, props);

    beforeEach(() => {
        props = {};
    });
    afterEach(tearDown);

    describe('when `props.message` is defined', () => {
        beforeEach(() => {
            props.message = 'This is a message';
        });

        describe('when `props.notificationType` is `ERROR`', () => {
            beforeEach(() => {
                props.notificationType = types.ERROR;
            });

            it('should render a message', () => {
                const {container} = getComponent();
                getByText(container, props.message);
            });

            it('should render alert danger', () => {
                const {container} = getComponent();
                const alert = getByRole(container, 'alert');
                expect(alert).toHaveClass('alert-danger');
            });
        });

        describe('when `props.notificationType` is `SUCCESS`', () => {
            beforeEach(() => {
                props.notificationType = types.SUCCESS;
            });

            it('should render a message', () => {
                const {container} = getComponent();
                getByText(container, props.message);
            });

            it('should render alert success', () => {
                const {container} = getComponent();
                const alert = getByRole(container, 'alert');
                expect(alert).toHaveClass('alert-success');
            });
        });
    });
});
