import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'reactstrap';
import {faUser} from '@fortawesome/free-solid-svg-icons';

import find from 'lodash/find';
import get from 'lodash/get';
import head from 'lodash/head';

import {
    EmailField,
    TextField
} from '@indec/react-commons';
import {User} from '@model';
import Title from '@components/common/Title';

const Account = ({user, roles, states}) => (
    <>
        <Title title="Mi Perfil" icon={faUser}/>
        <Row>
            <Col sm={4}>
                <TextField
                    control="username"
                    label="Usuario"
                    value={user.username}
                    disabled
                />
            </Col>
            <Col sm={4}>
                <EmailField
                    control="email"
                    label="E-mail"
                    value={user.email}
                    disabled
                />
            </Col>
            <Col sm={4}>
                <TextField
                    control="name"
                    label="Nombre"
                    disabled
                    value={user.name}
                />
            </Col>
        </Row>
        <Row>
            <Col sm={4}>
                <TextField
                    control="surname"
                    label="Apellido"
                    disabled
                    value={user.surname}
                />
            </Col>
            <Col sm={4}>
                <TextField
                    control="phone"
                    label="Celular"
                    disabled
                    value={user.attributes?.phone}
                />
            </Col>
            <Col sm={4}>
                <TextField
                    control="documentId"
                    label="Documento"
                    disabled
                    value={user.documentId}
                />
            </Col>
        </Row>
        <Row>
            <Col sm={4}>
                <TextField
                    control="role"
                    label="Rol"
                    disabled
                    value={
                        get(
                            find(roles, role => head(user.roles) === role.id), 'name'
                        )
                    }
                />
            </Col>
            <Col sm={4}>
                <TextField
                    control="stateId"
                    label="Provincia"
                    disabled
                    value={
                        get(find(states, state => user.attributes?.stateId === state._id), 'name')
                    }
                />
            </Col>
        </Row>
    </>
);

Account.propTypes = {
    user: PropTypes.instanceOf(User).isRequired,
    roles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ),
    states: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    )
};

Account.defaultProps = {
    roles: [],
    states: []
};

export default Account;
