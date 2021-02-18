import {
    fireEvent, getByText, getByTestId, getByDisplayValue
} from '@testing-library/react';
import configureStore from 'redux-mock-store';

import Editor from './Editor';

const mockStore = configureStore();

describe('<Editor>', () => {
    let props;
    const getComponent = () => render(Editor, props, {
        router: {initialEntries: ['/']},
        store: mockStore({
            staticData: {
                states: [
                    {
                        _id: 1,
                        name: 'Buenos Aires'
                    },
                    {
                        _id: 2,
                        name: 'Mendoza'
                    }
                ],
                roles: [
                    {
                        id: 'cn',
                        name: 'Coordinador Nacional'
                    },
                    {
                        id: 'cp',
                        name: 'Coordinador Provincial'
                    }
                ]
            }
        })
    });
    beforeEach(() => {
        props = {
            submit: jest.fn(),
            findUser: jest.fn(),
            resetUser: jest.fn()
        };
    });
    afterEach(tearDown);

    it('should render an input with `Nombre` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Nombre')).toBeInTheDocument();
    });

    it('should render an input with `Apellido` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Apellido')).toBeInTheDocument();
    });

    it('should render an input with `Email` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Email')).toBeInTheDocument();
    });

    it('should render an input with `Provincia` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Provincia')).toBeInTheDocument();
    });

    it('should render an input with `Documento` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Documento')).toBeInTheDocument();
    });

    it('should render an input with `Teléfono (con código de area)` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Teléfono (con código de area)', {exact: false})).toBeInTheDocument();
    });

    it('should render SaveButton component', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'save-button')).toBeInTheDocument();
    });

    it('should be disabled the save button by default', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'save-button')).toBeDisabled();
    });

    describe('when the user is provided', () => {
        beforeEach(() => {
            props.user = {
                name: 'name',
                surname: 'surname',
                email: 'test@test.com',
                documentId: 38618732,
                attributes: {
                    phone: '1132379821',
                    stateId: 2
                },
                roles: ['cn']
            };
        });

        it('should display `props.user.name`', () => {
            const {container} = getComponent();
            expect(getByDisplayValue(container, props.user.name)).toBeInTheDocument();
        });

        it('should display `props.user.surname`', () => {
            const {container} = getComponent();
            expect(getByDisplayValue(container, props.user.surname)).toBeInTheDocument();
        });

        it('should display `props.user.email`', () => {
            const {container} = getComponent();
            expect(getByDisplayValue(container, props.user.email)).toBeInTheDocument();
        });

        it('should display `props.user.attributes.phone`', () => {
            const {container} = getComponent();
            expect(getByDisplayValue(container, props.user.attributes.phone)).toBeInTheDocument();
        });

        it('should display `Mendoza` as state placeholder', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Mendoza')).toBeInTheDocument();
        });

        it('should display `props.user.documentId`', () => {
            const {container} = getComponent();
            expect(getByDisplayValue(container, `${props.user.documentId}`)).toBeInTheDocument();
        });

        it('should display `Coordinador Nacional` as role', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Coordinador Nacional')).toBeInTheDocument();
        });

        it('should be enabled submit button', () => {
            const {container} = getComponent();
            const button = getByTestId(container, 'save-button');
            expect(button).toBeEnabled();
        });

        describe.skip('when save button is clicked', () => {
            beforeEach(() => {
                const {container} = getComponent();
                const button = getByTestId(container, 'save-button');
                fireEvent.click(button);
            });

            it('should fire `props.submit`', () => {
                expect(props.submit).toHaveBeenCalledTimes(1);
            });
        });
    });
});
