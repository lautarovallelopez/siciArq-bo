import API from '@constants/apiRoutes';
import buildQueryString from '@util/buildQueryString';
import transformRoute from '@util/transformRoute';

import Http from './http';

class SurveyService {
    static getSurveys(state, ups, area, status, situation, teamLeader, pollster, skip) {
        return Http.get(`${API.review}${buildQueryString({
            state, ups, area, status, situation, teamLeader, pollster, skip
        })}`);
    }

    static getSurvey(id) {
        return Http.get(transformRoute(API.survey, {id}));
    }

    static getAddress(id) {
        return Http.get(transformRoute(API.address, {id}));
    }

    static finishSurvey(id) {
        return Http.put(transformRoute(API.finish, {id}));
    }

    static reassignSurvey(id, user) {
        return Http.put(transformRoute(API.reassign, {id, user}));
    }

    static approveSurvey(id) {
        return Http.put(transformRoute(API.approve, {id}));
    }

    static reopenSurvey(id) {
        return Http.put(transformRoute(API.reopen, {id}));
    }

    static superviseSurvey(id, user) {
        return Http.put(transformRoute(API.supervise, {id, user}));
    }

    static recoverSurvey(id) {
        return Http.put(transformRoute(API.recover, {id}));
    }
}

export default SurveyService;
