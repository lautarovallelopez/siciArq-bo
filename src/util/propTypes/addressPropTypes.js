import PropTypes from 'prop-types';

import userPropTypes from './userPropTypes';

export default PropTypes.shape({
    id: PropTypes.number.isRequired,
    listNumber: PropTypes.number.isRequired,
    state: PropTypes.number.isRequired,
    stateName: PropTypes.string,
    ups: PropTypes.number.isRequired,
    area: PropTypes.number,
    segment: PropTypes.number,
    fraction: PropTypes.number,
    radius: PropTypes.number,
    block: PropTypes.number,
    side: PropTypes.number,
    street: PropTypes.string.isRequired,
    cadastralNumber: PropTypes.string,
    floor: PropTypes.string,
    room: PropTypes.string,
    teamLeader: PropTypes.oneOfType([PropTypes.string, userPropTypes]).isRequired,
    pollster: PropTypes.oneOfType([PropTypes.string, userPropTypes]),
    supervisor: PropTypes.oneOfType([PropTypes.string, userPropTypes]),
    user: PropTypes.oneOfType([PropTypes.string, userPropTypes]),
    syncDate: PropTypes.string,
    status: PropTypes.number.isRequired,
    statusName: PropTypes.string.isRequired,
    situation: PropTypes.number.isRequired,
    situationName: PropTypes.string.isRequired
});
