import {getByTestId, getByText} from '@testing-library/react';

import ReviewTable from './ReviewTable';

describe('<ReviewTable>', () => {
    let props;
    const getComponent = () => render(ReviewTable, props, {router: {initialEntries: ['/']}});
    beforeEach(() => {
        props = {
            surveys: []
        };
    });
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
            expect(getByText(container, 'No se encontraron encuestas.')).toBeInTheDocument();
        });
    });

    describe('when `props.surveys` is defined', () => {
        beforeEach(() => {
            props.surveys = [{
                id: 1,
                ups: 1,
                area: 111,
                listNumber: 200,
                segment: 4,
                statusId: 4,
                statusName: 'En Gabinete',
                situationName: 'Aprobada',
                teamLeader: {
                    name: 'Team Leader First Name',
                    surname: 'Team Leader Last Name'
                },
                pollster: {
                    name: 'Pollster First Name',
                    surname: 'Pollster Last Name'
                },
                supervisor: {
                    name: 'Supervisor First Name',
                    surname: 'Supervisor Last Name'
                },
                user: 3,
                street: '6595-PJE  NECOL',
                cadastralNumber: 'S/N',
                floor: '',
                room: '',
                syncDate: '2020-09-25T07:48:30Z'
            }];
            props.loading = false;
            props.requested = true;
            props.searchParams = {
                state: 6
            };
        });

        it('should display many columns', () => {
            const {container} = getComponent();
            expect(getByText(container, 'UPS')).toBeInTheDocument();
            expect(getByText(container, 'Área')).toBeInTheDocument();
            expect(getByText(container, 'N° Listado')).toBeInTheDocument();
            expect(getByText(container, 'Domicilio')).toBeInTheDocument();
            expect(getByText(container, 'Jefe de equipo')).toBeInTheDocument();
            expect(getByText(container, 'Encuestador')).toBeInTheDocument();
            expect(getByText(container, 'Supervisor')).toBeInTheDocument();
            expect(getByText(container, 'Nº de Hogar')).toBeInTheDocument();
            expect(getByText(container, 'Respuesta del BH')).toBeInTheDocument();
            expect(getByText(container, 'Respuesta del BI')).toBeInTheDocument();
            expect(getByText(container, 'Estado')).toBeInTheDocument();
            expect(getByText(container, 'Situación')).toBeInTheDocument();
            expect(getByText(container, 'Resultado de última visita')).toBeInTheDocument();
            expect(getByText(container, 'Visualizar encuesta')).toBeInTheDocument();
            expect(getByText(container, 'Completitud')).toBeInTheDocument();
        });

        it('should display `props.surveys` values', () => {
            const {container} = getComponent();
            props.surveys.forEach((survey, index) => {
                const ups = getByTestId(container, `ups-${index}`);
                const area = getByTestId(container, `area-${index}`);
                const listNumber = getByTestId(container, `list-number-${index}`);
                const teamLeader = getByTestId(container, `team-leader-${index}`);
                const pollster = getByTestId(container, `pollster-${index}`);
                const supervisor = getByTestId(container, `supervisor-${index}`);
                const situation = getByTestId(container, `situation-${index}`);
                const status = getByTestId(container, `status-${index}`);
                const lastVisitResult = getByTestId(container, `last-visit-result-${index}`);

                expect(getByTestId(container, `address-${index}`)).toBeInTheDocument();
                expect(getByTestId(container, `household-number-${index}`)).toBeInTheDocument();
                expect(getByTestId(container, `houshold-block-answer-${index}`)).toBeInTheDocument();
                expect(getByTestId(container, `individual-block-answer-${index}`)).toBeInTheDocument();
                expect(getByTestId(container, `watching-action-${index}`)).toBeInTheDocument();
                expect(getByTestId(container, `fullness-${index}`)).toBeInTheDocument();
                expect(getByTestId(container, `survey-${index}-overview`)).toBeInTheDocument();

                expect(getByText(ups, `${survey.ups}`)).toBeInTheDocument();
                expect(getByText(area, `${survey.area}`)).toBeInTheDocument();
                expect(getByText(listNumber, `${survey.listNumber}`)).toBeInTheDocument();
                expect(getByText(situation, survey.situationName)).toBeInTheDocument();
                expect(getByText(status, survey.statusName)).toBeInTheDocument();
                expect(getByText(teamLeader, 'Team Leader Last Name, Team Leader First Name')).toBeInTheDocument();
                expect(getByText(pollster, 'Pollster Last Name, Pollster First Name')).toBeInTheDocument();
                expect(getByText(supervisor, 'Supervisor Last Name, Supervisor First Name')).toBeInTheDocument();
                expect(getByText(lastVisitResult, '25/09/2020 04:48:30')).toBeInTheDocument();
            });
        });

        it('should render Pagination component', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'pagination')).toBeInTheDocument();
        });
    });
});
