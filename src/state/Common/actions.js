import * as types from './types';

export const handleError = ({failed, err}) => ({
    type: types.ERROR_OCCURRED,
    err,
    failed
});

export const setNotification = ({message, notificationType}) => ({
    type: types.SET_NOTIFICATION, message, notificationType
});

export const resetNotification = () => ({type: types.RESET_NOTIFICATION});

export const setSearchParams = (searchParams, section) => ({type: types.SET_SEARCH_PARAMS, searchParams, section});
export const resetSearchParams = () => ({type: types.RESET_SEARCH_PARAMS});

export const openConfirmModal = context => ({type: types.OPEN_CONFIRM_MODAL, context});

export const closeConfirmModal = () => ({type: types.CLOSE_CONFIRM_MODAL});
