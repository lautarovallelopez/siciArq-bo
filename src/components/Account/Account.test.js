import {getByText, queryByAttribute, queryByText} from '@testing-library/react';

import {User} from '@model';

import Account from './Account';

const getByName = queryByAttribute.bind(null, 'name');

describe('<Account>', () => {
    let props;
    const getComponent = () => render(Account, props);
    beforeEach(() => {
        props = {
            user: new User(),
            states: [
                {
                    _id: 1,
                    name: 'Mendoza'
                }
            ],
            roles: [
                {
                    id: 'adm',
                    name: 'Admin'
                }
            ]
        };
    });
    afterEach(tearDown);

    it('should render `Mi Perfil` title', () => {
        const {container} = getComponent();
        getByText(container, 'Mi Perfil');
    });

    it('should render an input with `Usuario` as label', () => {
        const {container} = getComponent();
        getByText(container, 'Usuario');
    });

    it('should be disabled the username input', () => {
        const {container} = getComponent();
        const username = getByName(container, 'username');
        expect(username).toBeDisabled();
    });

    describe('when `props.user.username` is defined', () => {
        beforeEach(() => {
            props.user.username = 'usernameTest';
        });

        it('should display `usernameTest`', () => {
            const {container} = getComponent();
            const username = getByName(container, 'username');
            expect(username).toHaveAttribute('value', 'usernameTest');
        });
    });

    it('should render an input with `E-mail` as label', () => {
        const {container} = getComponent();
        getByText(container, 'E-mail');
    });

    it('should be disabled the email input', () => {
        const {container} = getComponent();
        const email = getByName(container, 'email');
        expect(email).toBeDisabled();
    });

    describe('when `props.user.email` is defined', () => {
        beforeEach(() => {
            props.user.email = 'emailTest';
        });

        it('should display `emailTest`', () => {
            const {container} = getComponent();
            const email = getByName(container, 'email');
            expect(email).toHaveAttribute('value', 'emailTest');
        });
    });

    it('should render an input with `Nombre` as label', () => {
        const {container} = getComponent();
        getByText(container, 'Nombre');
    });

    it('should be disabled the name input', () => {
        const {container} = getComponent();
        const name = getByName(container, 'name');
        expect(name).toBeDisabled();
    });

    describe('when `props.user.name` is defined', () => {
        beforeEach(() => {
            props.user.name = 'nameTest';
        });

        it('should display `nameTest`', () => {
            const {container} = getComponent();
            const name = getByName(container, 'name');
            expect(name).toHaveAttribute('value', 'nameTest');
        });
    });

    it('should render an input with `Apellido` as label', () => {
        const {container} = getComponent();
        getByText(container, 'Apellido');
    });

    it('should be disabled the surname input', () => {
        const {container} = getComponent();
        const surname = getByName(container, 'surname');
        expect(surname).toBeDisabled();
    });

    describe('when `props.user.surname` is defined', () => {
        beforeEach(() => {
            props.user.surname = 'surnameTest';
        });

        it('should display `surnameTest', () => {
            const {container} = getComponent();
            const surname = getByName(container, 'surname');
            expect(surname).toHaveAttribute('value', 'surnameTest');
        });
    });

    it('should render an input with `Celular` as label', () => {
        const {container} = getComponent();
        getByText(container, 'Celular');
    });

    it('should be disabled the phone input', () => {
        const {container} = getComponent();
        const phone = getByName(container, 'phone');
        expect(phone).toBeDisabled();
    });

    describe('when `props.user.attributes.phone` is defined', () => {
        beforeEach(() => {
            props.user.attributes.phone = 'phoneTest';
        });

        it('should display `phoneTest`', () => {
            const {container} = getComponent();
            const phone = getByName(container, 'phone');
            expect(phone).toHaveAttribute('value', 'phoneTest');
        });
    });

    it('should render an input with `Documento` as label', () => {
        const {container} = getComponent();
        getByText(container, 'Documento');
    });

    it('should be disabled the documentId input', () => {
        const {container} = getComponent();
        const documentId = getByName(container, 'documentId');
        expect(documentId).toBeDisabled();
    });

    describe('when `props.user.documentId` is defined', () => {
        beforeEach(() => {
            props.user.documentId = 'documentIdTest';
        });

        it('should display `documentIdTest`', () => {
            const {container} = getComponent();
            const documentId = getByName(container, 'documentId');
            expect(documentId).toHaveAttribute('value', 'documentIdTest');
        });
    });

    it('should render an input with `Rol` as label', () => {
        const {container} = getComponent();
        getByText(container, 'Rol');
    });

    it('should be disabled the role input', () => {
        const {container} = getComponent();
        const role = getByName(container, 'role');
        expect(role).toBeDisabled();
    });

    describe('when `props.user.roles` is defined', () => {
        beforeEach(() => {
            props.user.roles = ['adm'];
        });

        it('should display `Admin`', () => {
            const {container} = getComponent();
            const role = getByName(container, 'role');
            expect(role).toHaveAttribute('value', 'Admin');
        });
    });

    it('should render an input with `Provincia` as label', () => {
        const {container} = getComponent();
        getByText(container, 'Provincia');
    });

    it('should be disabled the stateId input', () => {
        const {container} = getComponent();
        const stateId = getByName(container, 'stateId');
        expect(stateId).toBeDisabled();
    });

    describe('when `props.user.attributes.stateId` is defined', () => {
        beforeEach(() => {
            props.user.attributes.stateId = 1;
        });

        it('should display `Mendoza`', () => {
            const {container} = getComponent();
            const stateId = getByName(container, 'stateId');
            expect(stateId).toHaveAttribute('value', 'Mendoza');
        });
    });

    it('should not render an input with `Departamento` as label', () => {
        const {container} = getComponent();
        expect(queryByText(container, 'Departamento')).toBeNull();
    });

    it('should not render an input with `Fracción` as label', () => {
        const {container} = getComponent();
        expect(queryByText(container, 'Fracción')).toBeNull();
    });

    it('should not render an input with `Radio` as label', () => {
        const {container} = getComponent();
        expect(queryByText(container, 'Radio')).toBeNull();
    });

    it('should not render an input with `Segmento` as label', () => {
        const {container} = getComponent();
        expect(queryByText(container, 'Segmento')).toBeNull();
    });
});
