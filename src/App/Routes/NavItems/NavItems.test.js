import {
    fireEvent, getByText, getByTestId, queryByText
} from '@testing-library/react';

import roles from '@constants/roles';
import routes from '@constants/routes';
import NavItems from './NavItems';

describe('<NavItems>', () => {
    let props;
    const getComponent = () => render(NavItems, props);
    beforeEach(() => {
        props = {
            redirect: jest.fn(),
            userRoles: [roles.NATIONAL_COORDINATOR]
        };
    });
    afterEach(tearDown);

    describe('when the current role is NATIONAL_COORDINATOR', () => {
        beforeEach(() => {
            props.userRoles = [roles.NATIONAL_COORDINATOR];
        });

        it('should display many items on header menu', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Monitoreo')).toBeInTheDocument();
            expect(getByText(container, 'Usuarios')).toBeInTheDocument();
            expect(getByText(container, 'Asignaciones')).toBeInTheDocument();
            expect(getByText(container, 'Muestra')).toBeInTheDocument();
            expect(getByText(container, 'Revisión')).toBeInTheDocument();
            expect(getByText(container, 'Sincronizaciones')).toBeInTheDocument();
        });
    });

    describe('when the current role is COORDINATOR', () => {
        beforeEach(() => {
            props.userRoles = [roles.COORDINATOR];
        });

        it('should display many items on header menu', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Monitoreo')).toBeInTheDocument();
            expect(getByText(container, 'Usuarios')).toBeInTheDocument();
            expect(getByText(container, 'Asignaciones')).toBeInTheDocument();
            expect(getByText(container, 'Muestra')).toBeInTheDocument();
            expect(getByText(container, 'Revisión')).toBeInTheDocument();
            expect(getByText(container, 'Sincronizaciones')).toBeInTheDocument();
        });
    });

    describe('when the current role is SUB_COORDINATOR', () => {
        beforeEach(() => {
            props.userRoles = [roles.SUB_COORDINATOR];
        });

        it('should display many items on header menu', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Monitoreo')).toBeInTheDocument();
            expect(getByText(container, 'Usuarios')).toBeInTheDocument();
            expect(getByText(container, 'Asignaciones')).toBeInTheDocument();
            expect(getByText(container, 'Muestra')).toBeInTheDocument();
            expect(getByText(container, 'Revisión')).toBeInTheDocument();
            expect(getByText(container, 'Sincronizaciones')).toBeInTheDocument();
        });
    });

    describe('when the current role is TEAM_LEADER', () => {
        beforeEach(() => {
            props.userRoles = [roles.TEAM_LEADER];
        });

        it('should display many items on header menu', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Revisión')).toBeInTheDocument();
            expect(getByText(container, 'Sincronizaciones')).toBeInTheDocument();
        });
    });

    describe('when the current role is SUPERVISOR', () => {
        beforeEach(() => {
            props.userRoles = [roles.SUPERVISOR];
        });

        it('should not display any items on header menu', () => {
            const {container} = getComponent();
            expect(queryByText(container, 'Monitoreo')).toBeNull();
            expect(queryByText(container, 'Usuarios')).toBeNull();
            expect(queryByText(container, 'Asignaciones')).toBeNull();
            expect(queryByText(container, 'Muestra')).toBeNull();
            expect(queryByText(container, 'Revisión')).toBeNull();
            expect(queryByText(container, 'Sincronizaciones')).toBeNull();
        });
    });

    describe('when the current role is POLLSTER', () => {
        beforeEach(() => {
            props.userRoles = [roles.POLLSTER];
        });

        it('should not display any items on header menu', () => {
            const {container} = getComponent();
            expect(queryByText(container, 'Monitoreo')).toBeNull();
            expect(queryByText(container, 'Usuarios')).toBeNull();
            expect(queryByText(container, 'Asignaciones')).toBeNull();
            expect(queryByText(container, 'Muestra')).toBeNull();
            expect(queryByText(container, 'Revisión')).toBeNull();
            expect(queryByText(container, 'Sincronizaciones')).toBeNull();
        });
    });

    describe('when `Usuarios` nav item is clicked', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const users = getByTestId(container, 'users');
            fireEvent.click(users);
        });

        it('should fire `props.redirect`', () => {
            expect(props.redirect).toHaveBeenCalledTimes(1);
            expect(props.redirect).toHaveBeenCalledWith(routes.USERS);
        });
    });

    describe('when `Asignaciones` nav item is clicked', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const assignments = getByTestId(container, 'assignments');
            fireEvent.click(assignments);
        });

        it('should fire `props.redirect`', () => {
            expect(props.redirect).toHaveBeenCalledTimes(1);
            expect(props.redirect).toHaveBeenCalledWith(routes.ASSIGNMENTS);
        });
    });

    describe('when `Muestra` nav item is clicked', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const fieldMaterials = getByTestId(container, 'field-materials');
            fireEvent.click(fieldMaterials);
        });

        it('should fire `props.redirect`', () => {
            expect(props.redirect).toHaveBeenCalledTimes(1);
            expect(props.redirect).toHaveBeenCalledWith(routes.FIELD_MATERIALS);
        });
    });

    describe('when `Revisión` nav item is clicked', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const review = getByTestId(container, 'review');
            fireEvent.click(review);
        });

        it('should fire `props.redirect`', () => {
            expect(props.redirect).toHaveBeenCalledTimes(1);
            expect(props.redirect).toHaveBeenCalledWith(routes.REVIEW);
        });
    });

    describe('when `Sincronizaciones` nav item is clicked', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const logs = getByTestId(container, 'logs');
            fireEvent.click(logs);
        });

        it('should fire `props.redirect`', () => {
            expect(props.redirect).toHaveBeenCalledTimes(1);
            expect(props.redirect).toHaveBeenCalledWith(routes.LOGS);
        });
    });

    describe('when `Monitoreo` nav item is clicked', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const monitoring = getByTestId(container, 'monitoring');
            fireEvent.click(monitoring);
        });

        it('should fire `props.redirect`', () => {
            expect(props.redirect).toHaveBeenCalledTimes(1);
            expect(props.redirect).toHaveBeenCalledWith(routes.MONITORING);
        });
    });
});
