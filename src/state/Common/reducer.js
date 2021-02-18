import {
    ERROR_OCCURRED,
    RESET_NOTIFICATION,
    SET_NOTIFICATION,
    SET_SEARCH_PARAMS,
    RESET_SEARCH_PARAMS,
    OPEN_CONFIRM_MODAL,
    CLOSE_CONFIRM_MODAL
} from '@state/Common/types';

const initialState = {
    notification: {},
    confirmModal: {
        isOpen: false
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ERROR_OCCURRED:
            return {
                ...state,
                failed: action.failed,
                err: action.err
            };
        case SET_NOTIFICATION:
            return {
                ...state,
                notification: {
                    message: action.message,
                    notificationType: action.notificationType
                }
            };
        case RESET_NOTIFICATION:
            return {
                ...state,
                notification: {}
            };
        case SET_SEARCH_PARAMS:
            return {
                ...state,
                searchParams: {
                    ...action.searchParams,
                    section: action.section
                }
            };
        case RESET_SEARCH_PARAMS:
            return {...state, searchParams: undefined};
        case OPEN_CONFIRM_MODAL:
            return {
                ...state,
                confirmModal: {
                    isOpen: true,
                    context: action.context
                }
            };
        case CLOSE_CONFIRM_MODAL:
            return {
                ...state,
                confirmModal: {
                    isOpen: false,
                    context: undefined
                }
            };
        default:
            return state;
    }
};
