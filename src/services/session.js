/* global window, localStorage, AUTH_LOGIN */
import API from '@constants/apiRoutes';
import roles from '@constants/roles';

import Http from './http';

const TOKEN_KEY = 'id_token';
const SESSION = 'session';

export default class SessionService {
    static signOut() {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.removeItem(SESSION);
        window.location = AUTH_LOGIN;
    }

    static fetchCurrent() {
        try {
            return Http.get(API.session);
        } catch (err) {
            const {hash} = window.location;
            if (hash.length > 2) {
                window.location = '/';
            }
            window.localStorage.removeItem(TOKEN_KEY);
            window.localStorage.removeItem(SESSION);
        }
        return null;
    }

    static validateToken(token) {
        return Http.post('/public-api/session', {token});
    }

    static setToken(token) {
        localStorage.setItem(TOKEN_KEY, token);
    }

    static setSession(user) {
        localStorage.setItem(SESSION, JSON.stringify(user));
    }

    static hasSession() {
        return !!localStorage.getItem(TOKEN_KEY);
    }

    static getToken() {
        return localStorage.getItem(TOKEN_KEY);
    }

    static getSession() {
        return JSON.parse(localStorage.getItem(SESSION));
    }

    static async validateSession(queryParams) {
        try {
            const accessToken = queryParams?.['?accessToken'];
            if (accessToken) {
                const {success, user} = await SessionService.validateToken(accessToken);
                if (success && [roles.COORDINATOR, roles.NATIONAL_COORDINATOR, roles.SUB_COORDINATOR, roles.TEAM_LEADER, 'admin'].includes(user.roles[0])) {
                    SessionService.setToken(accessToken);
                    SessionService.setSession(user);
                    window.location = '/';
                } else {
                    window.location = AUTH_LOGIN;
                }
                return;
            }
            if (SessionService.hasSession()) {
                const {success, user} = await SessionService.validateToken(SessionService.getToken());
                if (success && [roles.COORDINATOR, roles.NATIONAL_COORDINATOR, roles.SUB_COORDINATOR, roles.TEAM_LEADER].includes(user.roles[0])) {
                    SessionService.setSession(user);
                } else {
                    window.location = AUTH_LOGIN;
                }
            }
            if (!queryParams || !SessionService.hasSession()) {
                window.location = AUTH_LOGIN;
            }
        } catch (err) {
            window.location = AUTH_LOGIN;
        }
    }
}
