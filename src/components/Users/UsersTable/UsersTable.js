import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {
    Col, Row, Table, DropdownItem, Dropdown
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers, faEllipsisH, faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import size from 'lodash/size';

import Spinner from '@components/common/Spinner';
import roles from '@constants/roles';
import routes from '@constants/routes';
import transformRoute from '@util/transformRoute';
import NoFoundResults from '@components/common/NoFoundResults';

import {DropdownContainer, StyledDropdownToggle, StyledDropdownMenu} from './styled';

const UsersTable = ({
    users, deleteUser, recoveryPassword, getUsers, loading, currentUser
}) => {
    const [dropdownOpen, setDropdownOpen] = useState();

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <Row>
            <Col sm={12} className="justify-content-center" data-testid="users-table">
                <Spinner loading={loading}>
                    <>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Usuario</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Rol</th>
                                    <th>Jurisdicción</th>
                                    <th aria-label="action"/>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user.id}>
                                        <td data-testid={`user-${index}-username`} className="text-center">{user.username}</td>
                                        <td data-testid={`user-${index}-name`} className="text-center">{user.name}</td>
                                        <td data-testid={`user-${index}-surname`} className="text-center">{user.surname}</td>
                                        <td data-testid={`user-${index}-role`} className="text-center">{user.role}</td>
                                        <td data-testid={`user-${index}-state`} className="text-center">{user.state}</td>
                                        <td>
                                            <DropdownContainer>
                                                <Dropdown
                                                    isOpen={dropdownOpen === user.id}
                                                    toggle={() => setDropdownOpen(dropdownOpen === user.id ? undefined : user.id)}
                                                    direction="left"
                                                >
                                                    <StyledDropdownToggle
                                                        tag="span"
                                                        data-toggle="dropdown"
                                                        aria-expanded={dropdownOpen}
                                                        isOpen={dropdownOpen === user.id}
                                                    >
                                                        <FontAwesomeIcon icon={faEllipsisH} size="2x" color="#a4aba5"/>
                                                    </StyledDropdownToggle>
                                                    <StyledDropdownMenu>
                                                        <DropdownItem
                                                            tag={Link}
                                                            to={transformRoute(routes.EDIT_USER, {id: user.id})}
                                                            data-testid={`user-${index}-edit`}
                                                        >
                                                            Editar
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            data-testid={`user-${index}-recoverPassword`}
                                                            onClick={() => recoveryPassword(user)}
                                                        >
                                                            Recuperar contraseña
                                                        </DropdownItem>
                                                        {currentUser.roles.includes(roles.NATIONAL_COORDINATOR) && (
                                                            <DropdownItem data-testid={`user-${index}-delete`} onClick={() => deleteUser(user)}>
                                                                {user.deleted ? 'Habilitar' : 'Deshabilitar'}
                                                            </DropdownItem>
                                                        )}
                                                        <DropdownItem
                                                            tag={Link}
                                                            to={transformRoute(routes.USER_CREDENTIAL, {id: user.id})}
                                                            data-testid={`user-${index}-credential`}
                                                        >
                                                            Credencial
                                                        </DropdownItem>
                                                    </StyledDropdownMenu>
                                                </Dropdown>
                                                {user.deleted && (
                                                    <FontAwesomeIcon
                                                        icon={faExclamationCircle}
                                                        color="#CD0000"
                                                        className="ml-4"
                                                        title="Deshabilitado"
                                                        data-testid="user-disabled-icon"
                                                    />
                                                )}
                                            </DropdownContainer>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <NoFoundResults show={size(users) === 0} title="No se encontraron usuarios." icon={faUsers}/>
                    </>
                </Spinner>
            </Col>
        </Row>
    );
};

UsersTable.propTypes = {
    getUsers: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    recoveryPassword: PropTypes.func.isRequired,
    currentUser: PropTypes.shape({
        roles: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            surname: PropTypes.string.isRequired,
            role: PropTypes.string.isRequired,
            state: PropTypes.string
        })
    ),
    loading: PropTypes.bool
};

UsersTable.defaultProps = {
    users: [],
    loading: true
};

export default UsersTable;
