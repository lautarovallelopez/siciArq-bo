/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getUser} from '@state/Session/selectors';
import {ConfirmModal} from '@components/common';
import RouterWithSession from './Routes/WithSession';

const App = ({user}) => {
    document.getElementsByTagName('body')[0].classList.remove('modal-open');
    return (
        <>
            <RouterWithSession user={user}/>
        </>
    );
};

App.propTypes = {
    user: PropTypes.shape({
        roles: PropTypes.arrayOf(PropTypes.string)
    })
};

App.defaultProps = {
    user: null
};

const mapStateToProps = state => ({
    user: getUser(state)
});

export default connect(mapStateToProps)(App);
