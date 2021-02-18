import {getByText, getByTestId} from '@testing-library/react';

import Users from './Users';

const mockStore = configureStore({});

describe('<Users>', () => {
    let props;
    const getComponent = () => render(Users, props, {
        router: {initialEntries: ['/']},
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
            },
            session: {
                user: {
                    id: 1,
                    roles: ['cn']
                },
                roles: ['cn']
            },
            user: {
                users: [],
                total: 0
            }
        })
    });
    beforeEach(() => {
        props = {
            fetchUsersRequested: jest.fn()
        };
    });
    afterEach(tearDown);

    it('should display `Usuarios`', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Usuarios')).toBeInTheDocument();
    });

    it('should render an icon', () => {
        const {container} = getComponent();
        const icon = getByTestId(container, 'icon');
        expect(icon).toHaveClass('fa-users');
    });

    it('should render SearchParams component', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'user-search-params')).toBeInTheDocument();
    });

    it('should display `Nuevo` as label', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Nuevo')).toBeInTheDocument();
    });

    it('should have `primary` color the button to add user', () => {
        const {container} = getComponent();
        const button = getByTestId(container, 'new-button');
        expect(button).toHaveClass('btn-primary');
    });

    it('should display faUserPlus icon', () => {
        const {container} = getComponent();
        const icon = getByTestId(container, 'new-user-icon');
        expect(icon).toHaveClass('fa-user-plus');
    });

    it('should render UsersTable component', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'users-table'));
    });
});
