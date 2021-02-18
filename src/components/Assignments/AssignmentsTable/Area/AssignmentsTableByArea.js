import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'reactstrap';

import Dropdown from '@components/common/Dropdown';
import {assignmentsPropTypes, userPropTypes} from '@util/propTypes';
import {getFullName} from '@util/ui';

import {
    StyledTH, TotalDwellings, Tr
} from '../styled';

const AssignmentsTableByArea = ({
    assignments, teamLeaders, pollsters, updateAssignment
}) => (
    <Table striped data-testid="assignments-table-by-area">
        <thead>
            <tr>
                <StyledTH>UPS</StyledTH>
                <StyledTH>Área</StyledTH>
                <th>Jefe de equipo</th>
                <th>Encuestador</th>
                <TotalDwellings>Total de viviendas</TotalDwellings>
            </tr>
        </thead>
        <tbody>
            {assignments.map((assignment, index) => (
                <Tr key={assignment.id} toAssign={assignment.toAssign}>
                    <td className="text-center" data-testid={`ups-${index}`}>{assignment.ups}</td>
                    <td className="text-center" data-testid={`area-${index}`}>{assignment.area}</td>
                    <td>
                        <Dropdown
                            options={teamLeaders}
                            getOptionValue={option => option.id}
                            getOptionLabel={option => getFullName(option)}
                            onChange={({target: {id, value}}) => (
                                value === assignment.teamLeader ? {} : updateAssignment({...assignment, [id]: value})
                            )}
                            control="teamLeader"
                            value={assignment.teamLeader}
                            isClearable
                            disabled={
                                !!assignment.teamLeader && !assignment.toAssign
                            }
                            id={`teamLeader-${index}`}
                        />
                    </td>
                    <td>
                        <Dropdown
                            options={pollsters}
                            getOptionValue={option => option.id}
                            getOptionLabel={option => getFullName(option)}
                            onChange={({target: {id, value}}) => (
                                value === assignment.pollster ? {} : updateAssignment({...assignment, [id]: value})
                            )}
                            control="pollster"
                            value={assignment.pollster}
                            disabled={
                                !!assignment.teamLeader && !assignment.toAssign
                            }
                            isClearable
                            id={`pollster-${index}`}
                        />
                    </td>
                    <td className="text-center" data-testid={`dwellings-${index}`}>{assignment.dwellings}</td>
                </Tr>
            ))}
        </tbody>
    </Table>
);

AssignmentsTableByArea.propTypes = {
    updateAssignment: PropTypes.func.isRequired,
    assignments: PropTypes.arrayOf(assignmentsPropTypes),
    teamLeaders: PropTypes.arrayOf(userPropTypes),
    pollsters: PropTypes.arrayOf(userPropTypes)
};

AssignmentsTableByArea.defaultProps = {
    teamLeaders: [],
    pollsters: [],
    assignments: []
};

export default AssignmentsTableByArea;
