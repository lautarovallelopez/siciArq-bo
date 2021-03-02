const TOKEN_KEY = 'id_token';
const SESSION = 'session';

export const setToken = token => localStorage.setItem(TOKEN_KEY, token);

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const hasSession = () => !!localStorage.getItem(TOKEN_KEY);

export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

export const setSession = user => localStorage.setItem(SESSION, JSON.stringify(user));

export const getSession = () => JSON.parse(localStorage.getItem(SESSION));
