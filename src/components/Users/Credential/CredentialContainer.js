import {connect} from 'react-redux';

import {getUserRequest} from '@state/User/actions';
import {getFullUser, getLoading} from '@state/User/selectors';

import Credential from './Credential';

const mapStateToProps = state => ({
    user: getFullUser(state),
    loading: getLoading(state)
});

const mapDispatchToProps = dispatch => ({
    getUser: id => dispatch(getUserRequest(id))
});

const CredentialContainer = connect(mapStateToProps, mapDispatchToProps)(Credential);

export default CredentialContainer;
