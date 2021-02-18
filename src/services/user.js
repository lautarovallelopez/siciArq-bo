import queryToString from '@util/buildQueryString';
import API from '@constants/apiRoutes';
import transformRoute from '@util/transformRoute';

import Http from './http';

class UserService {
    static save(user) {
        if (user.id) {
            return Http.put(transformRoute(API.user, {id: user.id}), user);
        }
        return Http.post(API.users, user);
    }

    static fetchUser(id) {
        return Http.get(transformRoute(API.user, {id}));
    }

    static fetchUsers(filters) {
        return Http.get(`${API.users}${queryToString(filters)}`);
    }

    static deleteUser(id) {
        return Http.delete(transformRoute(API.user, {id}));
    }

    static submitPasswordRecovery(user) {
        return Http.post(API.passwordRecovery, user);
    }
}

export default UserService;
