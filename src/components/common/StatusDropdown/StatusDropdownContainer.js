import {connect} from 'react-redux';

import {getStatusesData} from '@state/Type/selectors';

import StatusDropdown from './StatusDropdown';

const mapStateToProps = state => ({
    statuses: getStatusesData(state)
});

const StatusDropdownContainer = connect(mapStateToProps)(StatusDropdown);

export default StatusDropdownContainer;
