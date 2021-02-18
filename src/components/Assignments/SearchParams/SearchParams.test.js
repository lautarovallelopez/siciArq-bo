import {
    fireEvent,
    getByLabelText,
    getByTestId,
    getByText,
    queryByText,
    queryByLabelText,
    waitFor
} from '@testing-library/react';
import configureStore from 'redux-mock-store';

import assignmentTypes from '@constants/assignmentTypes';
import roles from '@constants/roles';

import SearchParams from './SearchParams';

const mockStore = configureStore({});

describe('<SearchParams>', () => {
    let props;
    const getComponent = () => render(SearchParams, props, {
        store: mockStore({
            staticData: {
                states: [
                    {
                        _id: '1',
                        name: 'Buenos Aires'
                    },
                    {
                        _id: '2',
                        name: 'Mendoza'
                    }
                ]
            }
        })
    });
    beforeEach(() => {
        props = {
            getAssignments: jest.fn(),
            setSearchParams: jest.fn(),
            updateAssignments: jest.fn(),
            openConfirmModal: jest.fn(),
            resetSearchParams: jest.fn(),
            assignmentsTypesOptions: [
                {
                    id: 1,
                    label: 'Area'
                },
                {
                    id: 2,
                    label: 'Segmento'
                },
                {
                    id: 3,
                    label: 'Vivienda'
                },
                {
                    id: 4,
                    label: 'Reasignación'
                },
                {
                    id: 5,
                    label: 'UPS/Subcoordinador'
                }
            ],
            role: roles.NATIONAL_COORDINATOR
        };
    });
    afterEach(tearDown);

    it('should render a dropdown with `Jurisdicción` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Jurisdicción')).toBeInTheDocument();
    });

    it('should render a dropdown with `Tipo de asignación` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Tipo de asignación')).toBeInTheDocument();
    });

    describe('when `Tipo de asignacion` dropdown is clicked', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const input = getByLabelText(container, 'assignmentType');
            fireEvent.keyDown(input, {
                key: 'ArrowDown',
                keyCode: 40
            });
        });

        it('should render `Area`, `Segmento`, `Vivienda` and `Reasignación` as options', () => {
            const {container} = getComponent();
            props.assignmentsTypesOptions.forEach(field => {
                expect(getByText(container, field.label)).toBeInTheDocument();
            });
        });

        describe('when an option in clicked', () => {
            beforeEach(async () => {
                const {container} = getComponent();
                await waitFor(() => getByText(container, 'Segmento'));
                fireEvent.click(getByText(container, 'Segmento'));
            });

            it('should fire `props.setSearchParams`', () => {
                expect(props.setSearchParams).toHaveBeenCalledTimes(1);
                expect(props.setSearchParams).toHaveBeenCalledWith(expect.any(Object));
            });
        });
    });

    it('should render a dropdown with `Ups` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Ups')).toBeInTheDocument();
    });

    describe('when `props.searchParams.assignmentType` is by `segment`', () => {
        beforeEach(() => {
            props.searchParams = {
                assignmentType: assignmentTypes.SEGMENT
            };
        });

        it('should render a dropdown with `Área` as label', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Área')).toBeInTheDocument();
        });

        it('should render SegmentDropdown', () => {
            const {container} = getComponent();
            expect(getByLabelText(container, 'segment')).toBeInTheDocument();
        });
    });

    describe('when `props.searchParams.assignmentType` is by `address`', () => {
        beforeEach(() => {
            props.searchParams = {
                assignmentType: assignmentTypes.ADDRESS
            };
        });

        it('should render a dropdown with `Área` as label', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Área')).toBeInTheDocument();
        });

        it('should render SegmentDropdown', () => {
            const {container} = getComponent();
            expect(getByLabelText(container, 'segment')).toBeInTheDocument();
        });
    });

    describe('when `props.searchParams.assignmentType` is by `reassignment`', () => {
        beforeEach(() => {
            props.searchParams = {
                assignmentType: assignmentTypes.REASSIGNMENT
            };
        });

        it('should render a dropdown with `Área` as label', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Área')).toBeInTheDocument();
        });

        it('should render SegmentDropdown', () => {
            const {container} = getComponent();
            expect(getByLabelText(container, 'segment')).toBeInTheDocument();
        });
    });

    describe('when `props.searchParams.assignmentType` is by `ups`', () => {
        beforeEach(() => {
            props.searchParams = {
                assignmentType: assignmentTypes.UPS
            };
        });

        it('should not render a dropdown with `Área` as label', () => {
            const {container} = getComponent();
            expect(queryByText(container, 'Área')).toBeNull();
        });
    });

    describe('when `props.searchParams.assignmentType` is by `area`', () => {
        beforeEach(() => {
            props.searchParams = {
                assignmentType: assignmentTypes.AREA
            };
        });

        it('should render a dropdown with `Área` as label', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Área')).toBeInTheDocument();
        });

        it('should not render SegmentDropdown', () => {
            const {container} = getComponent();
            expect(queryByLabelText(container, 'segment')).toBeNull();
        });
    });

    it('should render a SaveButton component', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'save-button')).toBeInTheDocument();
    });

    it('should be disabled SaveButton component', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'save-button')).toBeDisabled();
    });

    describe('when `props.assignments` is defined and has assignment with `toAssign` in `true`', () => {
        beforeEach(() => {
            props.assignments = [
                {
                    toAssign: true
                }
            ];
        });

        it('should be enabled SaveButton', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'save-button')).toBeEnabled();
        });

        describe('when SaveButton is clicked', () => {
            beforeEach(() => {
                const {container} = getComponent();
                const button = getByTestId(container, 'save-button');
                fireEvent.click(button);
            });

            it('should fire `props.openConfirmModal`', () => {
                expect(props.openConfirmModal).toHaveBeenCalledTimes(1);
                expect(props.openConfirmModal).toHaveBeenCalledWith(expect.any(Object));
            });
        });
    });

    it('should not render a button with `Buscar` as label', () => {
        const {container} = getComponent();
        expect(queryByText(container, 'Buscar')).toBeNull();
    });
});
