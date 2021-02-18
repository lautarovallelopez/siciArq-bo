import {
    fireEvent, getByText, getByTestId, queryByText, queryByTestId
} from '@testing-library/react';

import roles from '@constants/roles';
import {situations} from '@constants';

import OverviewHeader from './OverviewHeader';

const mockStore = configureStore({});

describe('<OverviewHeader>', () => {
    let props;
    const getComponent = () => render(OverviewHeader, props, {
        router: {initialEntries: ['/review/276']},
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
            role: roles.POLLSTER,
            address: {
                id: 1,
                situation: situations.APPROVED,
                address: 4
            },
            approveSurvey: jest.fn(),
            finishSurvey: jest.fn(),
            reopenSurvey: jest.fn(),
            recoverSurvey: jest.fn()
        };
    });
    afterEach(tearDown);

    it('should render BackButton component with `Revisión` as title', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Revisión')).toBeInTheDocument();
    });

    describe('when current role and situation enables some operation', () => {
        beforeEach(() => {
            props.address.situation = situations.FINISHED_IN_FIELD;
            props.role = roles.NATIONAL_COORDINATOR;
        });

        it('should render a dropdown with operations', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'operations')).toBeInTheDocument();
        });

        describe('when more options button is clicked', () => {
            beforeEach(() => {
                props.role = roles.NATIONAL_COORDINATOR;
            });

            describe('when current role and situation enables `Aprobar`, `Reabrir` and `Supervisar`', () => {
                beforeEach(() => {
                    props.address.situation = situations.FINISHED_IN_OFFICE;
                    const {container} = getComponent();
                    const operations = getByTestId(container, 'operations');
                    fireEvent.keyDown(operations, {
                        key: 'ArrowDown',
                        keyCode: 40
                    });
                });

                it('should display many items in operations dropdown', () => {
                    const {container} = getComponent();
                    expect(getByText(container, 'Aprobar')).toBeInTheDocument();
                    expect(getByText(container, 'Reabrir')).toBeInTheDocument();
                    expect(getByText(container, 'Supervisar')).toBeInTheDocument();
                });

                describe('when `Aprobar` dropdown item is clicked', () => {
                    beforeEach(() => {
                        const {container} = getComponent();
                        const approveButton = getByTestId(container, 'option-1');
                        fireEvent.click(approveButton);
                    });

                    it('should fire `props.approveSurvey`', () => {
                        expect(props.approveSurvey).toHaveBeenCalledTimes(1);
                        expect(props.approveSurvey).toHaveBeenCalledWith(props.address.id, props.address.address);
                    });
                });

                describe('when `Reabrir` dropdown item is clicked', () => {
                    beforeEach(() => {
                        const {container} = getComponent();
                        const reopenButton = getByTestId(container, 'option-3');
                        fireEvent.click(reopenButton);
                    });

                    it('should fire `props.reopenSurvey`', () => {
                        expect(props.reopenSurvey).toHaveBeenCalledTimes(1);
                        expect(props.reopenSurvey).toHaveBeenCalledWith(props.address.id, props.address.address);
                    });
                });

                it('should not display some items in operations dropdown', () => {
                    const {container} = getComponent();
                    expect(queryByText(container, 'Finalizar')).toBeNull();
                    expect(queryByText(container, 'Reasignar')).toBeNull();
                    expect(queryByText(container, 'Recuperar')).toBeNull();
                });
            });

            describe('when current role and situation enables `Finalizar` and `Recuperar`', () => {
                beforeEach(() => {
                    props.address.situation = situations.FINISHED_IN_FIELD;
                    const {container} = getComponent();
                    const operations = getByTestId(container, 'operations');
                    fireEvent.keyDown(operations, {
                        key: 'ArrowDown',
                        keyCode: 40
                    });
                });

                it('should display many items in operations dropdown', () => {
                    const {container} = getComponent();
                    expect(getByText(container, 'Finalizar')).toBeInTheDocument();
                    expect(getByText(container, 'Recuperar')).toBeInTheDocument();
                    expect(getByText(container, 'Reabrir')).toBeInTheDocument();
                    expect(getByText(container, 'Supervisar')).toBeInTheDocument();
                });

                describe('when `Finalizar` dropdown item is clicked', () => {
                    beforeEach(() => {
                        const {container} = getComponent();
                        const finishButton = getByTestId(container, 'option-0');
                        fireEvent.click(finishButton);
                    });

                    it('should fire `props.finishSurvey`', () => {
                        expect(props.finishSurvey).toHaveBeenCalledTimes(1);
                        expect(props.finishSurvey).toHaveBeenCalledWith(props.address.id, props.address.address);
                    });
                });

                describe('when `Recuperar` dropdown item is clicked', () => {
                    beforeEach(() => {
                        const {container} = getComponent();
                        const recoverButton = getByTestId(container, 'option-4');
                        fireEvent.click(recoverButton);
                    });

                    it('should fire `props.recoverSurvey`', () => {
                        expect(props.recoverSurvey).toHaveBeenCalledTimes(1);
                        expect(props.recoverSurvey).toHaveBeenCalledWith(props.address.id, props.address.address);
                    });
                });

                it('should not display some items in operations dropdown', () => {
                    const {container} = getComponent();
                    expect(queryByText(container, 'Aprobar')).toBeNull();
                    expect(queryByText(container, 'Reasignar')).toBeNull();
                });
            });

            describe('when current role and situation enables `Reasignar`', () => {
                beforeEach(() => {
                    props.address.situation = situations.ON_SURVEYING;
                    const {container} = getComponent();
                    const operations = getByTestId(container, 'operations');
                    fireEvent.keyDown(operations, {
                        key: 'ArrowDown',
                        keyCode: 40
                    });
                });

                it('should display `Reasignar` item in operations dropdown', () => {
                    const {container} = getComponent();
                    expect(getByText(container, 'Reasignar')).toBeInTheDocument();
                });

                it('should not display some items in operations dropdown', () => {
                    const {container} = getComponent();
                    expect(queryByText(container, 'Aprobar')).toBeNull();
                    expect(queryByText(container, 'Finalizar')).toBeNull();
                    expect(queryByText(container, 'Recuperar')).toBeNull();
                    expect(queryByText(container, 'Reabrir')).toBeNull();
                    expect(queryByText(container, 'Supervisar')).toBeNull();
                });
            });
        });
    });

    describe('when current role and situation does not enable any operation', () => {
        beforeEach(() => {
            props.address.situation = situations.UNASSIGNED;
            props.role = roles.POLLSTER;
        });

        it('should not render a dropdown with operations', () => {
            const {container} = getComponent();
            expect(queryByTestId(container, 'operations')).toBeNull();
        });
    });
});
