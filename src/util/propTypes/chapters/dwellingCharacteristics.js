import PropTypes from 'prop-types';
import values from 'lodash/values';

import {statuses} from '@constants/review';

export default PropTypes.shape({
    dwellingType: PropTypes.number,
    roomsQuantity: PropTypes.string,
    floorsMaterial: PropTypes.number,
    floorsMaterialSpecification: PropTypes.string,
    ceilingMaterial: PropTypes.number,
    ceilingMaterialSpecification: PropTypes.string,
    hasInnerLiner: PropTypes.number,
    cookingFuel: PropTypes.number,
    cookingFuelSpecification: PropTypes.string,
    waterInstallation: PropTypes.number,
    waterProvision: PropTypes.number,
    hasBathroom: PropTypes.number,
    toiletType: PropTypes.number,
    toiletDrain: PropTypes.number,
    status: PropTypes.oneOf(values(statuses))
});
