import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '@components/common/Dropdown';

const RoleDropdown = ({
    value, disabled, roles, onBlur, onChange, label, error, getOptionLabel, getOptionValue, control, setFieldValue
}) => (
    <Dropdown
        label={label}
        options={roles}
        onChange={e => {
            if (setFieldValue) {
                setFieldValue(e);
            }
            onChange(e);
        }}
        disabled={disabled}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        value={value}
        error={error}
        onBlur={onBlur}
        control={control}
    />
);

RoleDropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
    getOptionValue: PropTypes.func,
    getOptionLabel: PropTypes.func,
    onBlur: PropTypes.func,
    setFieldValue: PropTypes.func,
    control: PropTypes.string.isRequired,
    label: PropTypes.string,
    roles: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    disabled: PropTypes.bool
};

RoleDropdown.defaultProps = {
    getOptionValue: option => option.id,
    getOptionLabel: option => option.name,
    onBlur: undefined,
    disabled: false,
    value: undefined,
    label: undefined,
    error: undefined,
    setFieldValue: undefined
};

export default RoleDropdown;
