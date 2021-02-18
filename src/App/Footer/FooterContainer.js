import {connect} from 'react-redux';
import head from 'lodash/head';

import {getUser} from '@state/Session/selectors';
import {getRoleByName} from '@state/StaticData/selectors';

import Footer from './Footer';

const mapStateToProps = state => ({
    user: getUser(state),
    role: getRoleByName(state, head(getUser(state).roles))
});

export default connect(mapStateToProps)(Footer);
