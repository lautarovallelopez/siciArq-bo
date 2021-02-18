import {connect} from 'react-redux';

import {getAreasDropdownRequest} from '@state/Type/actions';
import {getAreasDropdownData} from '@state/Type/selectors';

import AreasDropdown from './AreasDropdown';

const mapStateToProps = state => ({
    areas: getAreasDropdownData(state)
});

const mapDispatchToProps = dispatch => ({
    getAreas: (state, ups) => dispatch(getAreasDropdownRequest(state, ups))
});

const AreasDropdownContainer = connect(mapStateToProps, mapDispatchToProps)(AreasDropdown);

export default AreasDropdownContainer;
