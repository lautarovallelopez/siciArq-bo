import roles from '@constants/roles';

export const getUser = state => state?.session?.user;
export const isSubCoordinator = state => {
    const user = getUser(state);
    return user?.roles.includes(roles.SUB_COORDINATOR);
};
export const getUserRole = state => {
    const user = getUser(state);
    const [role] = user?.roles || [];
    return role;
};
export const getUserState = state => {
    const user = getUser(state);
    return user?.attributes?.stateId;
};
export const getLoading = state => state?.session?.loading;
export const getError = state => state?.session?.error;
export const getToken = state => state?.session?.token;
