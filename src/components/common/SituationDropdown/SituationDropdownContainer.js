import {connect} from 'react-redux';

import {getSituationsData} from '@state/Type/selectors';

import SituationDropdown from './SituationDropdown';

const mapStateToProps = state => ({
    situations: getSituationsData(state)
});

const SituationDropdownContainer = connect(mapStateToProps)(SituationDropdown);

export default SituationDropdownContainer;
