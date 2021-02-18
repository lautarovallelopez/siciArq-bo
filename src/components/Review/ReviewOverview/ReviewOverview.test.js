import {getByTestId, queryByTestId} from '@testing-library/react';

import ReviewOverview from './ReviewOverview';

const mockStore = configureStore({});

describe('ReviewOverview', () => {
    let props;
    const getComponent = () => render(ReviewOverview, props, {
        router: {initialEntries: ['/review/2']},
        store: mockStore({
            review: {
                getSurvey: {
                    survey: {}
                }
            },
            session: {
                user: {}
            }
        })
    });

    beforeEach(() => {
        props = {
            getAddress: jest.fn(),
            getSurvey: jest.fn()
        };
    });
    afterEach(tearDown);

    describe('when `props.loading` and `props.requested` are `true`', () => {
        beforeEach(() => {
            props.loading = true;
            props.requested = true;
        });

        it('should render a spinner', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'spinner-icon'))
                .toBeInTheDocument();
        });
    });

    describe('when `props.loading` or `props.requested` are `false`', () => {
        beforeEach(() => {
            props.loading = true;
            props.requested = false;
        });

        it('should not render a spinner', () => {
            const {container} = getComponent();
            expect(queryByTestId(container, 'spinner-icon'))
                .toBeNull();
        });

        describe('when `props.address` is defined', () => {
            beforeEach(() => {
                props.address = {
                    id: 1
                };
            });

            it('should render OverviewHeader component', () => {
                const {container} = getComponent();
                expect(getByTestId(container, 'overview-header'))
                    .toBeInTheDocument();
            });
        });
    });
});
