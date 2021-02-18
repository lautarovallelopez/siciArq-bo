import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import find from 'lodash/find';
import isNil from 'lodash/isNil';

import Error from '@components/common/Error';

import {StyledLabel} from './styled';

const Dropdown = ({
    id, value, disabled, options, onChange, label, error, getOptionLabel, getOptionValue, control, placeholder, ...props
}) => (
    <>
        {label && <StyledLabel>{label}</StyledLabel>}
        <Select
            value={!isNil(value) ? find(options, option => getOptionValue(option) === value) : null}
            name={control}
            isDisabled={disabled}
            onChange={option => onChange({
                target: {id: control, value: !isNil(option) ? getOptionValue(option) : null}
            })}
            options={options}
            getOptionValue={getOptionValue}
            getOptionLabel={getOptionLabel}
            menuPlacement="auto"
            aria-label={id || control}
            placeholder={placeholder}
            {...props}
        />
        <Error error={error}/>
    </>
);

Dropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
    getOptionValue: PropTypes.func,
    getOptionLabel: PropTypes.func,
    onBlur: PropTypes.func,
    control: PropTypes.string.isRequired,
    label: PropTypes.string,
    id: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    disabled: PropTypes.bool,
    placeholder: PropTypes.string
};

Dropdown.defaultProps = {
    getOptionValue: option => option._id,
    getOptionLabel: option => option.name,
    onBlur: undefined,
    disabled: false,
    value: undefined,
    label: undefined,
    id: undefined,
    error: undefined,
    placeholder: '[Seleccione]'
};

export default Dropdown;
