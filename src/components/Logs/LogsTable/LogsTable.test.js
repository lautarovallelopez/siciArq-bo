import {getByTestId, getByText} from '@testing-library/react';

import LogsTable from './LogsTable';

describe('<LogsTable>', () => {
    const props = {};
    const getComponent = () => render(LogsTable, props);
    afterEach(tearDown);

    describe('when `props.loading` and `props.requested` are `true`', () => {
        beforeEach(() => {
            props.loading = true;
            props.requested = true;
        });

        it('should render a spinner', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'spinner-icon')).toBeInTheDocument();
        });
    });

    describe('when `props.count` is zero and `props.requested` is `true`', () => {
        beforeEach(() => {
            props.count = 0;
            props.loading = false;
            props.requested = true;
            props.searchParams = {
                state: 6
            };
        });

        it('should display a message', () => {
            const {container} = getComponent();
            expect(getByText(container, 'No se encontraron sincronizaciones para los filtros solicitados.')).toBeInTheDocument();
        });
    });

    describe('when `props.logs` is defined', () => {
        beforeEach(() => {
            props.logs = [{
                id: 1,
                user: {
                    id: 3,
                    name: 'user b',
                    surname: 'test'
                },
                loginDate: '2020-08-22T07:48:30Z',
                syncDate: '2020-08-22T07:48:30Z',
                version: '1.0.0'
            }];
            props.users = [
                {
                    id: 2,
                    name: 'user a',
                    surname: 'test'
                },
                {
                    id: 3,
                    name: 'user b',
                    surname: 'test'
                }
            ];
            props.loading = false;
            props.requested = true;
            props.count = 1;
            props.searchParams = {
                state: 6
            };
        });

        it('should display many columns', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Usuario')).toBeInTheDocument();
            expect(getByText(container, 'Último login')).toBeInTheDocument();
            expect(getByText(container, 'Fecha de sincronizacion')).toBeInTheDocument();
            expect(getByText(container, 'Versión App')).toBeInTheDocument();
        });

        it('should display `props.logs` values', () => {
            const {container} = getComponent();
            props.logs.forEach((log, index) => {
                const user = getByTestId(container, `user-${index}`);
                const loginDate = getByTestId(container, `login-date-${index}`);
                const syncDate = getByTestId(container, `sync-date-${index}`);
                const version = getByTestId(container, `version-${index}`);

                expect(getByText(user, `${log.user.surname}, ${log.user.name}`)).toBeInTheDocument();
                expect(getByText(loginDate, '22/08/2020 04:48:30')).toBeInTheDocument();
                expect(getByText(syncDate, '22/08/2020 04:48:30')).toBeInTheDocument();
                expect(getByText(version, `${log.version}`)).toBeInTheDocument();
            });
        });

        it('should render Pagination component', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'pagination')).toBeInTheDocument();
        });
    });
});
