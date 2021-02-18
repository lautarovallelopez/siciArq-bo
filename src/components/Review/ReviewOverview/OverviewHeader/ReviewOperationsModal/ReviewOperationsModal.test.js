import {
    fireEvent, getByLabelText, getByTestId, getByText
} from '@testing-library/react';

import ReviewOperationsModal from './ReviewOperationsModal';

describe('<ReviewOperationsModal>', () => {
    let props;
    const getComponent = () => render(ReviewOperationsModal, props);
    beforeEach(() => {
        props = {
            context: {
                isOpen: true,
                onClose: jest.fn(),
                title: 'Reasignar',
                user: null,
                surveyId: 1,
                addressId: 3
            },
            reassignSurvey: jest.fn(),
            superviseSurvey: jest.fn(),
            fetchUsers: jest.fn()
        };
    });
    afterEach(tearDown);

    it('should display a title', () => {
        const {baseElement} = getComponent();
        expect(getByText(baseElement, 'Reasignar encuesta')).toBeInTheDocument();
    });

    it('should render a button with a label', () => {
        const {baseElement} = getComponent();
        expect(getByText(baseElement, 'Reasignar')).toBeInTheDocument();
        expect(getByText(baseElement, 'Reasignar')).toBeDisabled();
    });

    describe('when `props.usersList.users` is empty', () => {
        beforeEach(() => {
            props.usersList = {
                users: [],
                count: 0
            };
        });

        it('should display a label noticing there is not users available', () => {
            const {baseElement} = getComponent();
            expect(getByText(baseElement, 'No hay usuarios disponibles para asignar.')).toBeInTheDocument();
        });
    });

    describe('when `props.usersList.users` is not empty', () => {
        beforeEach(() => {
            props.context.user = null;
            props.users = [{
                id: 'ffffffff-ffff-ffff-ffff-ffffffffffff',
                label: 'Asignarme a mí - Jefe de Equipo',
                name: 'firstName2',
                surname: 'lastName2',
                role: 'Jefe de Equipo',
                isSessionUser: true
            }, {
                id: '00000000-0000-0000-0000-000000000000',
                label: 'lastName1, firstName1 - Encuestador',
                name: 'firstName1',
                surname: 'lastName1',
                role: 'Encuestador'
            }, {
                id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
                label: 'lastName3, firstName3 - Jefe de Equipo',
                name: 'firstName3',
                surname: 'lastName3',
                role: 'Jefe de Equipo'
            }];
        });

        it('should render a dropdown with `Usuario a asignar` as label', () => {
            const {baseElement} = getComponent();
            expect(getByText(baseElement, 'Usuario a asignar')).toBeInTheDocument();
        });

        describe('when dropdown `Usuario a asignar` is clicked', () => {
            beforeEach(() => {
                const {baseElement} = getComponent();
                const usersDropdown = getByLabelText(baseElement, 'user');
                fireEvent.keyDown(usersDropdown, {
                    key: 'ArrowDown',
                    keyCode: 40
                });
            });

            it('should display the list of users', () => {
                const {baseElement} = getComponent();
                expect(getByText(baseElement, 'Asignarme a mí - Jefe de Equipo')).toBeInTheDocument();
                expect(getByText(baseElement, 'lastName1, firstName1 - Encuestador')).toBeInTheDocument();
                expect(getByText(baseElement, 'lastName3, firstName3 - Jefe de Equipo')).toBeInTheDocument();
            });

            describe('when `props.context.title` is `Reasignar`', () => {
                beforeEach(() => {
                    props.context.title = 'Reasignar';
                });

                describe('when an user is clicked', () => {
                    beforeEach(() => {
                        const {baseElement} = getComponent();
                        const selectedUser = getByText(baseElement, 'lastName1, firstName1 - Encuestador');
                        fireEvent.click(selectedUser);
                    });

                    it('should enable accept button', () => {
                        const {baseElement} = getComponent();
                        expect(getByText(baseElement, 'Reasignar')).toBeEnabled();
                    });

                    describe('when accept button is clicked', () => {
                        beforeEach(() => {
                            const {baseElement} = getComponent();
                            const reassignButton = getByTestId(baseElement, 'accept-button');
                            fireEvent.click(reassignButton);
                        });

                        it('should fire `props.reassignSurvey` and  `props.closeModal`', () => {
                            const user = '00000000-0000-0000-0000-000000000000';

                            expect(props.reassignSurvey).toHaveBeenCalledTimes(1);
                            expect(props.reassignSurvey).toHaveBeenCalledWith(props.context.surveyId, props.context.addressId, user);
                            expect(props.context.onClose).toHaveBeenCalledTimes(1);
                        });
                    });
                });
            });

            describe('when `props.context.title` is `Supervisar`', () => {
                beforeEach(() => {
                    props.context.title = 'Supervisar';
                });

                describe('when an user is clicked', () => {
                    beforeEach(() => {
                        const {baseElement} = getComponent();
                        const selectedUser = getByText(baseElement, 'lastName1, firstName1 - Encuestador');
                        fireEvent.click(selectedUser);
                    });

                    it('should enable accept button', () => {
                        const {baseElement} = getComponent();
                        expect(getByText(baseElement, 'Supervisar')).toBeEnabled();
                    });

                    describe('when accept button is clicked', () => {
                        beforeEach(() => {
                            const {baseElement} = getComponent();
                            const acceptButton = getByTestId(baseElement, 'accept-button');
                            fireEvent.click(acceptButton);
                        });

                        it('should fire `props.superviseSurvey` and  `props.closeModal`', () => {
                            const user = '00000000-0000-0000-0000-000000000000';

                            expect(props.superviseSurvey).toHaveBeenCalledTimes(1);
                            expect(props.superviseSurvey).toHaveBeenCalledWith(props.context.surveyId, props.context.addressId, user);
                            expect(props.context.onClose).toHaveBeenCalledTimes(1);
                        });
                    });
                });
            });
        });
    });

    it('should render a button with `Cancelar` as label', () => {
        const {baseElement} = getComponent();
        expect(getByText(baseElement, 'Cancelar')).toBeInTheDocument();
    });

    describe('when `Cancelar` button is clicked', () => {
        beforeEach(() => {
            const {baseElement} = getComponent();
            const cancelButton = getByTestId(baseElement, 'cancel-button');
            fireEvent.click(cancelButton);
        });

        it('should fire `props.closeModal`', () => {
            expect(props.context.onClose).toHaveBeenCalledTimes(1);
        });
    });
});
