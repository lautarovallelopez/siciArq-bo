import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import Dropdown from '@components/common/Dropdown';

const UpsDropdown = ({
    value, ups, onChange, label, control, state, getUps
}) => {
    useEffect(() => {
        if (state) {
            getUps(state);
        }
    }, [state]);

    return (
        <Dropdown
            label={label}
            options={ups}
            onChange={onChange}
            getOptionValue={option => option.ups}
            getOptionLabel={option => option.ups}
            value={value}
            control={control}
            isClearable
        />
    );
};

UpsDropdown.propTypes = {
    getUps: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    control: PropTypes.string.isRequired,
    label: PropTypes.string,
    state: PropTypes.string,
    ups: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UpsDropdown.defaultProps = {
    value: undefined,
    label: undefined,
    state: undefined
};

export default UpsDropdown;
