import React from 'react';

import {addressPropTypes} from '@util/propTypes';
import {getValueOrSD} from '@util/ui';

const Address = ({
    address
}) => (
    <span data-testid="address">
        {`          Calle: ${address.street}, 
                    N°: ${address.cadastralNumber},
                    piso: ${getValueOrSD(address.floor)}, 
                    dpto: ${getValueOrSD(address.room)}`}
    </span>
);

Address.propTypes = {
    address: addressPropTypes.isRequired
};

export default Address;
