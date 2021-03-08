import { pick } from 'lodash';

export const getProfile = state => state.session.profile;

export const getIsValidating = state => state.session.isValidating;

export const getIsValidate = state => state.session.isValidate;

export const getError = state => state.session.error;

export const getLocation = state => state.router.location;

export const getLocationQuery = state => getLocation(state).query;

export const getPage = state => pick(getLocationQuery(state), 'page');
