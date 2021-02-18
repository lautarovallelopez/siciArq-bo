import 'react-dates/initialize';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'reactstrap';
import {DateRangePicker} from 'react-dates';
import momentPropTypes from 'react-moment-proptypes';

import {
    Dropdown, SearchInput, StateDropdown
} from '@components/common';

import StyledLabel from './styled';

const SearchParams = ({
    searchParams, setSearchParams, resetSearchParams, roles, getLogs, currentUser, isSubCoordinator
}) => {
    const [focusedInput, setFocusedInput] = useState();

    useEffect(() => () => resetSearchParams(), []);

    useEffect(() => {
        if (isSubCoordinator) {
            setSearchParams({...searchParams, state: currentUser?.attributes?.stateId});
        }
    }, []);

    useEffect(() => {
        if (searchParams) {
            getLogs(searchParams);
        }
    }, [searchParams?.state, searchParams?.role, searchParams?.fromDate, searchParams?.toDate]);

    const handleChange = ({target: {id, value}}) => setSearchParams({...searchParams, [id]: value});

    const handleDatesChange = ({startDate, endDate}) => setSearchParams({...searchParams, fromDate: startDate, toDate: endDate});

    const handleFocus = focused => setFocusedInput(focused);

    return (
        <Row data-testid="logs-search-params" className="form-group">
            <Col sm={3}>
                <StateDropdown
                    label="Jurisdicción"
                    control="state"
                    isClearable
                    value={searchParams?.state}
                    onChange={handleChange}
                    disabled={isSubCoordinator}
                />
            </Col>
            <Col sm={3}>
                <SearchInput
                    id="term"
                    label="Ingrese usuario, nombre o apellido"
                    onSearch={value => handleChange({target: {id: 'term', value}})}
                />
            </Col>
            <Col sm={3}>
                <Dropdown
                    label="Rol"
                    control="role"
                    options={roles}
                    isClearable
                    value={searchParams?.role}
                    onChange={handleChange}
                    getOptionValue={option => option.id}
                />
            </Col>
            <Col sm={3}>
                <StyledLabel>Rango de días</StyledLabel>
                <DateRangePicker
                    startDate={searchParams?.fromDate}
                    startDatePlaceholderText="Fecha Desde"
                    endDate={searchParams?.toDate}
                    endDatePlaceholderText="Fecha Hasta"
                    onDatesChange={handleDatesChange}
                    focusedInput={focusedInput}
                    onFocusChange={handleFocus}
                    startDateId="fromDate"
                    endDateId="toDate"
                    isOutsideRange={() => false}
                />
            </Col>
        </Row>
    );
};

SearchParams.propTypes = {
    setSearchParams: PropTypes.func.isRequired,
    resetSearchParams: PropTypes.func.isRequired,
    getLogs: PropTypes.func.isRequired,
    searchParams: PropTypes.shape({
        state: PropTypes.string,
        term: PropTypes.string,
        role: PropTypes.string,
        fromDate: momentPropTypes.momentObj,
        toDate: momentPropTypes.momentObj
    }),
    roles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ),
    currentUser: PropTypes.shape({
        attributes: PropTypes.shape({
            stateId: PropTypes.string
        }),
        roles: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    isSubCoordinator: PropTypes.bool.isRequired
};

SearchParams.defaultProps = {
    searchParams: undefined,
    roles: []
};

export default SearchParams;
