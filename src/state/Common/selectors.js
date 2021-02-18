import get from 'lodash/get';

export const getFilter = (objectPath, name) => state => {
    const filters = get(state, `filters.${objectPath}`, {});
    return (name ? get(filters, name, '') : filters);
};

export const getMessage = state => state?.common?.notification?.message;

export const getType = state => state?.common?.notification?.notificationType;

export const getSearchParams = state => state?.common?.searchParams;
export const getSearchParamsBySection = (state, section) => {
    const searchParams = getSearchParams(state) || {};
    if (searchParams.section === section) {
        return searchParams;
    }
    return {};
};

export const getIsOpenModal = state => state?.common?.confirmModal?.isOpen;

export const getModalContext = state => state?.common?.confirmModal?.context;

export const getAssignmentType = state => state?.common?.searchParams?.assignmentType;
