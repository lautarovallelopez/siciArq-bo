import reducer from '../reducer';
import * as actions from '../actions';

const initialState = {
    notification: {},
    confirmModal: {
        isOpen: false
    }
};

describe('common reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle `ERROR_OCCURRED`', () => {
        const err = 'You cannot fetch the users';
        const failed = true;
        expect(reducer(undefined, actions.handleError({err, failed}))).toEqual({
            ...initialState,
            err,
            failed
        });
    });

    it('should handle `SET_NOTIFICATION`', () => {
        const message = 'User created successfully';
        const notificationType = 'ERROR';
        expect(reducer(undefined, actions.setNotification({message, notificationType}))).toEqual({
            ...initialState,
            notification: {
                message,
                notificationType
            }
        });
    });

    it('should handle `RESET_NOTIFICATION`', () => {
        expect(reducer(undefined, actions.resetNotification())).toEqual({
            ...initialState,
            notification: {}
        });
    });

    it('should handle `SET_SEARCH_PARAMS`', () => {
        const searchParams = {
            state: 2,
            ups: 1,
            area: 4
        };
        const section = 'review';
        expect(reducer(undefined, actions.setSearchParams(searchParams, section))).toEqual({
            ...initialState,
            searchParams: {
                state: 2,
                ups: 1,
                area: 4,
                section: 'review'
            }
        });
    });

    it('should handle `RESET_SEARCH_PARAMS`', () => {
        expect(reducer(undefined, actions.resetSearchParams())).toEqual({
            ...initialState,
            searchParams: undefined
        });
    });

    it('should handle `OPEN_CONFIRM_MODAL`', () => {
        const context = {
            title: 'test title'
        };
        expect(reducer(undefined, actions.openConfirmModal(context))).toEqual({
            ...initialState,
            confirmModal: {
                isOpen: true,
                context
            }
        });
    });

    it('should handle `CLOSE_CONFIRM_MODAL`', () => {
        expect(reducer(undefined, actions.closeConfirmModal())).toEqual({
            ...initialState,
            confirmModal: {
                isOpen: false,
                context: undefined
            }
        });
    });
});
