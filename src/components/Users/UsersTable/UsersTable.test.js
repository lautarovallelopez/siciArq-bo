import {fireEvent, getByTestId, getByText} from '@testing-library/react';

import roles from '@constants/roles';

import UsersTable from './UsersTable';

describe('<UsersTable>', () => {
    let props;
    const getComponent = () => render(UsersTable, props, {router: {initialEntries: ['/']}});
    beforeEach(() => {
        props = {
            getUsers: jest.fn(),
            deleteUser: jest.fn(),
            recoveryPassword: jest.fn(),
            currentUser: {
                roles: ['cn']
            }
        };
    });
    afterEach(tearDown);

    describe('when `props.loading` is `true`', () => {
        beforeEach(() => {
            props.loading = true;
        });

        it('should render a spinner', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'spinner-icon')).toBeInTheDocument();
        });
    });

    describe('when `props.loading` is `false`', () => {
        beforeEach(() => {
            props.loading = false;
        });

        it('should display `Usuario`, `Nombre`, `Apellido`, `Rol` and `Jurisdicción`', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Usuario')).toBeInTheDocument();
            expect(getByText(container, 'Nombre')).toBeInTheDocument();
            expect(getByText(container, 'Apellido')).toBeInTheDocument();
            expect(getByText(container, 'Rol')).toBeInTheDocument();
            expect(getByText(container, 'Jurisdicción')).toBeInTheDocument();
        });

        describe('when `props.users` is defined', () => {
            beforeEach(() => {
                props.users = [
                    {
                        id: 1,
                        username: 'usernameA',
                        name: 'nameA',
                        surname: 'surnameA',
                        role: 'Encuestador',
                        state: 'Buenos Aires'
                    },
                    {
                        id: 2,
                        username: 'usernameB',
                        name: 'nameB',
                        surname: 'surnameB',
                        role: 'Jefe de Equipo',
                        state: 'Catamarca'
                    },
                    {
                        id: 3,
                        username: 'usernameC',
                        name: 'nameC',
                        surname: 'surnameC',
                        role: 'Coordinador Nacional',
                        state: 'San Luis',
                        deleted: true
                    }
                ];
            });

            it('should display a list of users', () => {
                const {container} = getComponent();
                props.users.forEach((user, index) => {
                    const username = getByTestId(container, `user-${index}-username`);
                    const name = getByTestId(container, `user-${index}-name`);
                    const surname = getByTestId(container, `user-${index}-surname`);
                    const role = getByTestId(container, `user-${index}-role`);
                    const state = getByTestId(container, `user-${index}-state`);
                    const editUser = getByTestId(container, `user-${index}-edit`);
                    const recoverUserPassword = getByTestId(container, `user-${index}-recoverPassword`);
                    const credential = getByTestId(container, `user-${index}-credential`);

                    expect(getByText(username, user.username)).toBeInTheDocument();
                    expect(getByText(name, user.name)).toBeInTheDocument();
                    expect(getByText(surname, user.surname)).toBeInTheDocument();
                    expect(getByText(role, user.role)).toBeInTheDocument();
                    expect(getByText(state, user.state)).toBeInTheDocument();
                    expect(getByText(editUser, 'Editar')).toBeInTheDocument();
                    expect(getByText(recoverUserPassword, 'Recuperar contraseña')).toBeInTheDocument();
                    expect(getByText(credential, 'Credencial')).toBeInTheDocument();

                    if (props.currentUser.roles.includes(roles.NATIONAL_COORDINATOR)) {
                        const deleteUser = getByTestId(container, `user-${index}-delete`);
                        expect(getByText(deleteUser, user.deleted ? 'Habilitar' : 'Deshabilitar')).toBeInTheDocument();
                    }
                    if (user.deleted) {
                        expect(getByTestId(container, 'user-disabled-icon')).toBeInTheDocument();
                    }
                });
            });

            describe('when an user clicks on recovery password option', () => {
                beforeEach(() => {
                    const {container} = getComponent();
                    const recoveryPassword = getByTestId(container, 'user-0-recoverPassword');
                    fireEvent.click(recoveryPassword);
                });

                it('should fire `props.recoveryPassword`', () => {
                    const user = props.users[0];
                    expect(props.recoveryPassword).toHaveBeenCalledTimes(1);
                    expect(props.recoveryPassword).toHaveBeenCalledWith(user);
                });
            });

            describe('when the user logged with role `cn` clicks on delete option', () => {
                beforeEach(() => {
                    const {container} = getComponent();
                    const deleteUser = getByTestId(container, 'user-0-delete');
                    fireEvent.click(deleteUser);
                });

                it('should fire `props.deleteUser`', () => {
                    const user = props.users[0];
                    expect(props.deleteUser).toHaveBeenCalledTimes(1);
                    expect(props.deleteUser).toHaveBeenCalledWith(user);
                });
            });
        });

        describe('when `props.users` is an empty array', () => {
            beforeEach(() => {
                props.users = [];
            });

            it('should display `No se encontraron usuarios.`', () => {
                const {container} = getComponent();
                expect(getByText(container, 'No se encontraron usuarios.')).toBeInTheDocument();
            });
        });
    });
});
