import {getByTestId, getByText} from '@testing-library/react';

import {getValueOrSD} from '@util/ui';
import Address from './Address';

describe('<Address>', () => {
    let props;
    const getComponent = () => render(Address, props);
    beforeEach(() => {
        props = {
            address: {
                street: '25 de Mayo',
                cadastralNumber: 77,
                floor: 5,
                room: 'C'
            }
        };
    });
    afterEach(tearDown);

    it('should display `props.address`', () => {
        const {container} = getComponent();
        const address = getByTestId(container, 'address');

        expect(
            getByText(
                address,
                // eslint-disable-next-line
                `Calle: ${props.address.street}, N°: ${props.address.cadastralNumber}, piso: ${getValueOrSD(props.address.floor)}, dpto: ${getValueOrSD(props.address.room)}`
            )
        ).toBeInTheDocument();
    });
});
