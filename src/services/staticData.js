import API from '@constants/apiRoutes';

import http from './http';

export default class StaticDataService {
    static fetch() {
        return http.get(API.getStaticData);
    }
}
