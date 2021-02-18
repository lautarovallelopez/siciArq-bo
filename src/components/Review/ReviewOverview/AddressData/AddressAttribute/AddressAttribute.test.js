import {getByText} from '@testing-library/react';

import AddressAttribute from './AddressAttribute';

describe('<AddressAttribute>', () => {
    let props;
    const getComponent = () => render(AddressAttribute, props);
    beforeEach(() => {
        props = {
            label: 'The value is',
            value: '17'
        };
    });
    afterEach(tearDown);

    it('should render a label and a value', () => {
        const {container} = getComponent();
        expect(getByText(container, `${props.label}:`)).toBeInTheDocument();
        expect(getByText(container, `${props.value}`)).toBeInTheDocument();
    });
});
