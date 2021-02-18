import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

const Spinner = ({loading, children}) => (loading
    ? (
        <div className="d-flex justify-content-center align-items-center mb-3">
            <FontAwesomeIcon icon={faSpinner} pulse size="3x" className="text-center" data-testid="spinner-icon"/>
        </div>
    ) : children);

Spinner.propTypes = {
    loading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
};

export default Spinner;
