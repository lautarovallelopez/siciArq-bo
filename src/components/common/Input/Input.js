import React from 'react';
import PropTypes from 'prop-types';
import {Input as BaseInput, FormGroup} from 'reactstrap';

import Error from '@components/common/Error';

import {StyledLabel} from './styled';

const Input = ({
    type, id, name, placeholder, onChange, label, value, error
}) => (
    <FormGroup>
        {label && <StyledLabel id={id}>{label}</StyledLabel>}
        <BaseInput type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={onChange} data-testid="input"/>
        <Error error={error}/>
    </FormGroup>
);

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    value: PropTypes.string
};

Input.defaultProps = {
    placeholder: undefined,
    label: undefined,
    error: undefined,
    value: undefined
};

export default Input;
