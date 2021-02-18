import PropTypes from 'prop-types';

export default PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        name: PropTypes.string,
        surname: PropTypes.string
    }),
    loginDate: PropTypes.string.isRequired,
    syncDate: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired
});
