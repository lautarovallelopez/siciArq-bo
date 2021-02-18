import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '@components/common/Dropdown';
import situationPropTypes from '@util/propTypes/situationPropTypes';

const SituationDropdown = ({
    value, situations, onChange, getOptionLabel, getOptionValue, label, control
}) => (
    <Dropdown
        label={label}
        options={situations}
        onChange={onChange}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        value={value}
        control={control}
        isClearable
    />
);

SituationDropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
    getOptionValue: PropTypes.func,
    getOptionLabel: PropTypes.func,
    control: PropTypes.string,
    label: PropTypes.string,
    situations: PropTypes.arrayOf(situationPropTypes).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SituationDropdown.defaultProps = {
    getOptionValue: option => option.id,
    getOptionLabel: option => option.label,
    value: undefined,
    label: 'Situación',
    control: 'situation'
};

export default SituationDropdown;
