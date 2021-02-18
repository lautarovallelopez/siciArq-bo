import {getByText} from '@testing-library/react';

import DwellingSummary from './DwellingSummary';

describe('<DwellingSummary>', () => {
    let props;
    const getComponent = () => render(DwellingSummary, props);
    beforeEach(() => {
        props = {
            dwelling: {
                response: 1
            }
        };
    });

    it('should render a header', () => {
        const {container} = getComponent();

        expect(getByText(container, 'Resumen de la vivienda')).toBeInTheDocument();
    });
});
