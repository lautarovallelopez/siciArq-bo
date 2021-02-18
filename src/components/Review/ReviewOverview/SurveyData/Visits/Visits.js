import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

import visitPropTypes from '@util/propTypes/visit';

import {
    getFullName, StyledUncontrolledCollapse, getDateOrSD, getRoleName
} from '@util/ui';

import {answers, entities} from '@constants/review';

import {StyledEntityCardTitle, TitleContainer} from '../styled';

const entity = {
    [entities.DWELLING]: 'Vivienda',
    [entities.HOUSEHOLD]: 'Hogar',
    [entities.MEMBER]: 'Individuo'
};

const Visits = ({visits, roles, householdId}) => (
    <>
        <StyledEntityCardTitle id={`visits-${householdId}`} marginTop="15px">
            <TitleContainer>
                <div>
                    Visitas
                </div>
                <div>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
            </TitleContainer>
        </StyledEntityCardTitle>
        <StyledUncontrolledCollapse toggler={`#visits-${householdId}`}>
            <Table response striped>
                <thead>
                    <tr>
                        <th>N° de visita</th>
                        <th>N° de visita por bloque</th>
                        <th>Bloque</th>
                        <th>Fecha de inicio</th>
                        <th>Fecha de fin</th>
                        <th>Estado de la respuesta</th>
                        <th>Usuario</th>
                        <th>Rol</th>
                        <th>Comentario</th>
                    </tr>
                </thead>
                <tbody>
                    {visits.map((visit, index) => (
                        <tr key={visit.id}>
                            <td data-testid={`dwelling-visit-${index}`} className="text-center">{visit.dwellingVisit}</td>
                            <td data-testid={`visit-number-${index}`} className="text-center">{index + 1}</td>
                            <td data-testid={`entity-${index}`} className="text-center">{entity[visit.entity]}</td>
                            <td data-testid={`start-date-${index}`} className="text-center">{getDateOrSD(visit.startDate)}</td>
                            <td data-testid={`end-date-${index}`} className="text-center">{getDateOrSD(visit.endDate)}</td>
                            <td data-testid={`response-${index}`} className="text-center">
                                {visit.response === answers.YES ? 'Sí' : 'No'}
                            </td>
                            <td data-testid={`user-${index}`} className="text-center">
                                {getFullName(visit.user)}
                            </td>
                            <td data-testid={`role-${index}`} className="text-center">{getRoleName(visit.user, roles)}</td>
                            <td data-testid={`comments-${index}`} className="text-center">
                                {[entities.MEMBER, entities.HOUSEHOLD].includes(visit.entity) ? visit.comments : visit.observations}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </StyledUncontrolledCollapse>
    </>
);

Visits.propTypes = {
    householdId: PropTypes.number.isRequired,
    visits: PropTypes.arrayOf(visitPropTypes).isRequired,
    roles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    )
};

Visits.defaultProps = {
    roles: []
};

export default Visits;
