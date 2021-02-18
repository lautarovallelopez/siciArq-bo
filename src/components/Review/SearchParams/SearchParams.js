import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Col, Row, FormGroup} from 'reactstrap';

import {
    AreasDropdown, Dropdown, UpsDropdown, StateDropdown, StatusDropdown, SituationDropdown
} from '@components/common';
import roles from '@constants/roles';
import {userPropTypes} from '@util/propTypes';
import {getFullName} from '@util/ui';

import StyledRow from './styled';

const SearchParams = ({
    searchParams,
    setSearchParams,
    fetchUsers,
    teamLeaders,
    pollsters,
    getSurveys,
    getSituations,
    currentUser,
    isSubCoordinator
}) => {
    useEffect(() => {
        if (isSubCoordinator) {
            setSearchParams({...searchParams, state: currentUser?.attributes?.stateId});
        }
    }, []);

    useEffect(() => {
        if (searchParams?.state) {
            getSurveys(searchParams);
        }
    }, [searchParams]);

    const handleChangeState = ({target: {id, value}}) => {
        setSearchParams({
            ...searchParams, ups: undefined, area: undefined, [id]: value
        });
        fetchUsers(value, [roles.TEAM_LEADER, roles.POLLSTER]);
    };

    const handleChange = ({target: {id, value}}) => setSearchParams({
        ...searchParams, [id]: value
    });

    const handleChangeStatus = ({target: {id, value}}) => {
        setSearchParams({
            ...searchParams, situation: undefined, [id]: value
        });
        getSituations(value);
    };

    const handleChangeUps = ({target: {id, value}}) => setSearchParams({
        ...searchParams,
        [id]: value,
        area: undefined
    });

    return (
        <FormGroup data-testid="review-search-params">
            <Row>
                <Col sm={3}>
                    <StateDropdown
                        label="Jurisdicción"
                        control="state"
                        isClearable
                        value={searchParams?.state}
                        onChange={handleChangeState}
                        disabled={isSubCoordinator}
                    />
                </Col>
                <Col sm={3}>
                    <UpsDropdown
                        label="Ups"
                        control="ups"
                        value={searchParams?.ups}
                        onChange={handleChangeUps}
                        state={searchParams?.state}
                        isClearable
                    />
                </Col>
                <Col sm={3}>
                    <AreasDropdown
                        label="Área"
                        control="area"
                        state={searchParams?.state}
                        ups={searchParams?.ups}
                        value={searchParams?.area}
                        onChange={handleChange}
                        isClearable
                    />
                </Col>
                <Col sm={3}>
                    <Dropdown
                        options={teamLeaders}
                        getOptionValue={option => option.id}
                        getOptionLabel={option => getFullName(option)}
                        onChange={e => (e.target.value === searchParams.teamLeader ? {} : handleChange(e))}
                        label="Jefe de equipo"
                        control="teamLeader"
                        value={searchParams?.teamLeader}
                        isClearable
                    />
                </Col>
            </Row>
            <StyledRow>
                <Col sm={3}>
                    <Dropdown
                        options={pollsters}
                        getOptionValue={option => option.id}
                        getOptionLabel={option => getFullName(option)}
                        onChange={e => (e.target.value === searchParams.pollster ? {} : handleChange(e))}
                        label="Encuestador"
                        control="pollster"
                        value={searchParams?.pollster}
                        isClearable
                    />
                </Col>
                <Col sm={3}>
                    <StatusDropdown
                        isClearable
                        value={searchParams?.status}
                        onChange={handleChangeStatus}
                    />
                </Col>
                <Col sm={3}>
                    <SituationDropdown
                        isClearable
                        value={searchParams?.situation}
                        onChange={handleChange}
                    />
                </Col>
            </StyledRow>
        </FormGroup>
    );
};

SearchParams.propTypes = {
    setSearchParams: PropTypes.func.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    getSurveys: PropTypes.func.isRequired,
    getSituations: PropTypes.func.isRequired,
    searchParams: PropTypes.shape({
        state: PropTypes.string,
        ups: PropTypes.number,
        area: PropTypes.number,
        status: PropTypes.number,
        situation: PropTypes.number,
        teamLeader: PropTypes.string,
        pollster: PropTypes.string
    }),
    pollsters: PropTypes.arrayOf(userPropTypes),
    teamLeaders: PropTypes.arrayOf(userPropTypes),
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
    pollsters: [],
    teamLeaders: []
};

export default SearchParams;
