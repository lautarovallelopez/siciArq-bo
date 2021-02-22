import {connect} from 'react-redux';

import {validateSession} from '@state/Session/actions';

import Init from './Init';

const mapDispatchToProps = dispatch => ({
    validateSession: queryParams => dispatch(validateSession(queryParams))
});

const InitContainer = connect(null, mapDispatchToProps)(Init);

export default InitContainer;
