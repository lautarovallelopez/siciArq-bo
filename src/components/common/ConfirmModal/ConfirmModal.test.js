import React from 'react';
import {fireEvent, getByTestId, getByText} from '@testing-library/react';
import configureStore from 'redux-mock-store';

import ConfirmModal from './ConfirmModal';

const mockStore = configureStore({});

describe('<ConfirmModal>', () => {
    let props;
    const getComponent = () => render(ConfirmModal, props, {
        store: mockStore({
            common: {
                confirmModal: {
                    isOpen: true,
                    context: {
                        title: 'Confirmación de asignación',
                        message: 'Tiene 1 asignación pendiente'
                    }
                }
            }
        })
    });
    beforeEach(() => {
        props = {
            context: {
                title: 'Confirmación de asignación',
                message: 'Tiene 1 asignación pendiente'
            },
            isOpen: true,
            closeModal: jest.fn()
        };
    });
    afterEach(tearDown);

    it('should display `props.context.title`', () => {
        const {baseElement} = getComponent();
        expect(getByText(baseElement, props.context.title)).toBeInTheDocument();
    });

    it('should display `props.context.message`', () => {
        const {baseElement} = getComponent();
        expect(getByText(baseElement, props.context.message)).toBeInTheDocument();
    });

    it('should render a button with `Cancelar` as label', () => {
        const {baseElement} = getComponent();
        expect(getByText(baseElement, 'Cancelar')).toBeInTheDocument();
    });

    describe('when `props.context.children` is defined', () => {
        beforeEach(() => {
            props.context.children = <h2>Children Component</h2>;
        });

        it('should render `props.context.children`', () => {
            const {baseElement} = getComponent();
            expect(getByText(baseElement, 'Children Component')).toBeInTheDocument();
        });
    });

    describe('when `Cancelar` button is clicked', () => {
        beforeEach(() => {
            const {baseElement} = getComponent();
            const cancelButton = getByTestId(baseElement, 'cancel-button');
            fireEvent.click(cancelButton);
        });

        it('should fire `props.closeModal`', () => {
            expect(props.closeModal).toHaveBeenCalledTimes(1);
        });
    });

    describe('when `props.context.onAccept` is defined', () => {
        beforeEach(() => {
            props.context.onAccept = jest.fn();
        });

        it('should render a button with `Confirmar` as label', () => {
            const {baseElement} = getComponent();
            expect(getByText(baseElement, 'Confirmar')).toBeInTheDocument();
        });

        describe('when `Confirmar` button is clicked', () => {
            beforeEach(() => {
                const {baseElement} = getComponent();
                const confirmButton = getByTestId(baseElement, 'confirm-button');
                fireEvent.click(confirmButton);
            });

            it('should fire `props.context.onAccept`', () => {
                expect(props.context.onAccept).toHaveBeenCalledTimes(1);
            });
        });
    });
});
