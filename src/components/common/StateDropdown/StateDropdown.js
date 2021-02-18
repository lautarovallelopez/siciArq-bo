import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '@components/common/Dropdown';

const StateDropdown = ({
    value, disabled, states, onBlur, onChange, label, error, getOptionLabel, getOptionValue, control, ...props
}) => (
    <Dropdown
        label={label}
        options={states}
        onChange={onChange}
        disabled={disabled}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        value={value}
        error={error}
        onBlur={onBlur}
        control={control}
        {...props}
    />
);

StateDropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
    getOptionValue: PropTypes.func,
    getOptionLabel: PropTypes.func,
    onBlur: PropTypes.func,
    control: PropTypes.string.isRequired,
    label: PropTypes.string,
    states: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    disabled: PropTypes.bool
};

StateDropdown.defaultProps = {
    getOptionValue: option => option._id,
    getOptionLabel: option => option.name,
    onBlur: undefined,
    disabled: false,
    value: undefined,
    label: undefined,
    error: undefined
};

export default StateDropdown;
