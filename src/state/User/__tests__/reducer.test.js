import {User} from '@model';

import reducer from '../reducer';
import * as actions from '../actions';

const initialState = {
    currentUser: new User(),
    users: undefined,
    total: 0,
    page: 0,
    teamLeaders: [],
    pollsters: [],
    subCoordinators: [],
    loading: false
};

describe('user reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle `SUBMIT_USER_REQUEST`', () => {
        const values = {
            id: 1,
            name: 'test name',
            surname: 'test surname',
            email: 'test@test.com',
            documentId: 386187223,
            attributes: {
                stateId: '02',
                phone: '1132323232'
            },
            roles: ['cn']
        };
        const resolve = jest.fn();
        const reject = jest.fn();
        expect(reducer(undefined, actions.submitUserRequest(values, resolve, reject))).toEqual({
            ...initialState,
            loading: true
        });
    });

    it('should handle `SUBMIT_USER_SUCCESS`', () => {
        expect(reducer(undefined, actions.submitUserSuccess())).toEqual({
            ...initialState,
            loading: false
        });
    });

    it('should handle `SUBMIT_USER_ERROR`', () => {
        const error = new Error('Oops!');
        expect(reducer(undefined, actions.submitUserError(error))).toEqual({
            ...initialState,
            loading: false,
            error
        });
    });

    it('should handle `DELETE_USER_REQUEST`', () => {
        const id = '4970136c-a20f-424b-be0f-11db8b6ce183';
        expect(reducer(undefined, actions.deleteUserRequest(id))).toEqual({
            ...initialState,
            loading: true
        });
    });

    it('should handle `DELETE_USER_SUCCESS`', () => {
        const users = [{
            id: '00000000-0000-0000-0000-000000000000',
            deleted: true
        }, {
            id: '4970136c-a20f-424b-be0f-11db8b6ce183',
            deleted: false
        }];
        const id = '4970136c-a20f-424b-be0f-11db8b6ce183';
        expect(reducer({users}, actions.deleteUserSuccess(id))).toEqual({
            users: [{
                id: '00000000-0000-0000-0000-000000000000',
                deleted: true
            }, {
                id: '4970136c-a20f-424b-be0f-11db8b6ce183',
                deleted: true
            }],
            loading: false
        });
    });

    it('should handle `DELETE_USER_ERROR`', () => {
        const error = new Error('Oops!');
        expect(reducer(undefined, actions.deleteUserError(error))).toEqual({
            ...initialState,
            loading: false,
            error
        });
    });

    it('should handle `GET_USERS_REQUEST`', () => {
        const filters = {name: test};
        expect(reducer(undefined, actions.getUsersRequest(filters))).toEqual({
            ...initialState,
            page: 0,
            total: 0,
            users: undefined,
            loading: true
        });
    });

    it('should handle `GET_USERS_SUCCESS`', () => {
        const users = [{id: 1}];
        const total = 1;
        expect(reducer(undefined, actions.getUsersSuccess({users, total}))).toEqual({
            ...initialState,
            users,
            total,
            loading: false
        });
    });

    it('should handle `GET_USERS_ERROR`', () => {
        const error = new Error('Oops!');
        expect(reducer(undefined, actions.getUsersError(error))).toEqual({
            ...initialState,
            loading: false,
            error
        });
    });

    it('should handle `GET_USER_REQUEST`', () => {
        const id = 1;
        expect(reducer(undefined, actions.getUserRequest(id))).toEqual({
            ...initialState,
            loading: true
        });
    });

    it('should handle `GET_USER_SUCCESS`', () => {
        const user = {
            id: 1
        };
        expect(reducer(undefined, actions.getUserSuccess(user))).toEqual({
            ...initialState,
            currentUser: user,
            loading: false
        });
    });

    it('should handle `GET_USER_ERROR`', () => {
        const error = new Error('Oops!');
        expect(reducer(undefined, actions.getUserError(error))).toEqual({
            ...initialState,
            loading: false,
            error
        });
    });

    it('should handle `SET_PAGE`', () => {
        const page = 1;
        expect(reducer(undefined, actions.setPage(page))).toEqual({
            ...initialState,
            page
        });
    });

    it('should handle `RESET_USER`', () => {
        expect(reducer(undefined, actions.resetUser())).toEqual({
            ...initialState,
            currentUser: new User()
        });
    });

    it('should handle `GET_USERS_BY_STATE_AND_ROLE_REQUEST`', () => {
        const stateId = 2;
        const role = ['tl'];
        expect(reducer(undefined, actions.getUsersByStateAndRoleRequest(stateId, role))).toEqual({
            ...initialState,
            loading: true
        });
    });

    it('should handle `GET_USERS_BY_STATE_AND_ROLE_REQUEST`', () => {
        const users = [
            {
                id: 1,
                roles: ['po']
            },
            {
                id: 2,
                roles: ['tl']
            },
            {
                id: 3,
                roles: ['sp']
            }
        ];
        expect(reducer(undefined, actions.getUsersByStateAndRoleSuccess(users))).toEqual({
            ...initialState,
            pollsters: [
                {
                    id: 1,
                    roles: ['po']
                }
            ],
            teamLeaders: [
                {
                    id: 2,
                    roles: ['tl']
                }
            ],
            subCoordinators: [
                {
                    id: 3,
                    roles: ['sp']
                }
            ],
            loading: false
        });
    });
});
