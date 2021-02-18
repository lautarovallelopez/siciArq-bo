import filter from 'lodash/filter';
import find from 'lodash/find';
import head from 'lodash/head';
import isEmpty from 'lodash/isEmpty';
import parseInt from 'lodash/parseInt';

import {roleEnum} from '@constants';

import * as Session from '../Session/selectors';

export const getRoles = state => state?.staticData?.roles;
export const getRoleByName = (state, id) => find(getRoles(state), role => role.id === id)?.name;
export const getStates = state => state.staticData.states;
export const getStateName = (state, id) => find(getStates(state), s => parseInt(s._id) === parseInt(id))?.name;

export const getRolesToFilter = state => {
    const user = Session.getUser(state);
    const roles = getRoles(state);
    const currentRole = head(user?.roles);
    const role = !isEmpty(user.id) && !isEmpty(roles) ? find(roles, r => r.id === currentRole) : {};
    return currentRole === roleEnum.CN ? roles : filter(roles, r => r.order > role.order);
};
