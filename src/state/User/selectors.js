import head from 'lodash/head';
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';

import {getRoleByName, getStateName} from '@state/StaticData/selectors';
import {getUser as getSessionUser} from '@state/Session/selectors';
import {getFullNameAndRole} from '../../util/ui';

export const getUser = state => state?.user?.currentUser;
export const getPage = state => state?.user?.page;
export const getUsers = state => {
    const {user: {users, total}} = state;
    return {
        users: users && users.length > 0 ? map(users, user => ({
            ...user,
            role: getRoleByName(state,
                head(user.roles)
            ),
            state: getStateName(state, user?.attributes?.stateId)
        })) : undefined,
        total
    };
};
export const getUsersList = (state, redundantUserId) => {
    let users = getUsers(state)?.users || [];
    if (redundantUserId) {
        users = users.filter(user => user.id !== redundantUserId);
    }

    const {id} = getSessionUser(state);
    const sessionUser = users.find(user => user.id === id);
    users = users.filter(user => user.id !== id);

    users = sortBy(users, user => [
        user.role.toLowerCase(), user.surname.toLowerCase(), user.name.toLowerCase()
    ]);
    users = users.map(user => ({
        id: user.id,
        label: getFullNameAndRole(user)
    }));

    if (sessionUser) {
        users.unshift({
            id: sessionUser.id,
            label: getFullNameAndRole({
                ...sessionUser,
                isSessionUser: true
            })
        });
    }
    return users;
};
export const getLoading = state => state?.user?.loading;
export const getTeamLeaders = state => state?.user?.teamLeaders;
export const getPollsters = state => state?.user?.pollsters;
export const getFullUser = state => {
    const user = getUser(state);
    if (user) {
        return {
            ...user,
            role: getRoleByName(state,
                head(user.roles)
            )
        };
    }
    return user;
};

export const getSubCoordinators = state => state?.user?.subCoordinators;
