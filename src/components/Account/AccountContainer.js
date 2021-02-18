import {connect} from 'react-redux';

import {getRoles, getStates} from '@state/StaticData/selectors';
import {getUser} from '@state/Session/selectors';

import Account from './Account';

const mapStateToProps = state => ({
    user: getUser(state),
    roles: getRoles(state),
    states: getStates(state)
});

const AccountContainer = connect(mapStateToProps)(Account);

export default AccountContainer;
