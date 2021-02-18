import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faSpinner} from '@fortawesome/free-solid-svg-icons';

const SaveButton = ({
    onSave, disabled, loading, ...props
}) => (
    <Button
        color="primary"
        onClick={onSave}
        data-testid="save-button"
        disabled={disabled}
        {...props}
    >
        {loading ? <FontAwesomeIcon icon={faSpinner} pulse data-testid="spinner-icon"/> : (
            <>
                <FontAwesomeIcon
                    icon={faSave}
                    data-testid="save-icon"
                />
                {' '}
                Guardar
            </>
        )}
    </Button>
);

SaveButton.propTypes = {
    onSave: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    loading: PropTypes.bool
};

SaveButton.defaultProps = {
    disabled: false,
    loading: false
};

export default SaveButton;
