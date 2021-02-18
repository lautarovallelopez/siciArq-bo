import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'reactstrap';
import isEmpty from 'lodash/isEmpty';

import {Dropdown, SearchInput, StateDropdown} from '@components/common';

const SearchParams = ({
    roles, fetchUsers
}) => {
    const [searchParams, setSearchParams] = useState({});

    const handleChange = ({target: {id, value}}) => setSearchParams(previousValue => ({...previousValue, [id]: value}));

    useEffect(() => {
        if (!isEmpty(searchParams)) {
            fetchUsers(searchParams);
        }
    }, [searchParams]);

    return (
        <Row data-testid="user-search-params" className="form-group">
            <Col sm={3}>
                <SearchInput
                    id="term"
                    label="Búsqueda por Usuario, Nombre o Apellido"
                    onSearch={value => handleChange({target: {id: 'term', value}})}
                />
            </Col>
            <Col sm={3}>
                <Dropdown
                    label="Rol"
                    control="role"
                    options={roles}
                    isClearable
                    value={searchParams.role}
                    onChange={handleChange}
                    getOptionValue={option => option.id}
                />
            </Col>
            <Col sm={3}>
                <StateDropdown
                    label="Provincia"
                    control="state"
                    isClearable
                    value={searchParams.state}
                    onChange={handleChange}
                />
            </Col>
        </Row>
    );
};

SearchParams.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    roles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    )
};

SearchParams.defaultProps = {
    roles: []
};

export default SearchParams;
