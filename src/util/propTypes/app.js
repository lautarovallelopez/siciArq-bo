import PropTypes from 'prop-types';

export default PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
    attributes: PropTypes.shape(PropTypes.any).isRequired
});
