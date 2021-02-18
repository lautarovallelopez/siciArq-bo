import React from 'react';
import PropTypes from 'prop-types';
import {Row} from 'reactstrap';

import StyledAttribute from './styled';

const AddressAttribute = ({
    id, label, value
}) => (
    <Row>
        <StyledAttribute sm={12} data-testid={id}>
            <strong>
                {label}
                :
            </strong>
            &nbsp;
            {value}
        </StyledAttribute>
    </Row>
);

AddressAttribute.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default AddressAttribute;
