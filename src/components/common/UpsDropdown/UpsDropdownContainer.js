import {connect} from 'react-redux';

import {getUpsDropdownRequest} from '@state/Type/actions';
import {getUpsDropdownData} from '@state/Type/selectors';

import UpsDropdown from './UpsDropdown';

const mapStateToProps = state => ({
    ups: getUpsDropdownData(state)
});

const mapDispatchToProps = dispatch => ({
    getUps: stateId => dispatch(getUpsDropdownRequest(stateId))
});

const UpsDropdownContainer = connect(mapStateToProps, mapDispatchToProps)(UpsDropdown);

export default UpsDropdownContainer;
