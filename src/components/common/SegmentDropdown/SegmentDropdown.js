import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import Dropdown from '@components/common/Dropdown';

const SegmentDropdown = ({
    value, state, ups, area, onChange, label, control, getSegments, segments
}) => {
    useEffect(() => {
        if (state && ups && area) {
            getSegments(state, ups, area);
        }
    }, [state, ups, area]);

    return (
        <Dropdown
            label={label}
            options={segments}
            onChange={onChange}
            getOptionValue={option => option.segment}
            getOptionLabel={option => option.segment}
            value={value}
            control={control}
            isClearable
        />
    );
};

SegmentDropdown.propTypes = {
    getSegments: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    control: PropTypes.string.isRequired,
    label: PropTypes.string,
    state: PropTypes.string,
    ups: PropTypes.number,
    area: PropTypes.number,
    segments: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SegmentDropdown.defaultProps = {
    state: undefined,
    ups: undefined,
    area: undefined,
    value: undefined,
    label: undefined
};

export default SegmentDropdown;
