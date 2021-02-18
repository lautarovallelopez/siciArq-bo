import {put, call} from 'redux-saga/effects';

import UserService from '@services/user';
import {setNotification} from '@state/Common/actions';
import types from '@constants/notificationTypes';
import roles from '@constants/roles';

import * as sagas from '../sagas';
import * as actions from '../actions';

describe('submitUser', () => {
    it('handles successful attempt to create an user with resolve null', () => {
        const values = {
            name: 'test name',
            surname: 'test surname',
            email: 'test@test.com',
            roles: ['po'],
            documentId: 38618731,
            attributes: {
                stateId: 2
            }
        };
        const resolve = null;
        const reject = jest.fn();
        const action = actions.submitUserRequest(values, resolve, reject);
        const saga = sagas.submitUser(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(UserService.save, values)
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(
                setNotification({
                    message: 'Usuario creado correctamente.',
                    notificationType: types.SUCCESS
                })
            )
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles successful attempt to create an user with resolve passed', () => {
        const values = {
            name: 'test name',
            surname: 'test surname',
            email: 'test@test.com',
            roles: ['po'],
            documentId: 38618731,
            attributes: {
                stateId: 2
            }
        };
        const resolve = jest.fn();
        const reject = jest.fn();
        const action = actions.submitUserRequest(values, resolve, reject);
        const saga = sagas.submitUser(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(UserService.save, values)
        });
        expect(saga.next()).toEqual({
            done: false,
            value: call(resolve)
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(
                setNotification({
                    message: 'Usuario creado correctamente.',
                    notificationType: types.SUCCESS
                })
            )
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles successful attempt to edit an user with resolve null', () => {
        const values = {
            name: 'test name',
            surname: 'test surname',
            email: 'test@test.com',
            roles: ['po'],
            documentId: 38618731,
            attributes: {
                stateId: 2
            },
            id: 1
        };
        const resolve = null;
        const reject = jest.fn();
        const action = actions.submitUserRequest(values, resolve, reject);
        const saga = sagas.submitUser(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(UserService.save, values)
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(
                setNotification({
                    message: 'Usuario editado correctamente.',
                    notificationType: types.SUCCESS
                })
            )
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles successful attempt to edit an user with resolve passed', () => {
        const values = {
            name: 'test name',
            surname: 'test surname',
            email: 'test@test.com',
            roles: ['po'],
            documentId: 38618731,
            attributes: {
                stateId: 2
            },
            id: 1
        };
        const resolve = jest.fn();
        const reject = jest.fn();
        const action = actions.submitUserRequest(values, resolve, reject);
        const saga = sagas.submitUser(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(UserService.save, values)
        });
        expect(saga.next()).toEqual({
            done: false,
            value: call(resolve)
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(
                setNotification({
                    message: 'Usuario editado correctamente.',
                    notificationType: types.SUCCESS
                })
            )
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempt to create an user with reject null', () => {
        const values = {
            name: 'test name',
            surname: 'test surname',
            email: 'test@test.com',
            roles: ['po'],
            documentId: 38618731,
            attributes: {
                stateId: 2
            }
        };
        const resolve = jest.fn();
        const reject = null;
        const action = actions.submitUserRequest(values, resolve, reject);
        const saga = sagas.submitUser(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(UserService.save, values)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.submitUserError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(
                setNotification({
                    message: 'No se ha podido crear el usuario, intente mas tarde.',
                    notificationType: types.ERROR
                })
            )
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempt to create an user with reject passed', () => {
        const values = {
            name: 'test name',
            surname: 'test surname',
            email: 'test@test.com',
            roles: ['po'],
            documentId: 38618731,
            attributes: {
                stateId: 2
            }
        };
        const resolve = jest.fn();
        const reject = jest.fn();
        const action = actions.submitUserRequest(values, resolve, reject);
        const saga = sagas.submitUser(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(UserService.save, values)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.submitUserError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: call(reject)
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(
                setNotification({
                    message: 'No se ha podido crear el usuario, intente mas tarde.',
                    notificationType: types.ERROR
                })
            )
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempt to edit an user with reject null', () => {
        const values = {
            name: 'test name',
            surname: 'test surname',
            email: 'test@test.com',
            roles: ['po'],
            documentId: 38618731,
            attributes: {
                stateId: 2
            },
            id: 1
        };
        const resolve = jest.fn();
        const reject = null;
        const action = actions.submitUserRequest(values, resolve, reject);
        const saga = sagas.submitUser(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(UserService.save, values)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.submitUserError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(
                setNotification({
                    message: 'No se ha podido editar el usuario, intente mas tarde.',
                    notificationType: types.ERROR
                })
            )
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempt to edit an user with reject passed', () => {
        const values = {
            name: 'test name',
            surname: 'test surname',
            email: 'test@test.com',
            roles: ['po'],
            documentId: 38618731,
            attributes: {
                stateId: 2
            },
            id: 1
        };
        const resolve = jest.fn();
        const reject = jest.fn();
        const action = actions.submitUserRequest(values, resolve, reject);
        const saga = sagas.submitUser(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(UserService.save, values)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.submitUserError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: call(reject)
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(
                setNotification({
                    message: 'No se ha podido editar el usuario, intente mas tarde.',
                    notificationType: types.ERROR
                })
            )
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('fetchUsers', () => {
    it('handles successful attempts', () => {
        let filters;
        const action = actions.getUsersRequest(filters);
        const saga = sagas.fetchUsers(action);
        const response = {
            documents: [{
                id: 1
            }],
            total: 1
        };
        expect(saga.next()).toEqual({
            done: false,
            value: call(UserService.fetchUsers, filters)
        });
        expect(saga.next(response)).toEqual({
            done: false,
            value: put(actions.getUsersSuccess({users: response.documents, total: response.total}))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        let filters;
        const action = actions.getUsersRequest(filters);
        const saga = sagas.fetchUsers(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(UserService.fetchUsers, filters)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.getUsersError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(
                setNotification({
                    message: 'No se ha podido traer la lista de usuarios, intente mas tarde',
                    notificationType: types.ERROR
                })
            )
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('getUsersByStateAndRole', () => {
    it('handles successful attempts', () => {
        const state = 2;
        const role = [roles.SUB_COORDINATOR];
        const action = actions.getUsersByStateAndRoleRequest(state, role);
        const saga = sagas.getUsersByStateAndRole(action);
        const response = {
            documents: [
                {
                    id: 1
                }
            ]
        };
        expect(saga.next()).toEqual({
            done: false,
            value: call(UserService.fetchUsers, {state, role})
        });
        expect(saga.next(response)).toEqual({
            done: false,
            value: put(actions.getUsersByStateAndRoleSuccess(response.documents))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const state = 2;
        const role = [roles.SUB_COORDINATOR];
        const action = actions.getUsersByStateAndRoleRequest(state, role);
        const saga = sagas.getUsersByStateAndRole(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(UserService.fetchUsers, {state, role})
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.getUsersByStateAndRoleError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido traer la lista de usuarios, intente mas tarde',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('deleteUser', () => {
    it('handles successful attempts to enable a user', () => {
        const user = {
            id: '4970136c-a20f-424b-be0f-11db8b6ce183',
            deleted: true
        };
        const action = actions.deleteUserRequest(user);
        const saga = sagas.deleteUser(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(UserService.deleteUser, user.id)
        });
        expect(saga.next(user.id)).toEqual({
            done: false,
            value: put(actions.deleteUserSuccess(user.id))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(
                setNotification({
                    message: 'Usuario habilitado correctamente.',
                    notificationType: types.SUCCESS
                })
            )
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handle unsuccessful attempts to enable a user', () => {
        const user = {
            id: '4970136c-a20f-424b-be0f-11db8b6ce183',
            deleted: true
        };
        const action = actions.deleteUserRequest(user);
        const saga = sagas.deleteUser(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(UserService.deleteUser, user.id)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.deleteUserError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido habilitar el usuario, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles successful attempts to disable a user', () => {
        const user = {
            id: '4970136c-a20f-424b-be0f-11db8b6ce183',
            deleted: false
        };
        const action = actions.deleteUserRequest(user);
        const saga = sagas.deleteUser(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(UserService.deleteUser, user.id)
        });
        expect(saga.next(user.id)).toEqual({
            done: false,
            value: put(actions.deleteUserSuccess(user.id))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(
                setNotification({
                    message: 'Usuario deshabilitado correctamente.',
                    notificationType: types.SUCCESS
                })
            )
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handle unsuccessful attempts to disable a user', () => {
        const user = {
            id: '4970136c-a20f-424b-be0f-11db8b6ce183',
            deleted: false
        };
        const action = actions.deleteUserRequest(user);
        const saga = sagas.deleteUser(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(UserService.deleteUser, user.id)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.deleteUserError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido deshabilitar el usuario, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});
