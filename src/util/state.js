export const request = (state, args) => ({
    requested: (state && state.requested) || false,
    loading: (state && state.loading) || false,
    error: (state && state.error) || null,
    ...args
});

export const requestStart = (state, args) => request({
    requested: true,
    loading: true
}, args);

export const requestSuccess = (state, args) => request({
    requested: true,
    loading: false,
    error: null
}, args);

export const requestError = (state, args) => request({
    requested: true,
    loading: false,
    error: state && state.error
}, args);
