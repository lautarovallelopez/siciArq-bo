import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';

const Root = ({App, store}) => (
    <Provider store={store}>
        <App/>
    </Provider>
);

Root.propTypes = {
    App: PropTypes.instanceOf(React).isRequired,
    store: PropTypes.shape({}).isRequired
};

export default Root;
