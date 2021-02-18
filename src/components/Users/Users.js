import React from 'react';
import {
    Col, Row, Button
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers, faUserPlus} from '@fortawesome/free-solid-svg-icons';

import routes from '@constants/routes';
import Title from '@components/common/Title';

import SearchParams from './SearchParams';
import UsersTable from './UsersTable';

const Users = () => (
    <>
        <Title icon={faUsers} title="Usuarios"/>
        <SearchParams/>
        <Row>
            <Col sm={12} className="form-group d-flex">
                <Button
                    data-testid="new-button"
                    color="primary"
                    tag={Link}
                    to={routes.NEW_USER}
                    className="ml-auto"
                >
                    <FontAwesomeIcon icon={faUserPlus} data-testid="new-user-icon"/>
                &nbsp; Nuevo
                </Button>
            </Col>
        </Row>
        <UsersTable/>
    </>
);

export default Users;
