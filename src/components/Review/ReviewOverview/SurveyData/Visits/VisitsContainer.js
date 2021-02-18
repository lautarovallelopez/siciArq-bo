import {connect} from 'react-redux';

import {getRoles} from '@state/StaticData/selectors';

import Visits from './Visits';

const mapStateToProps = state => ({
    roles: getRoles(state)
});

export default connect(mapStateToProps)(Visits);
