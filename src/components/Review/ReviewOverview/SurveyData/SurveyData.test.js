import {getByText} from '@testing-library/react';

import SurveyData from './SurveyData';

const mockStore = configureStore({});

describe('<SurveyData>', () => {
    let props;
    const getComponent = () => render(SurveyData, props, {store: mockStore({})});
    beforeEach(() => {
        props = {
            dwelling: {
                dwellingResponse: {
                    response: 1
                }
            },
            visits: []
        };
    });
    afterEach(tearDown);

    it('should render a header', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Contenido de la encuesta'))
            .toBeInTheDocument();
    });

    describe('when `props.dwelling.dwellingResponse.response` is `2`', () => {
        beforeEach(() => {
            props.dwelling.dwellingResponse.response = 2;
        });

        it('should display `Observaciones de la vivienda (OV)`', () => {
            const {container} = getComponent();
            expect(
                getByText(container, 'Observaciones de la vivienda (OV)')
            ).toBeTruthy();
        });
    });

    describe('when `props.dwelling.households` is defined', () => {
        beforeEach(() => {
            props.dwelling.households = [
                {
                    id: 1
                }
            ];
        });

        it('should display `Hogar` and the household`s id', () => {
            const {container} = getComponent();
            props.dwelling.households.forEach(household => {
                expect(getByText(container, `Hogar ${household.id}`));
            });
        });
    });
});
