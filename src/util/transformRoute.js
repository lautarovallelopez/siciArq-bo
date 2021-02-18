const transformRoute = (route, params = {}) => {
    let routeWithParams = route;

    Object.keys(params).forEach(key => {
        routeWithParams = routeWithParams.replace(`:${key}`, params[key]);
    });

    return routeWithParams;
};

export default transformRoute;
