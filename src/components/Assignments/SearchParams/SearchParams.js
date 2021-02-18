import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'reactstrap';
import pluralize from 'pluralize';

import Dropdown from '@components/common/Dropdown';
import {
    AreasDropdown, SaveButton, SegmentDropdown, StateDropdown, UpsDropdown
} from '@components/common';
import {assignmentsPropTypes, assignmentsTypesProptypes} from '@util/propTypes';
import assignmentTypes from '@constants/assignmentTypes';
import roles from '@constants/roles';

import AssignmentsPreview from '../AssignmentsPreview';

const SearchParams = ({
    getAssignments,
    setSearchParams,
    searchParams,
    assignments,
    updateAssignments,
    openConfirmModal,
    loading,
    assignmentsTypesOptions,
    resetSearchParams,
    isValidGetAssignments,
    role,
    state
}) => {
    useEffect(() => {
        if (isValidGetAssignments) {
            getAssignments(searchParams, searchParams.assignmentType);
        }
    }, [searchParams]);

    useEffect(() => {
        if (role !== roles.NATIONAL_COORDINATOR) {
            setSearchParams({...searchParams, state});
        }
        return () => resetSearchParams();
    }, []);

    const handleChangeAssignmentTypeAndState = ({target: {id, value}}) => setSearchParams({
        ...searchParams, ups: undefined, area: undefined, segment: undefined, [id]: value
    });

    const handleChange = ({target: {id, value}}) => setSearchParams({...searchParams, [id]: value});

    const handleChangeUps = ({target: {id, value}}) => setSearchParams({
        ...searchParams,
        [id]: value,
        area: undefined
    });

    return (
        <Row data-testid="searchParams" className="form-group">
            <Col sm={2}>
                <StateDropdown
                    label="Jurisdicción"
                    control="state"
                    isClearable
                    value={searchParams?.state}
                    onChange={handleChangeAssignmentTypeAndState}
                    disabled={role !== roles.NATIONAL_COORDINATOR}
                />
            </Col>
            <Col sm={2}>
                <Dropdown
                    label="Tipo de asignación"
                    control="assignmentType"
                    options={assignmentsTypesOptions}
                    value={searchParams?.assignmentType}
                    onChange={handleChangeAssignmentTypeAndState}
                    getOptionValue={option => option.id}
                    getOptionLabel={option => option.label}
                />
            </Col>
            <Col sm={2}>
                <UpsDropdown
                    label="Ups"
                    control="ups"
                    value={searchParams?.ups}
                    onChange={handleChangeUps}
                    state={searchParams?.state}
                    isClearable
                />
            </Col>
            {searchParams?.assignmentType !== assignmentTypes.UPS && (
                <Col sm={2}>
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
            )}
            {searchParams?.assignmentType
            && [assignmentTypes.SEGMENT, assignmentTypes.ADDRESS, assignmentTypes.REASSIGNMENT].includes(searchParams.assignmentType)
            && (
                <Col sm={2}>
                    <SegmentDropdown
                        label="Segmento"
                        control="segment"
                        state={searchParams?.state}
                        ups={searchParams?.ups}
                        area={searchParams?.area}
                        value={searchParams?.segment}
                        onChange={handleChange}
                        isClearable
                    />
                </Col>
            )}
            <Col sm={2} className="d-flex flex-column justify-content-center mt-4">
                <SaveButton
                    disabled={assignments.length === 0 || loading}
                    loading={loading}
                    onSave={() => openConfirmModal({
                        title: 'Confirmación de asignación',
                        onAccept: () => updateAssignments(assignments, searchParams.assignmentType),
                        message: `Tiene ${assignments.length} ${pluralize('asignación pendiente', assignments.length)}. 
                        ¿Desea continuar con la asignación?`,
                        children: (
                            <AssignmentsPreview/>
                        ),
                        large: true
                    })}
                />
            </Col>
        </Row>
    );
};

SearchParams.propTypes = {
    getAssignments: PropTypes.func.isRequired,
    setSearchParams: PropTypes.func.isRequired,
    updateAssignments: PropTypes.func.isRequired,
    openConfirmModal: PropTypes.func.isRequired,
    resetSearchParams: PropTypes.func.isRequired,
    searchParams: PropTypes.shape({
        state: PropTypes.string,
        assignmentType: PropTypes.number,
        ups: PropTypes.number,
        area: PropTypes.number,
        segment: PropTypes.number
    }),
    loading: PropTypes.bool.isRequired,
    isValidGetAssignments: PropTypes.bool.isRequired,
    assignments: PropTypes.arrayOf(assignmentsPropTypes),
    assignmentsTypesOptions: PropTypes.arrayOf(assignmentsTypesProptypes).isRequired,
    role: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
};

SearchParams.defaultProps = {
    searchParams: undefined,
    assignments: []
};

export default SearchParams;
