import PropTypes from 'prop-types';

export default PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    state: PropTypes.number.isRequired,
    ups: PropTypes.number.isRequired,
    area: PropTypes.number,
    areas: PropTypes.number,
    segment: PropTypes.number,
    dwellings: PropTypes.number,
    teamLeader: PropTypes.string,
    pollster: PropTypes.string,
    toAssign: PropTypes.bool,
    street: PropTypes.string,
    floor: PropTypes.string,
    room: PropTypes.string,
    cadastralNumber: PropTypes.string,
    listNumber: PropTypes.number,
    user: PropTypes.shape({
        roles: PropTypes.arrayOf(PropTypes.string).isRequired,
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired
    })
});
