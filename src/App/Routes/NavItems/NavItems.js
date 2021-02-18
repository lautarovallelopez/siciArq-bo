import React from 'react';
import PropTypes from 'prop-types';
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faUsers, faListAlt, faChartPie, faClipboardCheck, faLink, faChartLine
} from '@fortawesome/free-solid-svg-icons';

import routes from '@constants/routes';
import roles from '@constants/roles';

const NavItems = ({
    redirect, userRoles: [role]
}) => (
    <Nav className="mr-auto" navbar>
        {[roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR].includes(role) && (
            <NavItem>
                <NavLink onClick={() => redirect(routes.USERS)} data-testid="users">
                    <FontAwesomeIcon icon={faUsers}/>
                        &nbsp;Usuarios
                </NavLink>
            </NavItem>
        )}
        {[roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR].includes(role) && (
            <NavItem>
                <NavLink onClick={() => redirect(routes.ASSIGNMENTS)} data-testid="assignments">
                    <FontAwesomeIcon icon={faListAlt}/>
                        &nbsp;Asignaciones
                </NavLink>
            </NavItem>
        )}
        {[roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR].includes(role) && (
            <NavItem>
                <NavLink onClick={() => redirect(routes.FIELD_MATERIALS)} data-testid="field-materials">
                    <FontAwesomeIcon icon={faChartPie}/>
                        &nbsp;Muestra
                </NavLink>
            </NavItem>
        )}
        {[roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR, roles.TEAM_LEADER].includes(role) && (
            <NavItem>
                <NavLink onClick={() => redirect(routes.REVIEW)} data-testid="review">
                    <FontAwesomeIcon icon={faClipboardCheck}/>
                        &nbsp;Revisión
                </NavLink>
            </NavItem>
        )}
        {[roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR, roles.TEAM_LEADER].includes(role) && (
            <NavItem>
                <NavLink onClick={() => redirect(routes.LOGS)} data-testid="logs">
                    <FontAwesomeIcon icon={faLink}/>
                    &nbsp;Sincronizaciones
                </NavLink>
            </NavItem>
        )}
        {[roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR].includes(role) && (
            <NavItem>
                <NavLink onClick={() => redirect(routes.MONITORING)} data-testid="monitoring">
                    <FontAwesomeIcon icon={faChartLine}/>
                    &nbsp;Monitoreo
                </NavLink>
            </NavItem>
        )}
    </Nav>
);

NavItems.propTypes = {
    redirect: PropTypes.func.isRequired,
    userRoles: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default NavItems;
