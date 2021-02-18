import {getByTestId, getByText} from '@testing-library/react';

import AddressData from './AddressData';

describe('<AddressData>', () => {
    let props;
    const getComponent = () => render(AddressData, props);
    beforeEach(() => {
        props = {
            address: {
                listNumber: 34,
                stateName: 'Buenos Aires',
                ups: 1,
                fraction: 1,
                radius: 1,
                block: 1,
                side: 1,
                area: 15,
                street: 'Street Name',
                cadastralNumber: 'Km. 47',
                floor: 'PB',
                room: 'A',
                pollster: {
                    name: 'Pollster Name',
                    surname: 'Pollster Surname'
                },
                teamLeader: {
                    name: 'Team Leader Name',
                    surname: 'Team Leader Surname'
                },
                supervisor: {
                    name: 'Supervisor Name',
                    surname: 'Supervisor Surname'
                },
                user: {
                    name: 'User Name',
                    surname: 'User Surname'
                },
                syncDate: '2020-09-25T07:48:30Z',
                statusName: 'En Gabinete',
                situationName: 'Cerrada'
            }
        };
    });

    it('should display many labels and values', () => {
        const {container} = getComponent();
        const ups = getByTestId(container, 'ups');
        const area = getByTestId(container, 'area');
        const fraction = getByTestId(container, 'fraction');
        const radius = getByTestId(container, 'radius');
        const block = getByTestId(container, 'block');
        const side = getByTestId(container, 'side');
        const street = getByTestId(container, 'street');
        const cadastralNumber = getByTestId(container, 'cadastral-number');
        const floor = getByTestId(container, 'floor');
        const room = getByTestId(container, 'room');
        const pollster = getByTestId(container, 'pollster');
        const teamLeader = getByTestId(container, 'team-leader');
        const supervisor = getByTestId(container, 'supervisor');
        const user = getByTestId(container, 'user');
        const syncDate = getByTestId(container, 'sync-date');
        const status = getByTestId(container, 'status');
        const situation = getByTestId(container, 'situation');

        expect(getByText(container, 'Nro. Listado')).toBeInTheDocument();
        expect(getByText(container, 'Jurisdicción:')).toBeInTheDocument();
        expect(getByText(container, 'UPS:')).toBeInTheDocument();
        expect(getByText(container, 'Área:')).toBeInTheDocument();
        expect(getByText(container, 'Fracción:')).toBeInTheDocument();
        expect(getByText(container, 'Radio:')).toBeInTheDocument();
        expect(getByText(container, 'Manzana:')).toBeInTheDocument();
        expect(getByText(container, 'Lado Manzana:')).toBeInTheDocument();
        expect(getByText(container, 'Dirección:')).toBeInTheDocument();
        expect(getByText(container, 'Número:')).toBeInTheDocument();
        expect(getByText(container, 'Piso:')).toBeInTheDocument();
        expect(getByText(container, 'Departamento:')).toBeInTheDocument();
        expect(getByText(container, 'Encuestador:')).toBeInTheDocument();
        expect(getByText(container, 'Jefe de equipo:')).toBeInTheDocument();
        expect(getByText(container, 'Supervisor:')).toBeInTheDocument();
        expect(getByText(container, 'Última sincronización:')).toBeInTheDocument();
        expect(getByText(container, 'Estado:')).toBeInTheDocument();
        expect(getByText(container, 'Situación:')).toBeInTheDocument();
        expect(getByText(container, 'Usuario:')).toBeInTheDocument();

        expect(getByText(container, `${props.address.listNumber}`)).toBeInTheDocument();
        expect(getByText(container, `${props.address.stateName}`)).toBeInTheDocument();
        expect(getByText(ups, `${props.address.ups}`)).toBeInTheDocument();
        expect(getByText(area, `${props.address.area}`)).toBeInTheDocument();
        expect(getByText(radius, `${props.address.radius}`)).toBeInTheDocument();
        expect(getByText(block, `${props.address.block}`)).toBeInTheDocument();
        expect(getByText(side, `${props.address.side}`)).toBeInTheDocument();
        expect(getByText(street, `${props.address.street}`)).toBeInTheDocument();
        expect(getByText(cadastralNumber, `${props.address.cadastralNumber}`)).toBeInTheDocument();
        expect(getByText(floor, `${props.address.floor}`)).toBeInTheDocument();
        expect(getByText(room, `${props.address.room}`)).toBeInTheDocument();
        expect(getByText(fraction, `${props.address.fraction}`)).toBeInTheDocument();
        expect(getByText(pollster, `${props.address.pollster.surname}, ${props.address.pollster.name}`)).toBeInTheDocument();
        expect(getByText(teamLeader, `${props.address.teamLeader.surname}, ${props.address.teamLeader.name}`)).toBeInTheDocument();
        expect(getByText(supervisor, `${props.address.supervisor.surname}, ${props.address.supervisor.name}`)).toBeInTheDocument();
        expect(getByText(user, `${props.address.user.surname}, ${props.address.user.name}`)).toBeInTheDocument();
        expect(getByText(syncDate, '25/09/2020 04:48:30')).toBeInTheDocument();
        expect(getByText(status, `${props.address.statusName}`)).toBeInTheDocument();
        expect(getByText(situation, `${props.address.situationName}`)).toBeInTheDocument();
    });
});
