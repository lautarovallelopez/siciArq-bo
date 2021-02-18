import {getByTestId, getByText} from '@testing-library/react';

import Credential from './Credential';

describe('<Credential>', () => {
    let props;
    const getComponent = () => render(Credential, props, {router: {initialEntries: ['/']}});
    beforeEach(() => {
        props = {
            getUser: jest.fn()
        };
    });
    afterEach(tearDown);

    describe('when `props.loading` is `true`', () => {
        beforeEach(() => {
            props.loading = true;
        });

        it('should render a spinner', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'spinner-icon')).toBeInTheDocument();
        });
    });

    describe('when `props.user.role` is undefined', () => {
        beforeEach(() => {
            props.loading = true;
            props.user = {
                role: undefined
            };
        });

        it('should render a spinner', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'spinner-icon')).toBeInTheDocument();
        });
    });

    describe.skip('when `props.loading` is `false`', () => {
        beforeEach(() => {
            props.loading = false;
            props.user = {
                name: 'name A',
                surname: 'surname A',
                documentId: 38618732,
                role: 'Coordinador Nacional (SL)'
            };
        });

        it('should display `props.user.name`', () => {
            const {container} = getComponent();
            expect(getByText(container, props.user.name)).toBeInTheDocument();
        });

        it('should display `props.user.surname`', () => {
            const {container} = getComponent();
            expect(getByText(container, `${props.user.surname},`)).toBeInTheDocument();
        });

        it('should display `props.user.role`', () => {
            const {container} = getComponent();
            expect(getByText(container, props.user.role)).toBeInTheDocument();
        });

        it('should display `props.user.documentId`', () => {
            const {container} = getComponent();
            expect(getByText(container, `DNI: ${props.user.documentId}`)).toBeInTheDocument();
        });
    });
});
