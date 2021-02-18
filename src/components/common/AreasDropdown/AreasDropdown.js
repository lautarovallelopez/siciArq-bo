import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import Dropdown from '@components/common/Dropdown';

const AreasDropdown = ({
    value, state, ups, onChange, label, control, getAreas, areas
}) => {
    useEffect(() => {
        if (state && ups) {
            getAreas(state, ups);
        }
    }, [state, ups]);

    return (
        <Dropdown
            label={label}
            options={areas}
            onChange={onChange}
            getOptionValue={option => option.area}
            getOptionLabel={option => option.area}
            value={value}
            control={control}
            isClearable
        />
    );
};

AreasDropdown.propTypes = {
    getAreas: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    control: PropTypes.string.isRequired,
    label: PropTypes.string,
    state: PropTypes.string,
    ups: PropTypes.number,
    areas: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AreasDropdown.defaultProps = {
    state: undefined,
    ups: undefined,
    value: undefined,
    label: undefined
};

export default AreasDropdown;
