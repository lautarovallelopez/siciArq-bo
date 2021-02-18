import API from '@constants/apiRoutes';
import moment from 'moment';
import isNil from 'lodash/isNil';
import omitBy from 'lodash/omitBy';

import Http from './http';

export default class LogService {
    static getLogs(state, term, role, fromDate, toDate, skip) {
        const body = omitBy({
            state, term, role, skip
        }, isNil);
        if (fromDate) {
            body.fromDate = moment(fromDate).toISOString();
        }
        if (toDate) {
            body.toDate = moment(toDate).toISOString();
        }
        return Http.post(API.logs, body);
    }
}
