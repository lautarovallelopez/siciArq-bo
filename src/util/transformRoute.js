const transformRoute = (route, params = {}) => {
    let routeWithParams = route;
    alert
    Object.keys(params).forEach(key => {
        routeWithParams = routeWithParams.replace(`:${key}`, encodeURIComponent(params[key]));
    });

    return routeWithParams;
};

export default transformRoute;
