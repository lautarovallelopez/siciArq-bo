import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '@components/common/Dropdown';

const StatusDropdown = ({
    value, statuses, onBlur, onChange, label, error, getOptionLabel, getOptionValue, control, ...props
}) => (
    <Dropdown
        label={label}
        options={statuses}
        onChange={onChange}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        value={value}
        error={error}
        onBlur={onBlur}
        control={control}
        {...props}
    />
);

StatusDropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
    getOptionValue: PropTypes.func,
    getOptionLabel: PropTypes.func,
    onBlur: PropTypes.func,
    control: PropTypes.string,
    label: PropTypes.string,
    statuses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
};

StatusDropdown.defaultProps = {
    getOptionValue: option => option.id,
    getOptionLabel: option => option.label,
    label: 'Estado',
    control: 'status',
    onBlur: undefined,
    value: undefined,
    error: undefined
};

export default StatusDropdown;
