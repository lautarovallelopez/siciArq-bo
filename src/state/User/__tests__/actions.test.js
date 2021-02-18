import * as actions from '../actions';
import * as types from '../types';
import roles from '../../../constants/roles';

describe('submitUserRequest', () => {
    it('should create an action to submit an user', () => {
        const values = {
            name: 'user name',
            surname: 'user surname',
            email: 'test@test.com',
            documentId: '16225112',
            attributes: {
                stateId: '02',
                phone: '1132378212'
            },
            roles: ['cn']
        };
        const resolve = jest.fn();
        const reject = jest.fn();
        expect(actions.submitUserRequest(values, resolve, reject)).toEqual({
            type: types.SUBMIT_USER_REQUEST,
            values: {
                id: values.id,
                name: values.name,
                surname: values.surname,
                email: values.email,
                documentId: values.documentId,
                attributes: values.attributes,
                roles: values.roles
            },
            resolve,
            reject
        });
    });
});

describe('submitUserSuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        expect(actions.submitUserSuccess()).toEqual({
            type: types.SUBMIT_USER_SUCCESS
        });
    });
});

describe('submitUserError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.submitUserError(error)).toEqual({
            type: types.SUBMIT_USER_ERROR,
            error
        });
    });
});

describe('getUsersRequest', () => {
    it('should create an action to get users by filters', () => {
        const filters = {name: 'test'};
        expect(actions.getUsersRequest(filters)).toEqual({
            type: types.GET_USERS_REQUEST,
            filters
        });
    });
});

describe('getUsersSuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        const users = [];
        const total = 0;
        expect(actions.getUsersSuccess({users, total})).toEqual({
            type: types.GET_USERS_SUCCESS,
            users,
            total
        });
    });
});

describe('getUsersError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getUsersError(error)).toEqual({
            type: types.GET_USERS_ERROR,
            error
        });
    });
});

describe('getUserRequest', () => {
    it('should create an action to get an user by id', () => {
        const id = 1;
        expect(actions.getUserRequest(id)).toEqual({
            type: types.GET_USER_REQUEST,
            id
        });
    });
});

describe('getUserSuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        const user = {
            id: 1
        };
        expect(actions.getUserSuccess(user)).toEqual({
            type: types.GET_USER_SUCCESS,
            user
        });
    });
});

describe('getUserError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getUserError(error)).toEqual({
            type: types.GET_USER_ERROR,
            error
        });
    });
});

describe('setPage', () => {
    it('creates an action to set page', () => {
        const page = 1;
        expect(actions.setPage(page)).toEqual({
            type: types.SET_PAGE,
            page
        });
    });
});

describe('resetUser', () => {
    it('creates an action to reset user', () => {
        expect(actions.resetUser()).toEqual({
            type: types.RESET_USER
        });
    });
});

describe('getUsersByStateAndRoleRequest', () => {
    it('should create an action to get asignees', () => {
        const state = 2;
        const role = [roles.SUB_COORDINATOR];
        expect(actions.getUsersByStateAndRoleRequest(state, role)).toEqual({
            type: types.GET_USERS_BY_STATE_AND_ROLE_REQUEST,
            state,
            role
        });
    });
});

describe('getUsersByStateAndRoleSuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        const users = [
            {
                id: 1,
                roles: ['po']
            },
            {
                id: 2,
                roles: ['tl']
            }
        ];
        expect(actions.getUsersByStateAndRoleSuccess(users)).toEqual({
            type: types.GET_USERS_BY_STATE_AND_ROLE_SUCCESS,
            users
        });
    });
});

describe('getUsersByStateAndRoleError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getUsersByStateAndRoleError(error)).toEqual({
            type: types.GET_USERS_BY_STATE_AND_ROLE_ERROR,
            error
        });
    });
});

describe('deleteUserRequest', () => {
    it('should create an action to delete an user', () => {
        const user = {
            id: '4970136c-a20f-424b-be0f-11db8b6ce183',
            deleted: true
        };
        expect(actions.deleteUserRequest(user)).toEqual({
            type: types.DELETE_USER_REQUEST,
            user
        });
    });
});

describe('deleteUserSuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        const userId = '4970136c-a20f-424b-be0f-11db8b6ce183';
        expect(actions.deleteUserSuccess(userId)).toEqual({
            type: types.DELETE_USER_SUCCESS,
            userId
        });
    });
});

describe('deleteUserError', () => {
    it('should create an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.deleteUserError(error)).toEqual({
            type: types.DELETE_USER_ERROR,
            error
        });
    });
});
