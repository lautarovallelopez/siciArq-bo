import PropTypes from 'prop-types';

export default PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired
}).isRequired;
