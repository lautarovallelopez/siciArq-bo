import {connect} from 'react-redux';

import {validateSession} from '@state/Session/actions';

import Home from './Home';

const mapDispatchToProps = dispatch => ({
    validateSession: queryParams => dispatch(validateSession(queryParams))
});

const HomeContainer = connect(null, mapDispatchToProps)(Home);

export default HomeContainer;
