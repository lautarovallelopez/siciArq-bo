import {connect} from 'react-redux';

import {getSegmentsDropdownRequest} from '@state/Type/actions';
import {getSegmentsDropdownData} from '@state/Type/selectors';

import SegmentDropdown from './SegmentDropdown';

const mapStateToProps = state => ({
    segments: getSegmentsDropdownData(state)
});

const mapDispatchToProps = dispatch => ({
    getSegments: (state, ups, area) => dispatch(getSegmentsDropdownRequest(state, ups, area))
});

const SegmentDropdownContainer = connect(mapStateToProps, mapDispatchToProps)(SegmentDropdown);

export default SegmentDropdownContainer;
