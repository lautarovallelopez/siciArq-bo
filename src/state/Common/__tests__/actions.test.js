import * as actions from '../actions';
import * as types from '../types';

describe('handleError', () => {
    it('should create an action to handle error', () => {
        const failed = true;
        const err = '`co`is undefined';
        expect(actions.handleError({failed, err})).toEqual({
            type: types.ERROR_OCCURRED,
            err,
            failed
        });
    });
});

describe('setNotification', () => {
    it('should set a notification', () => {
        const message = 'User created successfully';
        const notificationType = 'SUCCESS';
        expect(actions.setNotification({message, notificationType})).toEqual({
            type: types.SET_NOTIFICATION,
            message,
            notificationType
        });
    });
});

describe('resetNotification', () => {
    it('should create an action to reset notification', () => {
        expect(actions.resetNotification()).toEqual({
            type: types.RESET_NOTIFICATION
        });
    });
});

describe('setSearchParams', () => {
    it('should create an action to set search params', () => {
        const searchParams = {
            state: 2,
            ups: 1,
            area: 8
        };
        const section = 'review';
        expect(actions.setSearchParams(searchParams, section)).toEqual({
            type: types.SET_SEARCH_PARAMS,
            searchParams,
            section
        });
    });
});

describe('resetSearchParams', () => {
    it('should create an action to reset search params', () => {
        expect(actions.resetSearchParams()).toEqual({
            type: types.RESET_SEARCH_PARAMS
        });
    });
});

describe('openConfirmModal', () => {
    it('creates an action to open confirm modal', () => {
        const context = {};
        expect(actions.openConfirmModal(context)).toEqual({
            type: types.OPEN_CONFIRM_MODAL,
            context
        });
    });
});

describe('closeConfirmModal', () => {
    it('creates an action to close confirm modal', () => {
        expect(actions.closeConfirmModal()).toEqual({
            type: types.CLOSE_CONFIRM_MODAL
        });
    });
});
