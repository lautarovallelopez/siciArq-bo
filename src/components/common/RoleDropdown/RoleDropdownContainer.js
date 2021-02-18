import {connect} from 'react-redux';

import {getRoles} from '@state/StaticData/selectors';

import RoleDropdown from './RoleDropdown';

const mapStateToProps = state => ({
    roles: getRoles(state)
});

const RoleDropdownContainer = connect(mapStateToProps)(RoleDropdown);

export default RoleDropdownContainer;
