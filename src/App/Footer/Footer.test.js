import {getByTestId, getByText} from '@testing-library/react';

import packageJson from '@root/package.json';

import Footer from './Footer';

describe('<Footer>', () => {
    let props;
    const getComponent = () => render(Footer, props);
    beforeEach(() => {
        props = {};
    });
    afterEach(tearDown);

    it('should display `ENUT`', () => {
        const {container} = getComponent();
        const app = getByTestId(container, 'appName');
        expect(getByText(app, 'ENUT')).toBeInTheDocument();
    });

    it('should display `Version`', () => {
        const {container} = getComponent();
        const versionLabel = getByTestId(container, 'versionLabel');
        expect(getByText(versionLabel, 'Version')).toBeInTheDocument();
    });

    it('should display the version number', () => {
        const {container} = getComponent();
        const versionNumber = getByTestId(container, 'versionNumber');
        expect(getByText(versionNumber, packageJson.version)).toBeInTheDocument();
    });

    it('should display `Mesa de Servicios`', () => {
        const {container} = getComponent();
        const helpDesk = getByTestId(container, 'helpDesk');
        expect(getByText(helpDesk, 'Mesa de Servicios')).toBeInTheDocument();
    });

    it('should display `De Lunes a Viernes Hábiles (011) 5031 4630`', () => {
        const {container} = getComponent();
        const helpDesk = getByTestId(container, 'attentionSchedule');
        expect(getByText(helpDesk, 'De Lunes a Viernes Hábiles (011) 5031 4630')).toBeInTheDocument();
    });

    describe('when `props.user` is defined', () => {
        beforeEach(() => {
            props.user = {
                id: '1',
                surname: 'test surname',
                name: 'test name'
            };
        });

        it('should display `props.user.surname`', () => {
            const {container} = getComponent();
            const surname = getByTestId(container, 'surname');
            expect(getByText(surname, props.user.surname)).toBeInTheDocument();
        });

        it('should display `props.user.name`', () => {
            const {container} = getComponent();
            const surname = getByTestId(container, 'name');
            expect(getByText(surname, props.user.name)).toBeInTheDocument();
        });

        describe('when `props.role` is defined', () => {
            beforeEach(() => {
                props.role = 'Coordinador Nacional';
            });

            it('should display `props.role.name`', () => {
                const {container} = getComponent();
                const role = getByTestId(container, 'role');
                expect(getByText(role, props.role)).toBeInTheDocument();
            });
        });
    });
});
