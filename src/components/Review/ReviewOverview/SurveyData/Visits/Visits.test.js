import {getByTestId, getByText} from '@testing-library/react';

import Visits from './Visits';

const date = new Date('2020-01-01');
date.setHours(0, 0, 0, 0);

describe('<Visits>', () => {
    let props;
    const getComponent = () => render(Visits, props);
    beforeEach(() => {
        props = {
            roles: [
                {
                    id: 'tl',
                    name: 'Jefe de equipo'
                }
            ],
            householdId: 1,
            visits: [
                {
                    id: 'gfgdsdf',
                    entity: 'dwelling',
                    startDate: date,
                    endDate: date,
                    response: 1,
                    user: {
                        name: 'user name',
                        surname: 'surname',
                        roles: ['tl']
                    },
                    observations: 'first comment',
                    dwellingVisit: 1
                },
                {
                    id: 'asdasd',
                    entity: 'household',
                    startDate: date,
                    endDate: date,
                    response: 1,
                    user: {
                        name: 'user name',
                        surname: 'surname',
                        roles: ['tl']
                    },
                    comments: 'second comment',
                    dwellingVisit: 1
                },
                {
                    id: 'asdfasdf',
                    entity: 'member',
                    startDate: date,
                    endDate: date,
                    response: 2,
                    user: {
                        name: 'user name',
                        surname: 'surname',
                        roles: ['tl']
                    },
                    comments: 'third comment',
                    dwellingVisit: 1
                }
            ]
        };
    });
    afterEach(tearDown);

    it('should display `Visitas`', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Visitas')).toBeInTheDocument();
    });

    it('should display many columns', () => {
        const {container} = getComponent();
        expect(
            getByText(container, 'N° de visita')
        )
            .toBeInTheDocument();
        expect(
            getByText(container, 'N° de visita por bloque')
        )
            .toBeInTheDocument();
        expect(
            getByText(container, 'Bloque')
        )
            .toBeInTheDocument();
        expect(
            getByText(container, 'Fecha de inicio')
        )
            .toBeInTheDocument();
        expect(
            getByText(container, 'Fecha de fin')
        )
            .toBeInTheDocument();
        expect(
            getByText(container, 'Estado de la respuesta')
        )
            .toBeInTheDocument();
        expect(
            getByText(container, 'Usuario')
        )
            .toBeInTheDocument();
        expect(
            getByText(container, 'Rol')
        )
            .toBeInTheDocument();
        expect(
            getByText(container, 'Comentario')
        )
            .toBeInTheDocument();
    });

    it('should display many rows', () => {
        const {container} = getComponent();
        props.visits.forEach((visit, index) => {
            const dwellingVisit = getByTestId(container, `dwelling-visit-${index}`);
            const visitNumber = getByTestId(container, `visit-number-${index}`);
            const entity = getByTestId(container, `entity-${index}`);
            const startDate = getByTestId(container, `start-date-${index}`);
            const endDate = getByTestId(container, `end-date-${index}`);
            const response = getByTestId(container, `response-${index}`);
            const user = getByTestId(container, `user-${index}`);
            const role = getByTestId(container, `role-${index}`);
            const comments = getByTestId(container, `comments-${index}`);

            expect(getByText(dwellingVisit, `${visit.dwellingVisit}`)).toBeInTheDocument();
            expect(getByText(visitNumber, `${index + 1}`)).toBeInTheDocument();
            if (visit.entity === 'dwelling') {
                expect(getByText(entity, 'Vivienda')).toBeInTheDocument();
            }
            if (visit.entity === 'household') {
                expect(getByText(entity, 'Hogar')).toBeInTheDocument();
            }
            if (visit.entity === 'member') {
                expect(getByText(entity, 'Individuo')).toBeInTheDocument();
            }
            expect(getByText(startDate, '31/12/2019 00:00:00')).toBeInTheDocument();
            expect(getByText(endDate, '31/12/2019 00:00:00')).toBeInTheDocument();
            expect(getByText(response, visit.response === 1 ? 'Sí' : 'No')).toBeInTheDocument();
            expect(getByText(user, 'surname, user name')).toBeInTheDocument();
            expect(getByText(role, 'Jefe de equipo')).toBeInTheDocument();
            if (visit.entity === 'household' || visit.entity === 'member') {
                expect(getByText(comments, visit.comments)).toBeInTheDocument();
            } else {
                expect(getByText(comments, visit.observations)).toBeInTheDocument();
            }
        });
    });
});
