import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'reactstrap';

import Dropdown from '@components/common/Dropdown';
import {assignmentsPropTypes, userPropTypes} from '@util/propTypes';
import {getFullName} from '@util/ui';

import {
    StyledTH, TotalDwellings, Tr
} from '../styled';

const AssignmentsTableByUps = ({
    assignments, subCoordinators, updateAssignment
}) => (
    <Table striped data-testid="assignments-table-by-ups">
        <thead>
            <tr>
                <StyledTH>UPS</StyledTH>
                <th>Subcoordinador</th>
                <th>Cantidad de áreas</th>
                <TotalDwellings>Cantidad de viviendas</TotalDwellings>
            </tr>
        </thead>
        <tbody>
            {assignments.map((assignment, index) => (
                <Tr key={assignment.id} toAssign={assignment.toAssign}>
                    <td className="text-center" data-testid={`ups-${index}`}>{assignment.ups}</td>
                    <td>
                        <Dropdown
                            options={subCoordinators}
                            getOptionValue={option => option.id}
                            getOptionLabel={option => getFullName(option)}
                            onChange={({target: {id, value}}) => (
                                value === assignment.subCoordinator ? {} : updateAssignment({...assignment, [id]: value})
                            )}
                            control="subCoordinator"
                            value={assignment.subCoordinator}
                            isClearable
                            id={`sub-coordinator-${index}`}
                        />
                    </td>
                    <td className="text-center" data-testid={`areas-${index}`}>{assignment.areas}</td>
                    <td className="text-center" data-testid={`dwellings-${index}`}>{assignment.dwellings}</td>
                </Tr>
            ))}
        </tbody>
    </Table>
);

AssignmentsTableByUps.propTypes = {
    updateAssignment: PropTypes.func.isRequired,
    assignments: PropTypes.arrayOf(assignmentsPropTypes),
    subCoordinators: PropTypes.arrayOf(userPropTypes)
};

AssignmentsTableByUps.defaultProps = {
    subCoordinators: [],
    assignments: []
};

export default AssignmentsTableByUps;
