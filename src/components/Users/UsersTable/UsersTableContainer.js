import {connect} from 'react-redux';

import {
    getUsersRequest,
    deleteUserRequest,
    submitPasswordRecoveryRequested
} from '@state/User/actions';
import {getLoading, getUsers} from '@state/User/selectors';
import {getUser} from '@state/Session/selectors';

import UsersTable from './UsersTable';

const mapStateToProps = state => {
    const {users} = getUsers(state);
    return ({
        users,
        loading: getLoading(state),
        currentUser: getUser(state)
    });
};

const mapDispatchToProps = dispatch => ({
    getUsers: filters => dispatch(getUsersRequest(filters)),
    deleteUser: user => dispatch(deleteUserRequest(user)),
    recoveryPassword: ({id, username, email}) => dispatch(submitPasswordRecoveryRequested({id, username, email}))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersTable);
