import {connect} from 'react-redux';

import {getStates} from '@state/StaticData/selectors';

import StateDropdown from './StateDropdown';

const mapStateToProps = state => ({
    states: getStates(state)
});

const StateDropdownContainer = connect(mapStateToProps)(StateDropdown);

export default StateDropdownContainer;
