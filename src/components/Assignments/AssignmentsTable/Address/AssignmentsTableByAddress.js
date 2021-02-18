import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'reactstrap';

import Address from '@components/common/Address';
import Dropdown from '@components/common/Dropdown';
import {assignmentsPropTypes, userPropTypes} from '@util/propTypes';
import {getFullName} from '@util/ui';

import {Address as AddressHeader, StyledTH, Tr} from '../styled';

const AssignmentsTableByAddress = ({
    assignments, teamLeaders, pollsters, updateAssignment
}) => (
    <Table striped data-testid="assignments-table-by-address">
        <thead>
            <tr>
                <StyledTH>UPS</StyledTH>
                <StyledTH>Área</StyledTH>
                <StyledTH>Segmento</StyledTH>
                <StyledTH>N° Listado</StyledTH>
                <AddressHeader>Domicilio</AddressHeader>
                <th>Jefe de equipo</th>
                <th>Encuestador</th>
            </tr>
        </thead>
        <tbody>
            {assignments.map((assignment, index) => (
                <Tr key={assignment.id} toAssign={assignment.toAssign}>
                    <td className="text-center" data-testid={`ups-${index}`}>{assignment.ups}</td>
                    <td className="text-center" data-testid={`area-${index}`}>{assignment.area}</td>
                    <td className="text-center" data-testid={`segment-${index}`}>{assignment.segment}</td>
                    <td className="text-center" data-testid={`list-number-${index}`}>
                        {`${assignment.listNumber}`}
                    </td>
                    <td className="text-center" data-testid={`address-${index}`}>
                        <Address address={assignment}/>
                    </td>
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
                                !!assignment.teamLeader
                            && !assignment.toAssign
                            }
                            isClearable
                            id={`pollster-${index}`}
                        />
                    </td>
                </Tr>
            ))}
        </tbody>
    </Table>
);

AssignmentsTableByAddress.propTypes = {
    updateAssignment: PropTypes.func.isRequired,
    assignments: PropTypes.arrayOf(assignmentsPropTypes),
    teamLeaders: PropTypes.arrayOf(userPropTypes),
    pollsters: PropTypes.arrayOf(userPropTypes)
};

AssignmentsTableByAddress.defaultProps = {
    teamLeaders: [],
    pollsters: [],
    assignments: []
};

export default AssignmentsTableByAddress;
