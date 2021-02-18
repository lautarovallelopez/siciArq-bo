import PropTypes from 'prop-types';

export default PropTypes.shape({
    id: PropTypes.number.isRequired,
    block: PropTypes.number.isRequired,
    side: PropTypes.number.isRequired,
    locality: PropTypes.string.isRequired,
    listNumber: PropTypes.number.isRequired,
    street: PropTypes.string.isRequired,
    cadastralNumber: PropTypes.string,
    floor: PropTypes.string,
    house: PropTypes.string,
    room: PropTypes.string,
    dwellingTypeCode: PropTypes.string.isRequired,
    sector: PropTypes.string,
    entrance: PropTypes.string,
    building: PropTypes.string,
    description: PropTypes.string
});
