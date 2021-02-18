import PropTypes from 'prop-types';

import {dwellingPropTypes, visitPropTypes} from '@util/propTypes';

export default PropTypes.shape({
    id: PropTypes.number.isRequired,
    address: PropTypes.number.isRequired,
    situation: PropTypes.number.isRequired,
    dwelling: dwellingPropTypes,
    closed: PropTypes.bool,
    readyToSync: PropTypes.bool,
    visits: PropTypes.arrayOf(visitPropTypes)
});
