import API from '@constants/apiRoutes';
import transformRoute from '@util/transformRoute';

import Http from './http';

class TypeService {
    static getUps(state) {
        return Http.get(transformRoute(API.getUps, {state}));
    }

    static getAreas(state, ups) {
        return Http.get(transformRoute(API.getAreas, {state, ups}));
    }

    static getSegments(state, ups, area) {
        return Http.get(transformRoute(API.getSegments, {state, ups, area}));
    }

    static getFiles() {
        return Http.get(API.getFiles);
    }

    static getStatuses() {
        return Http.get(API.getStatuses);
    }

    static getSituations(status) {
        return Http.get(transformRoute(API.getSituations, {status}));
    }

    static getAssignmentsTypes() {
        return Http.get(API.getAssignmentsTypes);
    }
}

export default TypeService;
